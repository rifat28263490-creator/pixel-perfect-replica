import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
    title: "Why MVP Is the Smartest Way to Launch Your Product",
    desc: "Building everything at once is risky and expensive. Learn how a Minimum Viable Product (MVP) helps you validate your idea, get user feedback faster, and save on development costs.",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    title: "Why MVP Is the Smartest Way to Launch Your Product",
    desc: "Building everything at once is risky and expensive. Learn how a Minimum Viable Product (MVP) helps you validate your idea, get user feedback faster, and save on development costs.",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    title: "Why MVP Is the Smartest Way to Launch Your Product",
    desc: "Building everything at once is risky and expensive. Learn how a Minimum Viable Product (MVP) helps you validate your idea, get user feedback faster, and save on development costs.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Blog <span className="text-secondary italic">Title</span>
          </h2>
          <p className="text-primary-foreground/70 mt-3">
            Expert articles on app dev, UI/UX, AI, and tech strategy.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <StaggerItem key={i}>
              <div className="bg-primary/60 border border-primary/40 rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-secondary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-primary-foreground font-bold text-sm mb-2">{b.title}</h3>
                  <p className="text-primary-foreground/60 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Nav arrows */}
        <div className="flex justify-end mt-6 gap-3">
          <button className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
            <ArrowLeft className="w-4 h-4 text-primary-foreground" />
          </button>
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/90 transition-colors">
            <ArrowRight className="w-4 h-4 text-secondary-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
