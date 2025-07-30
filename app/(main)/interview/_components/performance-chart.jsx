"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PerformanceChart = ({ assessments }) => {
  const [chartData, setChartData] = useState([]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-background border rounded-lg p-2 shadow-md">
          <p className="text-sm font-medium">
            Score: {payload[0].value}%
          </p>
          <p className="text-xs text-muted-foreground">
            {payload[0].payload.date}
          </p>
        </div>
      );
    }
  
    return null;
  };

  useEffect(() => {
    if (assessments) {

      const sorted = [...assessments].sort(
        (a,b) => new Date(a.createdAt) - new Date (b.createdAt)
      )
      const formatedData = sorted.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd"),
        score: assessment.quizScore,
      }));
      setChartData(formatedData);
    }
  }, [assessments]);

  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="gradient-title text-3xl md:text-4xl">
          Performance Trend
        </CardTitle>
        <CardDescription>Your quiz score over time</CardDescription>  
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip
                content={<CustomTooltip />}
              />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
