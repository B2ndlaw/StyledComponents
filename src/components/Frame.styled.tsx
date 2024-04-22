import styled from "styled-components";
export const Frame = styled.div`
  div {
    margin: 0 0;
    background-color: white;
    border-radius: 15px;
    width: 300px;
    height: 350px;
    box-shadow: 0px 4px 20px 5px #0000001A;

    
  }

  img {
    position: relative;
    width: 280px;
    height: 170px;
    top: 10px;
    left: 10px;
    gap: 0px;
    border-radius: 10px;
    opacity: 0px;
  }

  h1 {
    position: relative;
    width: 70px;
    height: 19px;
    top: 20px;
    left: 20px;
    gap: 0px;
    opacity: 0px;
   
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;

  }

  p{
    position: relative;
    width: 260px;
height: 40px;
top: 39px;
left: 20px;
gap: 0px;
opacity: 0px;

font-size: 12px;
font-weight: 500;
line-height: 20px;
text-align: left;

color: #ABB3BA;



  }

  button{
position: relative;
border: none;    
width: 86px;
height: 30px;
top: 63px;
left: 20px;
gap: 0px;
border-radius: 5px;
opacity: 0px;
background: #4E71FE;
color: white;


  }

  button: last-child{
    background: white;
    border: 2px solid #4E71FE;
    margin-left: 10px;
    color: #4E71FE;
  }
`