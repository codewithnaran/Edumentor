"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, AlertCircle } from "lucide-react";
import { useChat } from "ai/react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type React from "react";

const AIChatbot: React.FC = () => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    reload,
    stop,
  } = useChat({
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hello! I'm your mentoring assistant. Where would you like to explore today?",
      },
    ],
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (autoScroll && scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [autoScroll, scrollAreaRef]); // Removed unnecessary dependency: messages

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setAutoScroll(true);
      await handleSubmit(e);
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <div className="flex flex-col h-[400px] border rounded-md">
      <ScrollArea
        ref={scrollAreaRef}
        className="flex-grow p-4"
        onWheel={() => setAutoScroll(false)}
      >
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error.message || "An error occurred. Please try again."}
            </AlertDescription>
          </Alert>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="text-left">
            <div className="inline-block bg-muted px-4 py-2 rounded-lg">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
      </ScrollArea>

      <div className="p-4 border-t">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me about any travel destination..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Send"
              )}
            </Button>
          </div>

          {isLoading && (
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => stop()}
              >
                Stop generating
              </Button>
            </div>
          )}

          {error && (
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => reload()}
              >
                Retry
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AIChatbot;
