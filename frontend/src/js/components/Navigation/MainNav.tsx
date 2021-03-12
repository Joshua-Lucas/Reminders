import React from 'react'
import styled from 'styled-components'

//Styled Components
const NavContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
  border-bottom: 2px solid ${(props) => props.theme.lightNeutralColor};
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
`
//Interfaces
interface IMainNavProps {}

//React Component
const MainNav: React.FC<IMainNavProps> = ({}) => {
  return (
    <NavContainer>
      <div>
        <h1>Reminders</h1>
      </div>
      <div>
        <a>Account</a>
      </div>
    </NavContainer>
  )
}
export default MainNav
