import React from "react";
import FAQSection from "../common/FAQSection";

const faqData = [
  {
    question: "What are Bar Coaters used for?",
    answer: "Bar Coaters (also widely known as Mayer rods, wire wound rods, K bars, and drawdown bars) are precision instruments used for applying a highly controlled and uniform layer of coating, ink, adhesive, paint, or varnish on different test surfaces during laboratory testing and strict quality control.",
  },
  {
    question: "How do Bar Coaters control coating thickness?",
    answer: "The coating thickness (wet film thickness) is controlled by the diameter of the wire wound tightly around the core rod. A specific wire gauge leaves a precise gap for the fluid to pass through. Different 'bar numbers' correspond to different wire thicknesses.",
  },
  {
    question: "What materials can be tested using Bar Coaters?",
    answer: "They can be used on various substrates, including paper, flexible packaging films, metal foils, plastic sheets, glass, and other materials where uniform coating evaluation, ink proofing, or paint drawdown testing is required.",
  },
  {
    question: "Are Bar Coaters suitable for laboratory environments?",
    answer: "Yes, our Bar Coaters are specifically designed and engineered for high-precision laboratory coating tests, drawdown sample preparation, and evaluating different fluid coating formulations in R&D and QA environments.",
  },
  {
    question: "What bar sizes are available?",
    answer: "We offer multiple sizes including Small (No. 0 - 180mm working length), Medium (No. 1 - 220mm working length), Big (No. 2 - 280mm working length), and Extra Big (No. 3 - 350mm working length) to suit different test panels and coating requirements.",
  },
  {
    question: "How do I choose the right Bar Coater?",
    answer: "Selecting the correct Bar Coater depends on the required wet film coating thickness, the viscosity of your fluid (ink, paint, adhesive), and the dimensions of your test substrate. Our technical experts can assist you in finding the perfect wire wound rod match for your specific application.",
  },
  {
    question: "How do I clean my Bar Coater after use?",
    answer: "Cleaning your bar coater is simple. Just wash the stainless steel wire wound rod with a suitable solvent immediately after use. A soft brush can be used to remove any dried ink or paint from the grooves. Regular cleaning ensures long-lasting accuracy.",
  },
  {
    question: "Are your Bar Coaters made of stainless steel?",
    answer: "Yes, all our bar coaters, drawdown bars, and Mayer rods are manufactured using high-quality stainless steel. This makes them highly durable, rust-resistant, and easy to clean.",
  },
  {
    question: "Can I use a Bar Coater for paper testing?",
    answer: "Absolutely. Bar coaters are widely used in the paper industry to apply uniform coatings for testing paper smoothness, gloss, and absorption rates.",
  },
  {
    question: "Do you deliver Bar Coaters across India?",
    answer: "Yes, ImageTech Industries delivers high-quality bar coaters to laboratories and industries across Delhi, Mumbai, Chennai, Kolkata, and all other major cities in India.",
  },
  {
    question: "What is the difference between a K Bar and a Mayer Rod?",
    answer: "There is no functional difference. 'K Bar', 'Mayer Rod', 'Drawdown Bar', and 'Wire Wound Rod' are just different industry names for the exact same coating instrument used in laboratory testing.",
  },
  {
    question: "How often should I replace my Bar Coater?",
    answer: "With proper care and cleaning, a stainless steel bar coater can last for years. However, if the wire winding gets deeply scratched or worn flat, it will affect the coating thickness, and the rod should be replaced.",
  },
  {
    question: "Do you provide custom-sized Bar Coaters?",
    answer: "Yes, as a leading manufacturer in India, we can customize the working length and wire thickness of the bar coater to perfectly match your specific testing laboratory requirements.",
  },
  {
    question: "Can I use a Bar Coater for high-viscosity liquids?",
    answer: "Yes, bar coaters are excellent for both low and high-viscosity liquids like thick adhesives, paints, and resins. You just need to select the correct wire gauge (bar number) to match your fluid.",
  },
  {
    question: "What industries use your Bar Coaters?",
    answer: "Our precision bar coaters are trusted by professionals in the printing, packaging, paper manufacturing, paint and coatings, adhesives, and flexible film industries for strict quality control.",
  },
  {
    question: "Is it easy to use a manual drawdown Bar Coater?",
    answer: "Yes, it is very simple. Place your test substrate on a flat surface, pour a small amount of liquid in front of the bar coater, and pull the bar evenly towards you to create a smooth, uniform drawdown.",
  }
];

import { SchemaInjector } from "../common/SEO";

const HomeFAQ = ({ locationData }) => {
  const locName = locationData?.name;

  const dynamicFaqData = faqData.map((faq) => {
    if (!locName) return faq;
    if (faq.question === "Do you deliver Bar Coaters across India?") {
      return {
        ...faq,
        answer: faq.answer.replace(
          "all other major cities in India.",
          `all other major cities in India, including ${locName}.`
        ),
      };
    }
    return faq;
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dynamicFaqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SchemaInjector schema={faqSchema} />
      <FAQSection
        title={`Everything You Need To Know About Bar Coaters ${locName ? `in ${locName}` : ""}`}
        subtitle="Frequently Asked Questions"
        description="Find answers to common questions about our Bar Coaters, testing applications, and technical specifications."
        faqs={dynamicFaqData}
      />
    </>
  );
};

export default HomeFAQ;
