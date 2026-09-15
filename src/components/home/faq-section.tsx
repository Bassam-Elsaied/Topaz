import { FaqBlock } from "@/components/pages/faq-block";
import { FAQS } from "@/data/faqs";

/** The home page's preset of the shared question list. */
export function FaqSection() {
  return (
    <FaqBlock
      title="Frequently asked"
      accent="questions"
      intro="Still deciding? These are the questions we field most often before an event goes into planning."
      faqs={FAQS}
    />
  );
}
