import { SlideInLeft, SlideInRight, AnimatedSection } from "@/components/AnimatedSection";

const reasons = [
  {
    title: "CUSTOMIZED PRODUCTS",
    desc: "We prioritize our customer's trust in us. Delivering quality products will ensure that to happen and build our brand trust.",
  },
  {
    title: "AFFORDABLE PRICING",
    desc: "We offer fair and competitive prices. There are no hidden charges and any additional charges are pre-approved by our customers.",
  },
  {
    title: "SUPPORT & MAINTENANCE",
    desc: "We will ensure that our client's products are up-to-date, active, and running at all times to ensure their business success.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why <span className="text-secondary italic">Choose Us</span>
          </h2>
          <p className="text-muted-foreground mt-3">Great Web solutions that you can trust</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <SlideInLeft>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[450px]">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop" alt="Team working" className="w-full h-full object-cover" />
            </div>
          </SlideInLeft>

          {/* Right - Features */}
          <SlideInRight delay={0.15}>
            <div className="space-y-4">
              {reasons.map((r, i) => (
                <div key={i} className="relative rounded-2xl p-5 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.3) 100%)",
                  }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />
                  <div className="pl-4">
                    <h3 className="text-secondary font-bold text-sm tracking-wide mb-2">{r.title}</h3>
                    <p className="text-foreground/70 text-xs leading-relaxed uppercase">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
