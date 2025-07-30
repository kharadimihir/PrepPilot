import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "../prisma";
import { inngest } from "./client";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const  generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" },
  async ({ step }) => {
    const industries = await step.run("Fetch Industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    });

    const successes = [];
    const failures = [];

    for (const { industry } of industries) {
      const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "High" | "Medium" | "Low",
      "topSkills": ["skill1", "skill2"],
      "marketOutlook": "Positive" | "Neutral" | "Negative",
      "keyTrends": ["trend1", "trend2"],
      "recommendedSkills": ["skill1", "skill2"]
    }
    
    IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
    Include at least 5 common roles for salary ranges.
    Growth rate should be a percentage.
    Include at least 5 skills and trends.
  `;

      const res = await step.ai.wrap(
        "gemini",
        async (p) => {
          return await model.generateContent(p);
        },
        prompt
      );

      // const text = res.response.candidates[0].content.parts[0].text || " ";
      const [candidate] = res.response.candidates || [];

      const parts = candidate?.content?.parts || [];

      const text = parts
        .map((p) => p.text)
        .join("")
        .trim();

      // console.log(text);
      try {
        const cleanedText = text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();
        console.log("cleaned text", cleanedText);
        const insights = JSON.parse(cleanedText);
        const updatedDemandLevel = insights.demandLevel.toUpperCase();
        const updatedMarketOutlook = insights.marketOutlook.toUpperCase();

        await step.run(`Update ${industry} Insights`, async () => {
          await db.industryInsight.update({
            where: {
              industry,
            },
            data: {
              ...insights,
              demandLevel: updatedDemandLevel,
              marketOutlook: updatedMarketOutlook,
              lastUpdated: new Date(),
              nextUpdated: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        });
        successes.push(industry);
      } catch (err) {
        console.error(
          `Error parsing Gemini response for industry: ${industry}`,
          err
        );
        failures.push(industry);
      }
      return {
        message: "Industry insights update complete",
        updatedCount: successes.length,
        failedCount: failures.length,
        successes,
        failures,
      };
    }
  }
);
