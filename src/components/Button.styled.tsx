import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  primary?: boolean;
  outlined?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${(props) => props.color || "#4E71FE"};
  width: 86px;
  height: 30px;
  top: 58px;
  left: 20px;
  gap: 0px;
  border-radius: 5px;
  opacity: 0px;
  color: white;

  font-size: ${(props) => props.fontSize || "2rem"};

  

  ${(props) =>
    props.outlined &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || "#4E71FE"};
      color: ${(props) => props.color || "#4E71FE"};
      background-color: transparent;
      &:hover {
    background: white;
    
  }
    `}
  ${(props) =>
    props.primary &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "#4E71FE"};
      color: snow;
      &:hover {
    background-color: white;
    border: 2px solid #4e71fe;
    color: #4e71fe;
    
  }
    `}
`;
