import React from "react";
import {
  ReferenceSectionContainer,
  DoctorImage,
  ReferenceContent,
  ReferalLink,
} from "./styles";
import DoctorImg from "./images/doctor.png";

const ReferenceSection = () => {
  return (
    <ReferenceSectionContainer id="ReferenceSection">
      <DoctorImage>
        <img src={DoctorImg} alt="Doctor Image" />
      </DoctorImage>
      <ReferenceContent>
        <h3>Maio de 2022 - Nova descoberta científica</h3>
        <p>
          Um estudo recente recente que foi divulgado pela revista Springer
          Nature mostra que pessoas com boa saúde bucal tem um alto número de
          bactérias boas na sua boca.
        </p>
        <span>(Sem pasta de dentes ou lavagem bucal envolvidos)</span>
        <p>
          Muitos produtos comuns para saúde bucal (como pasta de dentes e
          enxaguantes bucais) contém ingredientes tóxicos que podem destruir o
          microbioma da boca. Isso explica o porquê os dentes podem seguir
          intactos por centenas de anos fora da boca (em fósseis), enquanto em
          nossa boca eles acabam arruinados por coisas simples como chocolate.
        </p>
        <ReferalLink>
          <a
            href="https://www.nature.com/articles/d41586-021-02920-w"
            target="_blank"
          >
            Link de Referência
          </a>
        </ReferalLink>
      </ReferenceContent>
    </ReferenceSectionContainer>
  );
};

export default ReferenceSection;
