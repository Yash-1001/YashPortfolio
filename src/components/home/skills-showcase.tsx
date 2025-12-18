"use client";
import "./autoslider.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillsData } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard, MagneticButton } from "@/components/animations";
import { Skills } from "@/components/sections";

export function SkillsShowcase() {
  const AutoSlider = () => {
    return (
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>

          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>

          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </div>

          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>

          {/* duplicate slides for infinite loop */}
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    );
  };






  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies and cloud computing platforms
          </p>
        </motion.div>

        <AutoSlider />
        <div className="mt-4">
                  <AutoSlider />

        </div>

          <div className="mt-4">
                  <AutoSlider />

        </div>



        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 mt-4">
            Also proficient in Git, REST APIs, GraphQL, Agile methodologies, and more
          </p>
          <MagneticButton>
            <Link href="/skills">
              <Button variant="outline" size="lg" className="group">
                View All Skills
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
