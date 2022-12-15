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
            <h1>Sam Perkin is enjoying better oral health…</h1>
            <div>
              <img src={stars} alt="" />
              <p>Verified Purchase</p>
            </div>
            <div>
              <p>
                “I’ve always taken such good care of my teeth but it always felt
                like I wasn’t doing enough. Now, for the first time in decades,
                my teeth feel amazing.”
              </p>
              <p>
                <b>Sam Perkin</b> - Dallas, USA
              </p>
            </div>
          </UserContent>
        </PostUser>
        <PostUser>
          <UserImage>
            <img src={user2} alt="" />
          </UserImage>
          <UserContent>
            <h1>Portia Thompson loves her fresh breath…</h1>
            <div>
              <img src={stars} alt="" />
              <p>Verified Purchase</p>
            </div>
            <div>
              <p>
                “It’s just unbelievable how much I like ProDentim. I’m so glad
                my dentist recommended it to me!”
              </p>
              <p>
                <b>Portia Thompson</b> - Florida, USA
              </p>
            </div>
          </UserContent>
        </PostUser>
        <PostUser>
          <UserImage>
            <img src={user3} alt="" />
          </UserImage>
          <UserContent>
            <h1>Theo Franklin doesn’t spend fortunes on dentists...</h1>
            <div>
              <img src={stars} alt="" />
              <p>Verified Purchase</p>
            </div>
            <div>
              <p>
                “My gums have never looked better. It feels so good to not have
                to worry about my teeth. I simply love it!”
              </p>
              <p>
                <b>Theo Franklin</b> - Chicago, USA
              </p>
            </div>
          </UserContent>
        </PostUser>
      </UsersComments>
    </UsersFeedbackContainer>
  );
};

export default UsersFeedbackSection;
