import {
  UsersFeedbackContainer,
  Title,
  Polaroids,
  UsersComments,
  PostUser,
  UserImage,
  UserContent,
} from "./styles";
import user1 from "./images/user.png";
import user2 from "./images/user2.png";
import user3 from "./images/user3.png";
import user4 from "./images/user4.png";
import stars from "./images/stars.png";

const UsersFeedbackSection = () => {
  return (
    <UsersFeedbackContainer>
      <Title>
        <h1>
          Real ProDentim Users.
          <br /> Real Life-Changing Results.
        </h1>
      </Title>
      <Polaroids>
        <div>
          <img src={user1} alt="" />
          <img src={user2} alt="" />
        </div>
        <div>
          <img src={user3} alt="" />
          <img src={user4} alt="" />
        </div>
      </Polaroids>
      <UsersComments>
        <PostUser>
          <UserImage>
            <img src={user1} alt="" />
          </UserImage>
          <UserContent>
            <h1>
              Maria Eduarda está impressionada com os dentes mais brancos que
              nunca...
            </h1>
            <div>
              <img src={stars} alt="" />
              <p>Compra Verificada</p>
            </div>
            <div>
              <p>
                “Eu sempre cuidei muito dos meus dentes, mas nunca achei que
                fosse suficiente. Agora, pela primeira vez em muito tempo, estou
                adorando meus dentes”
              </p>
              <p>
                <b>Maria Eduarda</b> - Florianópolis, Santa Catarina
              </p>
            </div>
          </UserContent>
        </PostUser>
        <PostUser>
          <UserImage>
            <img src={user2} alt="" />
          </UserImage>
          <UserContent>
            <h1>Ana Julia ama ter um hálito refrescante o dia todo...</h1>
            <div>
              <img src={stars} alt="" />
              <p>Compra Verificada</p>
            </div>
            <div>
              <p>
                “É inacreditavel o quanto eu gostei do UltraDentino, Fico muito
                feliz que meu dentista tenha me recomendado!”
              </p>
              <p>
                <b>Ana Julia</b> - Natal, Rio Grande do Norte
              </p>
            </div>
          </UserContent>
        </PostUser>
        <PostUser>
          <UserImage>
            <img src={user3} alt="" />
          </UserImage>
          <UserContent>
            <h1>
              Manuela Pereira não gasta mais rios de dinheiro em dentistas...
            </h1>
            <div>
              <img src={stars} alt="" />
              <p>Compra Verificada</p>
            </div>
            <div>
              <p>
                “Minhas gengivas estão espetaculares. É muito bom não ter que me
                preocupar com meus dentes. Eu amo isso!”
              </p>
              <p>
                <b>Manuela Pereira</b> - Londrina, Paraná
              </p>
            </div>
          </UserContent>
        </PostUser>
      </UsersComments>
    </UsersFeedbackContainer>
  );
};

export default UsersFeedbackSection;
