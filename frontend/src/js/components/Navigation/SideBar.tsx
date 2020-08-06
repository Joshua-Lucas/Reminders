import React from 'react'
import styled from 'styled-components'
import { UtilityStyles } from '@jludev/component-lib-typescript'
import { HTTP_VERSION_NOT_SUPPORTED } from 'http-status-codes'
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

//Interfaces
interface ISideBarProps {
  setFilter: string[]
}

//React Component
const SideBar: React.FC<ISideBarProps> = ({ setFilter }) => {
  const AllCatagories = setFilter.map((categorey) => (
    <FilterCategories key={categorey} filterCategory={categorey} />
  ))

  return (
    <SideContainer>
      <FilterContaier>{AllCatagories}</FilterContaier>
    </SideContainer>
  )
}
export default SideBar
