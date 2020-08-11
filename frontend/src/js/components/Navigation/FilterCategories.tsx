import React from 'react'
import styled from 'styled-components'
import { Icons, UtilityStyles } from '@jludev/component-lib-typescript'

//Styled Components
const FilterCatContainer = styled.button`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding-left: 0.5rem;
  background-color: inherit;
  cursor: pointer;
  border: none;
`
const FilterTitle = styled.h5`
  margin: 0;
  padding: 0 1rem;
  font-weight: normal;
`
const ReminderIcon = styled.svg`
  width: 2rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: ${UtilityStyles.borderRadius.full};
`

//Interfaces
interface IFilterCategoriesProps {
  id: string
  filterCategory: string
  event:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
}

//React Component
const FilterCategories: React.FC<IFilterCategoriesProps> = ({
  id,
  filterCategory,
  event,
}) => {
  return (
    <FilterCatContainer onClick={event}>
      <ReminderIcon viewBox="0 0 20 20">{Icons.BulletdList}</ReminderIcon>
      <FilterTitle id={id}>{filterCategory}</FilterTitle>
    </FilterCatContainer>
  )
}
export default FilterCategories
