import React from "react";
import {
  ReferenceSectionContainer,
  DoctorImage,
  ReferenceContent,
  ReferalLink,
} from "./styles";
import DoctorImg from "./images/doctor.png";
import { Link } from "react-router-dom";

const ReferenceSection = () => {
  return (
    <ReferenceSectionContainer id="ReferenceSection">
      <DoctorImage>
        <img src={DoctorImg} alt="Doctor" />
      </DoctorImage>
      <ReferenceContent>
        <h3>Maio de 2022 - Nova descoberta científica</h3>
        <p>
          Um novo estudo revelou o segredo para a saúde bucal perfeita (se você
          pensou que era escovar os dentes e usar enxaguante você está errado)
          foi descoberto que quem tem dentes claros e não ficam com mau hálito
          possuem uma grande densidade de bactérias saudáveis na boca.
        </p>
        <span>(Sem pasta de dentes ou lavagem bucal envolvidos)</span>
        <p>
          Foi descoberto que cremes dentais comuns dizimam essas bactérias com
          substâncias altamente tóxicas e isso explica por que quando os dentes
          ficam fora da boca como em fósseis eles ficam intactos por milhares de
          anos e na boca algo tão banal como sorvete pode DESTRUIR eles.
        </p>
        <ReferalLink>
          <Link
            to="/"
            href="https://www.nature.com/articles/d41586-021-02920-w"
            target="_blank"
          >
            Link de Referência
          </Link>
        </ReferalLink>
      </ReferenceContent>
    </ReferenceSectionContainer>
  );
};

export default ReferenceSection;
