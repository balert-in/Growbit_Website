import { termsContent } from "../utils/termsContent";
import ScrollSpyLayout from "../components/ScrollSpyLayout";

const TermsAndConditions = () => {
  return (
    <ScrollSpyLayout 
      data={termsContent}
      title="Terms &"
      titleHighlight="Conditions"
      subtitle="Please read these terms carefully before using our services."
      gradientFrom="from-[#75ccc3]"
      gradientTo="to-[#d7e48a]"
    />
  );
};

export default TermsAndConditions;