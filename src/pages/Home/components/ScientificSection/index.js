import {
  ScientificContainer,
  ScientificList,
  ScientificListBox,
  ScientificTitle,
} from "./styles";

function ScientificSection() {
  return (
    <ScientificContainer>
      <ScientificTitle>Referencias cientificas:</ScientificTitle>
      <ScientificListBox>
        <ScientificList>
          <li>
            <p>
              Schlagenhauf U, Jockel-Schneider Y. Probiotics in the management
              of gingivitis and periodontitis. A review. Frontiers in Dental
              Medicine.2021: 2 - https://doi.org/10.3389/fdmed.2021.708666
            </p>
          </li>
          <li>
            <p>
              Invernici MM, Salvador SL, Silva PH, et al. Effects of
              Bifidobacterium probiotic on the treatment of chronic
              periodontitis: A randomized clinical trial. Journal of Clinical
              Periodontology. 2012;45(10):1198-1210 -
              https://doi.org/10.1111/jcpe.12995
            </p>
          </li>
          <li>
            <p>
              Daniells S. Probiotic lactobacillus paracasei shows oral health
              benefits: Study. nutraingredients.com. 2014, September 2 -
              https://www.nutraingredients.com/Article/2014/09/02/Probiotic-Lactobacillus-paracasei-shows-oral-health-benefits-Study
            </p>
          </li>
          <li>
            <p>
              Booth S. Bacteria in your mouth can affect your brain. Healthline.
              2019, May 5 -
              https://www.healthline.com/health-news/bacteria-in-your-mouth-can-find-its-way-to-your-brain
            </p>
          </li>
          <li>
            <p>
              Burhenne M. The oral microbiome & its impact on every other system
              in the body. Ask the Dentist. 2020, April 9 -
              https://askthedentist.com/oral-microbiome
            </p>
          </li>
          <li>
            <p>
              Burhenne M. How to avoid toxins in your toothpaste: 12 ingredients
              to ditch now. Experience Life. 2022, January 14 -
              https://experiencelife.lifetime.life/article/safe-toothpaste
            </p>
          </li>
          <li>
            <p>
              Daniells S. Live or dead reuteri bacteria may offer oral health
              benefits: Study. nutraingredients-latam.com. 2019, December 12 -
              https://www.nutraingredients-latam.com/Article/2019/12/12/Live-or-dead-reuteri-bacteria-may-offer-oral-health-benefits-Study
            </p>
          </li>
        </ScientificList>
        <ScientificList>
          <li value={8}>
            <p>
              Mu Q.Tavella VJ, Luo XM. Role of lactobacillus reuteri in human
              health and diseases. Frontiers in Microbiology. 2018;9 -
              https://doi.org/10.3389/fmicb.2018.00757
            </p>
          </li>
          <li value={9}>
            <p>
              Invernici MM, Salvador SL, Silva PH, et al. Effects of
              Bifidobacterium probiotic on the treatment of chronic
              periodontitis: A randomized clinical trial. Journal of Clinical
              Periodontology. 2012;45(10):1198-1210 -
              https://doi.org/10.1111/jcpe.12995
            </p>
          </li>
          <li value={10}>
            <p>
              Novkovic B. 6+ surprising benefits of lactobacillus paracasei.
              SelfDecode Supplements. 2021, September 9 -
              https://supplements.selfdecode.com/blog/l-paracasei/
            </p>
          </li>
          <li value={11}>
            <p>
              Rezaie E, Bayani M, Arjomandzadegan M. The inhibitory and
              antibacterial effects of peppermint essential oil on periodontal
              photogenes. Journal of Arak University of Medical Sciences.
              2020:172-183 - https://doi.org/10.32598/jams.23.2.5710.3
            </p>
          </li>
          <li value={12}>
            <p>
              Miremadi F, Shah NP. Applications of inulin and probiotics in
              health and nutrition. International Food Research Journal.
              2012;19(4):1337-1350 - http://www.ifrj.upm.edu.my
            </p>
          </li>
          <li value={13}>
            <p>
              Campbell K. Oral microbiome findings challenge dentistry dogma.
              Nature. 2021. - https://doi.org/10.1038/d41586-021-02920-w
            </p>
          </li>
          <li value={14}>
            <p>
              Scepano T. How probiotics prevent tooth decay: The case of
              lactobacillus paracasei. Medium. 2020, September 30 -
              https://medium.com/@tscepanovic/how-probiotics-prevent-tooth-decay-the-case-of-lactobacillus-paracasei-c923fcef6f4d
            </p>
          </li>
          <li value={15}>
            <p>
              Myers B. 3 health purposes of Dicalcium phosphate | livestrong.
              LIVESTRONG.COM. 2011, June 16 -
              https://www.livestrong.com/article/472086-what-is-the-purpose-of-dicalcium-phosphate/
            </p>
          </li>
        </ScientificList>
      </ScientificListBox>
    </ScientificContainer>
  );
}

export default ScientificSection;
