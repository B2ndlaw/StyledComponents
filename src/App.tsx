import React from "react";

import "./App.css";
import styled from "styled-components";
import { StyledBtn } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Menu } from "./components/Menu.styled";
import { Frame } from "./components/Frame.styled";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
        </ul>
      </Menu>
      <Box>
        <Frame>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ns4wtkl5rHovpMuwzkpx7mp7qIiCARDzKJyCIIBO-cq7t6z5dRDCSks0e0Qiwb1A0TSNIq3TUXNuJNhNf~wD6Pxx11B7ZpGl0izppKXOBDm8FGvbE6DcGDO44XOK2DTtVUavc1gCcbzwSOcFKLQupr1IM3mnHIpvljk3IT5pfK6Od0pAkyGHvJQfTuD23JcOich-ntYWHlSCYSbFUQwM0Cb6IKovXLBhdv2Nt-6cOF0-ZQy~00xV83voB8l0429fJOmjIyNB4IGG-XbTvoPc~-QVpIbp~Cv0lMChsJCPzKaypBAY-rJ2-pFwUUBfK80Z5VwNjQRtJsifFAf1qEGIow__"
              alt="img"
            />
            <h1>Headline</h1>
            <p>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
              ornare in venen.
            </p>
            <button>See more</button>
            <button>Save</button>
          </div>
        </Frame>

        <StyledBtn primary color={"green"} fontSize={"15px"} >HelLlo</StyledBtn>
        <StyledBtn outlined color={"green"} fontSize={"15px"} >HelLlo</StyledBtn>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
