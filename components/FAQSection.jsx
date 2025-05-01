import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are there any added sugars or preservatives in your dry fruits?",
    answer:
      "No, our dry fruits are 100% natural and do not contain any added sugars, artificial flavors, or preservatives. We believe in providing you with the purest and healthiest snacking options, just as nature intended.",
  },
  {
    question: "How should I store dry fruits to keep them fresh?",
    answer:
      "Store dry fruits in an airtight container in a cool, dry place. For extended freshness, refrigeration is recommended. Avoid exposure to direct sunlight and moisture.",
  },
  {
    question: "Do your spices contain artificial colors or additives?",
    answer:
      "Absolutely not. Our spices are 100% pure and natural, free from artificial colors, flavors, or additives. We ensure every batch meets the highest quality standards.",
  },
  {
    question: "Are your products suitable for vegans?",
    answer:
      "Yes, all our dry fruits and spices are plant-based and suitable for vegans. We do not use any animal-derived ingredients in our processing.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-10">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-lg transition-all data-[state=open]:bg-orange-600 data-[state=open]:text-white"
          >
            <AccordionTrigger className="text-base font-semibold px-4 py-3 text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
