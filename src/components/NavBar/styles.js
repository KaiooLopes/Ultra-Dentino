import styled from "styled-components";

const desktop = 994;

export const NavBarContainer = styled.div`
  padding: 10px;
  background-color: #00005c;
  display: flex;
  //provisório
  margin-bottom: 20px;
  min-height: 50px;

  @media (min-width: ${desktop}px) {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoDiv = styled.div`
  margin-left: 2em;
  img {
    width: /* 25% */ 135px;
  }

  @media (min-width: ${desktop}px) {
    img {
      width: 135px;
    }
  }
`;

export const HamburguerMenu = styled.div`
  position: fixed;
  z-index: 2;
  top: 17px;
  right: 30px;
  background-color: #00005c;
  border-radius: 10px;
  cursor: pointer;
  div {
    background-color: white;
    height: 3px;
    width: 30px;
    margin: 8px;
    border-radius: 10px;
    transition: transform 0.2s;
  }

  ${(props) =>
    props.openMenu
      ? "div:nth-child(1) {transform: translateY(11px) rotate(-415deg);}div:nth-child(2) {opacity: 0;}div:nth-child(3) {transform: translateY(-11px) rotate(415deg);}"
      : ""}

  @media (min-width: ${desktop}px) {
    display: none;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    height: 0;
    width: 0;
  }
`;

export const NavList = styled.div`
  background-color: #00005c;
  width: 100%;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  overflow: hidden;

  ${(props) =>
    props.openMenu
      ? "max-height: 400px;transition: max-height 0.5s;"
      : "max-height: 0;transition: max-height 0.3s;"}

  ul {
    margin-left: 30px;
    list-style-type: none;

    li {
      margin: 20px 0;
      font-size: 19px;
      color: white;
    }

    li button {
      font-size: 19px;
      padding: 7px 12px 10px;
      background-color: #e54848;
      color: white;
      border: none;
      border-radius: 5px;
      box-shadow: 1px 1px 10px #001539;
    }
  }
  @media (min-width: ${desktop}px) {
    background-color: transparent;
    position: static;
    z-index: 0;
    width: 60%;
    max-height: none;
    transition: none;

    ul {
      margin-left: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;
