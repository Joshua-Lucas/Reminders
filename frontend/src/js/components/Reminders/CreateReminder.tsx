import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import {
  FormDiv,
  Buttons,
  Input,
  Dropdown,
  UtilityStyles,
} from '@jludev/component-lib-typescript'
import { ICreateReminder } from '../../utils/interfaces'

// Styled Components
const ModelWraper = styled.div`
  width: 700px;
  height: 650px;
  box-shadow: ${UtilityStyles.boxShadow.xl};
  color: ${(props) => props.theme.primaryTextColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${UtilityStyles.borderRadius.md};
`
const CreateReminderHeader = styled.h3`
  font-size: 1.75rem;
  padding-bottom: 2rem;
`
const CreateReminderForm = styled.form`
  width: 315px;
  display: flex;
  flex-direction: column;
`
const AddButton = styled(Buttons)`
  align-self: center;
  border-radius: ${UtilityStyles.borderRadius.md};
`

export const Label = styled.label`
  font-size: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primaryTextColor};
  text-transform: capitalize;
`

const DeatilsTestArea = styled.textarea`
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.lightNeutralColor};

  &:hover {
    border: 2px solid ${(props) => props.theme.darkNeutralColor};
  }

  &:focus {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: 2px solid ${(props) => props.theme.lightNeutralColor};
    box-shadow: white 0 0 0 0.2rem,
      ${(props) => props.theme.primaryColor} 0 0 0 0.4rem;
  }

  @media ${UtilityStyles.screenSize.md} {
    padding: 0.5rem;
  }
`

// COMPONENT
const CreateReminder: React.FC = () => {
  // HOOKS

  // ---METHODS---
  // const handleSubmit = (e) => e.prevent()
  // // post api logic here to post input and dropdown

  return (
    <ModelWraper>
      <CreateReminderHeader>Create A New Reminder</CreateReminderHeader>
      <CreateReminderForm>
        <Input
          label="Name"
          type="text"
          value=""
          event={(e) => e.target.value}
        />
        <Dropdown
          label="day to be reminded"
          options={[
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ]}
          event={(e) => e.target.value}
        />
        <Dropdown
          label="how often?"
          options={['Every Week', 'Every Two Weeks', 'Every Month']}
          event={(e) => e.target.value}
        />
        <Label>
          Text Area
          <DeatilsTestArea />
        </Label>
        <AddButton type="submit">Add</AddButton>
      </CreateReminderForm>
    </ModelWraper>
  )
}
export default CreateReminder
