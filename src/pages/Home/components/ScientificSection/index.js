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
              Bactéria na sua boca pode afetar o seu cérebro. Healthline, 5 de
              Maio de 2019.
              https://www.healthline.com/health-news/bacteria-in-your-mouth-can-find-its-way-to-your-brain
            </p>
          </li>
          <li>
            <p>
              O microbioma oral e seu impacto em todos outros sistemas no corpo.
              Ask The Dentist. 9 de Abril de 2020 -
              https://askthedentist.com/oral-microbiome
            </p>
          </li>
          <li>
            <p>
              Como evitar toxinas na sua pasta de dente: 12 ingredientes para se
              livrar imediatamente. Experience Life. 14 de Janeiro de 2022
              https://experiencelife.lifetime.life/article/safe-toothpaste
            </p>
          </li>
          <li>
            <p>
              Probióticos no controle de gengivite e periodontite. Frontiers in
              Dental Medicine. 3 de Setembro de 2021. -
              https://doi.org/10.3389/fdmed.2021.708666
            </p>
          </li>
          <li>
            <p>
              Probiótico lactobacillus paracasei mostra benefícios para a saúde
              bucal. nutraingredients.com. 2 de Setembro de 2014. -
              https://www.nutraingredients.com/Article/2014/09/02/Probiotic-Lactobacillus-paracasei-shows-oral-health-benefits-Study
            </p>
          </li>
          <li>
            <p>
              lactobacillus reuteri vivos ou mortos podem oferecer benefícios
              para a saúde bucal. nutraingredients-latam.com. 12 de Dezembro de
              2019 -
              https://www.nutraingredients-latam.com/Article/2019/12/12/Live-or-dead-reuteri-bacteria-may-offer-oral-health-benefits-Study
            </p>
          </li>
        </ScientificList>
        <ScientificList>
          <li value={7}>
            <p>
              Efeitos do probiótico Bifidobacterium no tratamento de
              periodontite crônica: Um estudo clínico randomizado. Journal of
              Clinical Periodontolgy. 4 de Agosto de 2018 -
              https://doi.org/10.1111/jcpe.12995
            </p>
          </li>
          <li value={8}>
            <p>
              8. O papel do lactobacillus reuteri em doenças e na saúde humana.
              Frontiers in Microbiology. 19 de Abril de 2018. -
              https://doi.org/10.3389/fmicb.2018.00757
            </p>
          </li>
          <li value={9}>
            <p>9. Qual o propósito do Fosfato Bicálcico. 16 de Junho de 2011</p>
          </li>
          <li value={10}>
            <p>
              10. Benefícios Surpreendentes do lactobacillus paracasei.
              SelfDecode Supprements. 9 de Setembro de 2021 -
              https://supplements.selfdecode.com/blog/l-paracasei/
            </p>
          </li>
          <li value={11}>
            <p>
              11. Como probióticos previnem a cárie. O caso dos lactobacillus
              paracasei. Medium. 30 de Setembro de 2020. -
              https://medium.com/@tscepanovic/how-probiotics-prevent-tooth-decay-the-case-of-lactobacillus-paracasei-c923fcef6f4d
            </p>
          </li>
          <li value={12}>
            <p>
              Descobertas sobre o microbioma oral desafiam o dogma da
              odontologia. 27 de Outubro de 2021. -
              https://doi.org/10.1038/d41586-021-02920-w
            </p>
          </li>
        </ScientificList>
      </ScientificListBox>
    </ScientificContainer>
  );
}

export default ScientificSection;
