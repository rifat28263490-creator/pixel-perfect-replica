import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "halabook",
    text: "They're knowledgeable and have developed a clear understanding of our goals",
    detail: "They are proficient and knowledgeable, which helped them meet expectations throughout the project.",
  },
  {
    name: "Vinit Smith",
    role: "COO",
    company: "halabook",
    text: "The Finixcode platform is a great choice for businesses with limited funds",
    detail: "Finixcode's work quality and the skilled team impressed the client. They delivered within timelines and budget to ensure a solid project management experience.",
    featured: true,
  },
  {
    name: "James R. Lawrence",
    role: "CEO",
    company: "halabook",
    text: "They're knowledgeable and have developed a clear understanding of our goals",
    detail: "They are proficient and knowledgeable, which helped them meet expectations throughout the project.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonails</h2>
          <p className="text-gray-500 mt-3">
            3,000+ Positive reviews by our satisfied clients
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className={`rounded-xl p-6 border-2 hover:-translate-y-1 transition-transform duration-300 ${
                t.featured ? "border-primary bg-white" : "border-secondary/30 bg-white"
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-600 font-semibold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div className="text-center flex-1 mx-3">
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                  <span className="text-xs text-primary font-medium italic">{t.company}</span>
                </div>
                <p className="font-bold text-sm text-gray-900 mb-2">{t.text}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{t.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
