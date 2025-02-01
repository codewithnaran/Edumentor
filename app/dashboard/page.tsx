"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", progress: 80 },
  { name: "Week 2", progress: 65 },
  { name: "Week 3", progress: 90 },
  { name: "Week 4", progress: 75 },
];

export default function Dashboard() {
  const [progress, setProgress] = useState(65);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back, John!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>Your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />
            <p className="text-center mt-2">{progress}% Complete</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Lessons</CardTitle>
            <CardDescription>Your next learning milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Introduction to React - Tomorrow, 2:00 PM</li>
              <li>Advanced JavaScript Concepts - Friday, 10:00 AM</li>
              <li>UI/UX Design Principles - Next Monday, 3:00 PM</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>Top performers this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              <li>1. Sarah M. - 1250 points</li>
              <li>2. Alex K. - 1100 points</li>
              <li>3. You - 950 points</li>
              <li>4. Emma R. - 900 points</li>
              <li>5. Michael T. - 850 points</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
          <CardDescription>Your weekly performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="progress" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course Overview</CardTitle>
          <CardDescription>Your enrolled courses and progress</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="inprogress">
            <TabsList>
              <TabsTrigger value="inprogress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="inprogress">
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold">Web Development Fundamentals</p>
                  <Progress value={75} className="w-full" />
                  <p className="text-sm text-muted-foreground">75% Complete</p>
                </li>
                <li>
                  <p className="font-semibold">Data Science Essentials</p>
                  <Progress value={40} className="w-full" />
                  <p className="text-sm text-muted-foreground">40% Complete</p>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="completed">
              <ul className="space-y-2">
                <li>Introduction to Python Programming</li>
                <li>Digital Marketing Basics</li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
