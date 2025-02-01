import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Award, Zap } from "lucide-react";
import AIChatbot from "@/components/ai-chatbot";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to EduMentor
        </h1>
        <p className="text-xl mb-8">Personalized Learning Powered by AI</p>
        <Button asChild size="lg">
          <Link href="/login">Get Started</Link>
        </Button>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" /> Personalized Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-driven content tailored to your learning style and pace.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" /> Interactive Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Engage with peers and experts in our vibrant learning community.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2" /> Earn Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Gain recognition for your achievements with our certified
                courses.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2" /> Real-time Progress Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor your learning journey with advanced analytics and
                insights.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Amazing Platform!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  EduMentor has transformed the way I learn. The personalized
                  approach and AI-powered recommendations have helped me achieve
                  my goals faster.
                </p>
                <p className="font-semibold">- John Doe, Student</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Developers Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meet Our Developers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src="https://iili.io/2Z7vtOQ.png"
                  alt="Narayan Bhusal"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>Narayan Bhusal</CardTitle>
                  <CardDescription>Lead Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Hi, I'm Narayan Bhusal! A frontend developer passionate about
                tech-driven learning solutions. Excited to build for Quality
                Education! 🚀
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src="https://iili.io/2Z7vNls.jpg"
                  alt="Narayan Bhusal"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>Nayan Acharya</CardTitle>
                  <CardDescription>Lead Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Hi, I'm Nayan! A creative frontend developer focused on building
                impactful solutions. Excited to innovate for Quality Education
                in this hackathon! 🎯✨
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Try Our AI Assistant
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>EduMentor AI Chat</CardTitle>
            <CardDescription>
              Ask our AI assistant anything about our platform or courses!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AIChatbot />
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl mb-8">
          Join thousands of students already benefiting from EduMentor.
        </p>
        <Button asChild size="lg">
          <Link href="/login">Sign Up Now</Link>
        </Button>
      </section>
    </div>
  );
}
