import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What if I miss a dose of Paracetamol?",
      answer:
        "If you miss a dose, take it as soon as you remember. If it's almost time for your next dose, skip the missed dose. Do not take two doses at once.",
    },
    {
      question: "Is Paracetamol safe for children?",
      answer:
        "Paracetamol can be given to children, but it's essential to follow the correct dosage based on their age and weight. Consult a doctor for children under 2 years old.",
    },
    {
      question: "Can I use Paracetamol if I'm pregnant?",
      answer:
        "Paracetamol is generally considered safe during pregnancy, but it's always best to consult your healthcare provider before use.",
    },

    {
      question: "What are the side effects of Paracetamol?",
      answer:
        "Common side effects of Paracetamol include nausea, rash, or stomach pain. Severe reactions are rare but seek medical attention if you experience any unusual symptoms.",
    },
  ];

  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQs;
