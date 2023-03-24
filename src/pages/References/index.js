import {
  ReferencesContainer,
  Title,
  ReferencesContent,
  LabelImage,
} from "./styles";
import LabelImg from "./images/blueberry.png";

const References = () => {
  return (
    <ReferencesContainer>
      <Title>Refêrencia Cientifica</Title>
      <ReferencesContent>
        <p>1. Oral microbiome findings challenge dentistry dogma</p>
        <p>
          2. The Oral Microbiome & Its Impact on Every Other System in the Body
        </p>
        <p>
          3. How to Avoid Toxins in Your Toothpaste: 12 Ingredients to Ditch Now
        </p>
        <p>
          4. Probiotic Lactobacillus paracasei shows oral health benefits: Study
        </p>
        <p>
          5. How Probiotics Prevent Tooth Decay: the Case of Lactobacillus
          Paracasei
        </p>
        <p>6. Surprising Benefits of Lactobacillus Paracasei</p>
        <p>7. Probiotic L. Paracasei Shows Oral Health Benefits</p>
        <p>
          8. Live or Dead, Reuteri Bacteria May Offer Oral Health Benefits,
          Study
        </p>
        <p>9. Role of L. reuteri in Human Health and Diseases</p>
        <p>
          10. Probiotics in the Management of Gingivitis and Periodontitis. A
          Review
        </p>
        <p>
          11. Effects of Bifidobacterium probiotic on the treatment of chronic
          periodontitis: A randomized clinical trial
        </p>
        <p>12. Recent Studies Show Benefits of K12 Probiotic</p>
        <p>13. Applications of inulin and probiotics in health and nutrition</p>
        <p>
          14. The Inhibitory and Antibacterial Effects of Peppermint Essential
          Oil on Periodontal Photogenes
        </p>
        <p>15. What is the Purpose of Dicalcium Phosphate?</p>
        <p>16. Two Studies Find Oral Probiotics Effective in Blocking Plaque</p>
        <p>17. Bacteria in Your Mouth Can Find Its Way to Your Brain</p>
      </ReferencesContent>
      <Title>Etiqueta UltraDentino</Title>
      <LabelImage>
        <img src={LabelImg} alt="Etiqueta" />
      </LabelImage>
    </ReferencesContainer>
  );
};

export default References;
