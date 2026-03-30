import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SlideInLeft, SlideInRight } from "@/components/AnimatedSection";

const WhatWeDo = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images with nav arrows */}
          <SlideInLeft>
            <div className="relative">
              <div className="flex gap-3 mb-4">
                <button className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <ArrowLeft className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/90 transition-colors">
                  <ArrowRight className="w-4 h-4 text-secondary-foreground" />
                </button>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-44 h-52 md:w-52 md:h-60 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=500&fit=crop" alt="Customize your site" className="w-full h-full object-cover" />
                  <div className="relative -mt-16 p-3">
                    <p className="text-foreground text-xs font-semibold uppercase">Customize Your Site</p>
                  </div>
                </div>
                <div className="w-44 h-52 md:w-52 md:h-60 rounded-2xl overflow-hidden mt-6">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=500&fit=crop" alt="Add advanced features" className="w-full h-full object-cover" />
                  <div className="relative -mt-16 p-3">
                    <p className="text-foreground text-xs font-semibold uppercase">Add Advanced Features</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Right - Content */}
          <SlideInRight delay={0.15}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                What <span className="text-secondary italic">We Do</span>
              </h2>
              <p className="text-lg text-foreground font-semibold mb-1">Standard Software,</p>
              <p className="text-lg text-foreground font-semibold mb-4">Custom-Fit For You</p>
              <p className="text-muted-foreground text-sm mb-8">
                We build scalable digital solutions tailored
                to your business, users, and growth goals.
              </p>

              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 text-sm font-medium">
                Get a Free Consultation →
              </Button>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
