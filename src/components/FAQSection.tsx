import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "What kind of companies do you work with?", a: "We work with startups, SMEs, and enterprise-level clients across industries like fintech, healthcare, e-commerce, education, and recruitment." },
  { q: "How much does a typical project cost?", a: "Project costs vary based on scope and complexity. We offer competitive pricing and provide detailed estimates after understanding your requirements." },
  { q: "How long does it take to complete a project?", a: "Timelines depend on the project scope. Simple websites take 4-6 weeks, while complex applications can take 3-6 months." },
  { q: "Can you redesign my existing product or website?", a: "Absolutely! We specialize in redesigning and modernizing existing products to improve user experience and performance." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently <span className="text-secondary italic">Asked Questions</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Everything you need to know before starting your project with us.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl text-left transition-all ${
                  openIndex === i
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                <span className="font-semibold text-sm">Q{i + 1}: {f.q}</span>
                {openIndex === i ? (
                  <ChevronDown className="w-5 h-5 shrink-0" />
                ) : (
                  <ChevronUp className="w-5 h-5 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 border-2 border-secondary border-t-0 rounded-b-xl bg-white">
                      <p className="text-gray-600 text-sm">A: {f.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
