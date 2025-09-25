"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "cpp-for-malware-development",
    title: "CPP-For-Malware-Development",
    description:
      "This project showcases various techniques employed in malware development, reverse engineering, and evasion tactics.",
    longDescription:
      "The implementations are written in C++ and reflect methods often used by threat actors, with educational focus on understanding techniques and defenses.",
    link: "https://github.com/sanskar-sudo/CPP-For-Malware-Development",
    fallbackStars: 1,
    tags: ["C++", "Malware", "Evasion", "Reverse Engineering"]
  },
  {
    id: "rottentomato-edr",
    title: "rottenTomato-EDR-",
    description:
      "A project that builds a simple Windows EDR from the ground up.",
    longDescription:
      "Starts with a basic kernel driver and progressively adds more advanced security features, illustrating EDR concepts end-to-end.",
    link: "https://github.com/sanskar-sudo/rottenTomato-EDR-",
    fallbackStars: 2,
    tags: ["Windows", "EDR", "Kernel", "Security"]
  },
  {
    id: "snortify",
    title: "Snortify",
    description:
      "A web application for generating Snort IDS rules with a user-friendly interface.",
    longDescription:
      "Helps analysts craft, validate, and organize Snort rules quickly with sensible defaults and helpful guidance.",
    link: "https://github.com/sanskar-sudo/Snortify",
    fallbackStars: 0,
    tags: ["Snort", "IDS", "Web", "Security"]
  },
  {
    id: "chainchat",
    title: "ChainChat",
    description: "Blockchain based chatting application.",
    longDescription:
      "Leverages blockchain primitives to provide integrity-backed messaging semantics and tamper-evident histories.",
    link: "https://github.com/sanskar-sudo/ChainChat",
    fallbackStars: 0,
    tags: ["Blockchain", "DApp", "Chat"]
  },
  {
    id: "tricare",
    title: "TriCare",
    description:
      "Blockchain based data/record storage system to store data on-chain rather than a traditional DB.",
    longDescription:
      "Reduces ransomware risk and improves availability by aligning with blockchain protocols for durability and auditability.",
    link: "https://github.com/sanskar-sudo/TriCare",
    fallbackStars: 0,
    tags: ["Blockchain", "Storage", "Security"]
  }
];

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore my projects and click on a title to visit the repository.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                id={project.id}
                className="scroll-mt-20"
              >
                <Card className="bg-secondary/20 border-border hover:border-emerald-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      <Link href={project.link} target="_blank" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.longDescription}
                    </p>

                    {project.features && (
                      <div className="mt-4">
                        <p className="font-medium mb-2">Key Features:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-muted-foreground">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end items-center">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.link} target="_blank" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Repository
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}