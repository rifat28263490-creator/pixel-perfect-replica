import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/AnimatedSection";
import looperBg from "@/assets/LooperBG-working-process-right.svg";

const GetInTouch = () => {
  return (
    <>
      {/* Get In Touch */}
      <section id="contact" className="relative py-20 bg-secondary overflow-hidden">
        <img src={looperBg} alt="" className="absolute right-0 top-0 h-full opacity-20 pointer-events-none" />
        <img src={looperBg} alt="" className="absolute left-0 bottom-0 h-full opacity-15 pointer-events-none rotate-180" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground italic mb-8">Get In Touch</h2>
            <Button variant="outline" className="rounded-full border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary px-8 text-sm">
              Get a Free Consultation →
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-10 mb-10">
            {/* Logo & Description */}
            <div>
              <div className="mb-4">
                <img src="/logo.svg" alt="Finixcode" className="h-8" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Finixcode primarily develops and distributes software products in its capacity as a software company. The goals of Finixcode vary depending on its client base and specialization.
              </p>
              <div className="flex gap-2">
                {["P", "📷", "𝕏", "f"].map((icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-white text-xs">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gray-900 font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {["Home", "Our Services", "About Us", "Products", "Case Studies", "Blog", "FAQs", "Terms And Conditions"].map((l) => (
                  <a key={l} href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">{l}</a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-gray-900 font-bold mb-4">Newsletter</h4>
              <p className="text-gray-500 text-sm mb-4">Sing Up To Get More Every Updates</p>
              <Input placeholder="Enter your Email" className="bg-white border-gray-300 rounded-md text-sm mb-3" />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 text-sm">
                Submit →
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-400 text-sm">© Copyright 2025 Finixcode. All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GetInTouch;
