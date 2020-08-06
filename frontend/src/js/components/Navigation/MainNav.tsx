import React from 'react'
import styled from 'styled-components'

//Styled Components
const NavContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
  border-bottom: 2px solid ${(props) => props.theme.lightNeutralColor};
`
//Interfaces
interface IMainNavProps {}

//React Component
const MainNav: React.FC<IMainNavProps> = ({}) => {
  return <NavContainer></NavContainer>
}
export default MainNav
