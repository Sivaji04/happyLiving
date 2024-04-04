import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  height: 35px;
  width: 90px;
`

export const MemeContainer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  background-image: url(${props =>
    props.visible
      ? 'https://assets.ccbp.in/frontend/react-js/nature-img.png'
      : ''});

  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-family: 'Roboto';
  background-size: cover;
  margin: 2%;
  height: 70vh;
  text-align: center;

  color: white;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`
export const Para = styled.p`
  font-size: ${props => props.size};
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #35469c;
  text-align: center;
  font-size: 30px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 3%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  
}
`

export const Form = styled.form` 
  display: flex;
  flex-direction: column;
  width: 100%;
  order: 1;

  @media screen and (min-width: 768px) {
    width: 50%;
    order: 0;
  
}
`
