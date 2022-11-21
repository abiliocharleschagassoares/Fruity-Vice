import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  background-image: linear-gradient(to right, #8c14fc, #a537fd);
  width: 100%;
  padding: 30px 20px; 
  margin-bottom: 20px;

  @media only screen and (max-width: 520px) {
    text-align: center;
    font-size: 80%;
    padding: 5px;
  }
`

export const AppTitle = styled.h1`
  color: white;
  font-family: 'bold';
  margin: 0;
  text-shadow: 2px 2px #333;
`
