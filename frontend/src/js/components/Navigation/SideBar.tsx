import React, { useContext } from 'react'
import styled from 'styled-components'
import { UtilityStyles } from '@jludev/component-lib-typescript'
import ReminderContext from '../../context/RemindersContext'
import FilterCategories from './FilterCategories'

//Styled Components
const SideContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: ${(props) => props.theme.lightNeutralColor};
  @media ${UtilityStyles.screenSize.lg} {
    width: 100%;
  }
`
const FilterContaier = styled.div`
  margin: 0.75rem;
  background-color: #fff;
  border-radius: ${UtilityStyles.borderRadius.lg};
  box-shadow: ${UtilityStyles.boxShadow.md};
  display: flex;
  flex-direction: column;
`

//INTERFACES
interface ISideBarProps {
  setCategories: string[]
}

//REACT COMPONENT
const SideBar: React.FC<ISideBarProps> = ({ setCategories }) => {
  const { setFilter } = useContext(ReminderContext)

  const AllCatagories = setCategories.map((categorey) => (
    <FilterCategories
      key={categorey}
      id={categorey}
      filterCategory={categorey}
      event={() => setFilter(categorey)}
    />
  ))

  return (
    <SideContainer>
      <FilterContaier>{AllCatagories}</FilterContaier>
    </SideContainer>
  )
}
export default SideBar
