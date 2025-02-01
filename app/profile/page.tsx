"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("achievements");

  const achievements = [
    {
      id: 1,
      title: "Course Completion Master",
      description: "Completed 5 courses",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: "Quiz Whiz",
      description: "Scored 100% on 10 quizzes",
      icon: Award,
    },
    {
      id: 3,
      title: "Consistent Learner",
      description: "Logged in for 30 consecutive days",
      icon: BookOpen,
    },
  ];

  const completedCourses = [
    { id: 1, title: "Introduction to React", progress: 100 },
    { id: 2, title: "Advanced JavaScript Concepts", progress: 100 },
    { id: 3, title: "UI/UX Design Fundamentals", progress: 100 },
  ];

  const savedNotes = [
    {
      id: 1,
      title: "React Hooks Overview",
      course: "Advanced React Techniques",
    },
    { id: 2, title: "State Management Patterns", course: "Redux Masterclass" },
    { id: 3, title: "Responsive Design Tips", course: "Modern CSS and SASS" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
          JD
        </div>
        <div>
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">john.doe@example.com</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="courses">Completed Courses</TabsTrigger>
          <TabsTrigger value="notes">Saved Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <achievement.icon className="mr-2 h-5 w-5" />
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="courses">
          <div className="space-y-4">
            {completedCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={course.progress} className="w-full" />
                  <p className="text-center mt-2">Completed</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="notes">
          <div className="space-y-4">
            {savedNotes.map((note) => (
              <Card key={note.id}>
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>
                  <CardDescription>{note.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">View Note</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
