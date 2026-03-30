import { Monitor, Settings, Sparkles, Search, Headphones, Move } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import coreFeatureEllipse from "@/assets/coreFeature-bottom-left-Ellipse.svg";

const features = [
  { icon: Monitor, title: "Responsive Design" },
  { icon: Settings, title: "Powerful Customization" },
  { icon: Sparkles, title: "Cool & modern animations" },
  { icon: Search, title: "SEO-Optimized Code" },
  { icon: Headphones, title: "Reliable Technical Support" },
  { icon: Move, title: "Flexible Layout Options" },
];

const CoreFeatures = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <img src={coreFeatureEllipse} alt="" className="absolute bottom-0 left-0 w-[400px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 items-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Core
              <br />
              <span className="text-secondary italic">Features</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Experience the advanced features
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <div className="bg-primary/40 backdrop-blur border border-primary/50 rounded-xl p-6 text-center hover:border-secondary/40 transition-all group hover:-translate-y-1 duration-300">
                  <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                    <f.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-foreground font-medium text-sm">{f.title}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
