"use client";

import PageLayout from "@/components/PageLayout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Shield, Terminal, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts as allBlogPosts } from "@/lib/blogData";

const MotionLink = motion(Link);

const latestPosts = allBlogPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2);

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hey, I'm 5anskarr.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex += 1;
      setDisplayedText(fullText.slice(0, currentIndex));
      if (currentIndex >= fullText.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="flex flex-col items-center text-center pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 pb-1 md:pb-2">
              <span aria-label={fullText}>{displayedText}</span>
              <span className="ml-1 inline-block w-[2px] h-[1.2em] align-[-0.1em] bg-emerald-400 caret-blink" />
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-xl md:text-2xl font-mono mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <Terminal className="h-5 w-5 text-emerald-400" />
                <span>Malware Developer</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <Shield className="h-5 w-5 text-emerald-400" />
                <span>Red Teamer</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2"
              >
                <Laptop className="h-5 w-5 text-emerald-400" />
                <span>Cybersecurity enthusiast</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            SSH'd into the espresso machine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my most significant work in cybersecurity and software development
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project 1 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/projects#cpp-for-malware-development"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-emerald-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  CPP-For-Malware-Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Techniques in malware development, reverse engineering, and evasion tactics using C++.
                </p>
                <div className="flex items-center text-sm text-emerald-400">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/projects#rottentomato-edr"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-emerald-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  rottenTomato-EDR-
                </h3>
                <p className="text-muted-foreground mb-4">
                  Building a simple Windows EDR from a kernel driver to advanced features.
                </p>
                <div className="flex items-center text-sm text-emerald-400">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/projects#snortify"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-emerald-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  Snortify
                </h3>
                <p className="text-muted-foreground mb-4">
                  Generate Snort IDS rules with a clean, user-friendly web interface.
                </p>
                <div className="flex items-center text-sm text-emerald-400">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>
          </motion.div>

            <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-12">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights and tutorials on cybersecurity, red teaming, and software development
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {latestPosts.map((post) => (
              <motion.div variants={item} className="group" key={post.id}>
                <MotionLink
                  href={post.slug}
                  target={post.isExternal ? "_blank" : "_self"}
                  className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-emerald-500/50 transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-sm text-muted-foreground mb-2">{post.date} &bull; {post.readTime}</p>
                  <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-emerald-400">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center text-sm text-emerald-400 mt-auto">
                    {post.isExternal ? 'Read on external site' : 'Read article'} 
                    {post.isExternal ? <ExternalLink className="ml-1 h-3 w-3" /> : <ArrowRight className="ml-1 h-3 w-3" />}
                  </div>
                </MotionLink>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">
                View all articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
