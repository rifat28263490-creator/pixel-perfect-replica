import { Monitor, Smartphone, ShoppingCart, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  { icon: Monitor, title: "WEB DESIGN &\nDEVELOPMENT" },
  { icon: Smartphone, title: "MOBILE APP DESIGN &\nDEVELOPMENT" },
  { icon: ShoppingCart, title: "E-COMMERCE\nDEVELOPMENT" },
];

const OurServices = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-secondary italic">Services</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Where Innovation Meets Excellence
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <div className="border border-primary/50 rounded-xl p-8 text-center hover:border-secondary/50 transition-all group cursor-pointer hover:-translate-y-1 duration-300 relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-secondary flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <s.icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-foreground font-semibold text-sm tracking-wide whitespace-pre-line">{s.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="flex justify-center mt-8 gap-2">
          <span className="w-3 h-3 rounded-full bg-muted" />
          <span className="w-3 h-3 rounded-full bg-secondary" />
          <span className="w-3 h-3 rounded-full bg-muted" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
