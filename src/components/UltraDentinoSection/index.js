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
              <i className="fa-solid fa-circle-check"></i>Natural Formula
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Easy To Use
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Non-GMO
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>No Stimulants
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Non-Habit Forming
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Gluten Free
            </li>
          </ul>
        </UltraDentinoUl>
      </UltraDentinoContent>
    </Background>
  );
};

export default UltraDentinoSection;
