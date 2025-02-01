"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, MessageSquare, Tag } from "lucide-react";

const forumPosts = [
  {
    id: 1,
    title: "How to optimize React performance?",
    author: "John Doe",
    date: "2 hours ago",
    category: "React",
    upvotes: 15,
    comments: 7,
  },
  {
    id: 2,
    title: "Best practices for state management in large applications",
    author: "Jane Smith",
    date: "1 day ago",
    category: "State Management",
    upvotes: 32,
    comments: 12,
  },
  {
    id: 3,
    title: "Implementing authentication in Next.js",
    author: "Mike Johnson",
    date: "3 days ago",
    category: "Next.js",
    upvotes: 28,
    comments: 9,
  },
];

export default function CommunityForum() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = forumPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Community Forum</h1>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search forum posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsTrigger value="nextjs">Next.js</TabsTrigger>
          <TabsTrigger value="state">State Management</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="mb-4">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  Posted by {post.author} • {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Tag className="h-4 w-4" />
                  <span>{post.category}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <ArrowUp className="mr-2 h-4 w-4" />
                    {post.upvotes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {post.comments}
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        {/* Add similar TabsContent for other categories */}
      </Tabs>
    </div>
  );
}
