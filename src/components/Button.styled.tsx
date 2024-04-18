import styled from "styled-components"
import { MyAnimation } from "../styles/animations/Animations"
export const StyledBtn = styled.button`
border: none;
background-color: black;
padding: 10px 20px;
color: grey;
font-size: 2rem;
font-weight: bold;
&:hover {
background-color: green;
}
&:last-child {
background-color: pink;
}
`

export const SuperBtn = styled(StyledBtn)`
color: black;
border-radius: 5px;
background-color: yellow;
&:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
}
`