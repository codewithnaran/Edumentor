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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Download, PlayCircle } from "lucide-react";

export default function CoursePage() {
  const [activeLesson, setActiveLesson] = useState(1);
  const [courseProgress, setCourseProgress] = useState(25);

  const lessons = [
    { id: 1, title: "Introduction to React", duration: "15:00" },
    { id: 2, title: "Components and Props", duration: "20:00" },
    { id: 3, title: "State and Lifecycle", duration: "25:00" },
    { id: 4, title: "Handling Events", duration: "18:00" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Web Development with React</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>4 lessons • 1h 18m total length</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="lessons">
                <TabsList>
                  <TabsTrigger value="lessons">Lessons</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                <TabsContent value="lessons">
                  <ul className="space-y-2">
                    {lessons.map((lesson) => (
                      <li
                        key={lesson.id}
                        className={`p-2 rounded cursor-pointer ${
                          activeLesson === lesson.id ? "bg-muted" : ""
                        }`}
                        onClick={() => setActiveLesson(lesson.id)}
                      >
                        <div className="flex justify-between items-center">
                          <span>{lesson.title}</span>
                          <span className="text-muted-foreground">
                            {lesson.duration}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="resources">
                  <ul className="space-y-2">
                    <li>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Download className="mr-2 h-4 w-4" /> React Cheat
                        Sheet.pdf
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Download className="mr-2 h-4 w-4" /> Course Slides.pptx
                      </Button>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={courseProgress} className="w-full" />
              <p className="text-center mt-2">{courseProgress}% Complete</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Quiz</CardTitle>
              <CardDescription>
                Test your knowledge after each lesson
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Quiz</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
