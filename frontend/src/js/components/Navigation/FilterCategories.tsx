import React from 'react'
import styled from 'styled-components'
import { Icons, UtilityStyles } from '@jludev/component-lib-typescript'

//Styled Components
const FilterCatContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`
const FilterTitle = styled.h2`
  padding: 0 1rem;
`
const ReminderIcon = styled.svg`
  height: 20px;
  width: 20px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: ${UtilityStyles.borderRadius.full};
`

//Interfaces
interface IFilterCategoriesProps {
  filterCategory: string
}

//React Component
const FilterCategories: React.FC<IFilterCategoriesProps> = ({
  filterCategory,
}) => {
  return (
    <FilterCatContainer>
      <ReminderIcon viewBox="0 0 20 20">{Icons.BulletdList}</ReminderIcon>
      <FilterTitle>{filterCategory}</FilterTitle>
    </FilterCatContainer>
  )
}
export default FilterCategories
