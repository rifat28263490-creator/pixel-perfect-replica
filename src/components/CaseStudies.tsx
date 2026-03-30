import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { AnimatedSection, SlideInLeft, SlideInRight } from "@/components/AnimatedSection";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground italic">
            Case Studies
          </h2>
          <p className="text-secondary-foreground/70 mt-3">
            Real Projects. Tangible Results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          <SlideInLeft>
            <div className="rounded-2xl overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Rnd Match" className="w-full h-full object-cover" />
            </div>
          </SlideInLeft>
          <SlideInRight delay={0.15}>
            <div>
              <h3 className="text-secondary-foreground font-bold text-xl mb-3">Rnd Match</h3>
              <p className="text-secondary-foreground/80 text-sm mb-6 leading-relaxed">
                RnD Match is an AI-powered recruitment
                platform built to connect job seekers with the
                right employers through smart workflows, CV
                parsing, and automated hiring tools. It bridges
                the gap between modern hiring needs and
                outdated job platforms.
              </p>
              <Button variant="outline" className="rounded-full border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-sm">
                View Case Study →
              </Button>
            </div>
          </SlideInRight>
        </div>

        {/* Nav arrows */}
        <div className="flex justify-end max-w-4xl mx-auto mt-6 gap-3">
          <button className="w-10 h-10 rounded-full border border-secondary-foreground/50 flex items-center justify-center hover:bg-secondary-foreground/10 transition-colors">
            <ArrowLeft className="w-4 h-4 text-secondary-foreground" />
          </button>
          <button className="w-10 h-10 rounded-full bg-secondary-foreground flex items-center justify-center hover:bg-secondary-foreground/90 transition-colors">
            <ArrowRight className="w-4 h-4 text-secondary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
