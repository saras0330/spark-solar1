import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much can I save with solar?",
    answer:
      "Most customers save between 70% and 95% on their monthly electricity bill depending on their energy consumption and system size.",
  },
  {
    question: "How many days does installation take?",
    answer:
      "A standard residential installation usually takes 2–5 working days after site approval.",
  },
  {
    question: "Do you help with government subsidy?",
    answer:
      "Yes. We handle the complete subsidy application and documentation process.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Premium Tier-1 panels typically last more than 25 years with very little maintenance.",
  },
  {
    question: "Do solar panels work during monsoon?",
    answer:
      "Yes. Production reduces during cloudy weather but the panels continue generating electricity.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 bg-[var(--background)]"
    >
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto">

          <span className="eyebrow">FAQ</span>

          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>

          <p className="section-sub">
            Everything you need to know before installing solar.
          </p>

        </div>

        <div className="max-w-3xl mx-auto mt-14 space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="card overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >

                <span className="text-base font-semibold text-[var(--text)]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`shrink-0 text-[var(--text-muted)] transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-sm leading-7 text-[var(--text-light)]">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
