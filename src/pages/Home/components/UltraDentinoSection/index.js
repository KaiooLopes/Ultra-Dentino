import {
  Background,
  UltraDentinoContent,
  Title,
  UltraDentinoUl,
} from "./styles";

const UltraDentinoSection = () => {
  return (
    <Background>
      <UltraDentinoContent>
        <Title>
          <h1>
            <i className="fa-solid fa-circle"></i>UltraDentino
            <i className="fa-solid fa-circle"></i>
          </h1>
        </Title>
        <UltraDentinoUl>
          <ul>
            <li>
              <i className="fa-solid fa-circle-check"></i>Formula Natural
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Facil de Usar
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Sem OGM's
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Sem Estimulantes
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Não Vicía
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Sem Glúten
            </li>
          </ul>
        </UltraDentinoUl>
      </UltraDentinoContent>
    </Background>
  );
};

export default UltraDentinoSection;
