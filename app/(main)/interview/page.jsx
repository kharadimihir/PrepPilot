"use server"
import { getAssessment } from "@/actions/interview";
import React from "react";
import StatsCard from "./_components/stats-card";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

const InterviewPage = async () => {

  const assessments = await getAssessment();

  return (
    <div>
      <h1 className="text-6xl font-bold gradient-title mb-5">
        Interview Preparation
      </h1>

      <div>
      <StatsCard assessments={assessments} />
      <PerformanceChart assessments={assessments} />
      <QuizList  assessments={assessments} />
      </div>
    </div>
  );
};

export default InterviewPage;
