//components
import NavBar from "./components/NavBar";
import PriceBox from "./components/PriceBox";
import ProductApresentationSection from "./components/ProductApresentationSection";
import ProductCompositionSection from "./components/ProductCompositionSection";
import ReferenceSection from "./components/ReferenceSection";
import SatisfactionSection from "./components/SatifactionSection";
import ScientificSection from "./components/ScientificSection";
import UltraDentinoSection from "./components/UltraDentinoSection";
import UsersFeedbackSection from "./components/UsersFeedbackSection";
import WhyCreatedSection from "./components/WhyCreatedSection";
import BonusSection from "./components/BonusSection";
import FAQ from "./components/FAQ";
import MadeBrazil from "./components/MadeBrazil";
import MultiPagesNav from "../../components/MultiPagesNav";
import FooterTexts from "./components/FooterTexts";

const Home = () => {
  return (
    <>
      <NavBar />
      <ProductApresentationSection />
      <ReferenceSection />
      <WhyCreatedSection />
      <ProductCompositionSection />
      <UltraDentinoSection />
      <BonusSection />
      <UsersFeedbackSection />
      <PriceBox />
      <SatisfactionSection />
      <MadeBrazil />
      <FAQ />
      <PriceBox />
      <ScientificSection />
      <MultiPagesNav />
      <FooterTexts />
    </>
  );
};

export default Home;
