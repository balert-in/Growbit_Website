import ScrollSpyLayout from "../components/ScrollSpyLayout";
import { privacyContent } from "../constants/privacyContent";


const PrivacyPolicy = () => {
  return (
    <ScrollSpyLayout 
      data={privacyContent}
      title="Privacy"
      titleHighlight="Policy"
      subtitle="Learn how we collect, use, and protect your personal information."
      gradientFrom="from-[#9cd4af]"
      gradientTo="to-[#75ccc3]"
    />
  );
};

export default PrivacyPolicy;