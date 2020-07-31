import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import {
  FormDiv,
  Textarea as DeatilsTextArea,
  Buttons,
  Input,
  Dropdown,
  UtilityStyles,
} from '@jludev/component-lib-typescript'
import { ICreateReminder, INewReminder } from '../../utils/interfaces'
import { remindersApi } from '../../utils/api/ReimdersApi'

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

// INTERFACE
interface IFORMNEW {
  toogleSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

// COMPONENT
const CreateReminder: React.FC<IFORMNEW> = ({ toogleSubmit }) => {
  // HOOKS

  // THESE ARE ACTION TYPE IN VARABLES THAT WAY IF SOMETHING IS MISS SPEELED IT IS EASIER TO IDENTIFY THE ERROR
  const ADD_TITLE = 'ADD_TITLE'
  const ADD_DAY = 'ADD_DAY'
  const ADD_DETAILS = 'ADD_DETAILS'
  const ADD_FREQUENCEY = 'ADD_FREQUENCEY'

  const initalState: ICreateReminder = {
    title: '',
    details: '',
    daytobe: '',
    frequencey: 1,
    user_id: 1,
  }

  const newReminderReducer = (state: any, action: any) => {
    switch (action.type) {
      case ADD_TITLE:
        return Object.assign({}, state, action.payload)
      case ADD_DAY:
        return Object.assign({}, state, action.payload)
      case ADD_FREQUENCEY:
        return Object.assign({}, state, action.payload)
      case ADD_DETAILS:
        return Object.assign({}, state, action.payload)
      default:
        return state
    }
  }

  const [newReminder, dispatch] = useReducer(newReminderReducer, initalState)

  // ---METHODS---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await remindersApi.post(newReminder)
    toogleSubmit(true)
    console.log(result)
  }

  return (
    <ModelWraper>
      <CreateReminderHeader>Create A New Reminder</CreateReminderHeader>
      <CreateReminderForm onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          value={newReminder.title}
          event={(e) =>
            dispatch({ type: ADD_TITLE, payload: { title: e.target.value } })
          }
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
          event={(e) =>
            dispatch({
              type: ADD_DAY,
              payload: { daytobe: e.target.value },
            })
          }
        />
        <Dropdown
          label="how often?"
          options={['Every Week', 'Every Two Weeks', 'Every Month']}
          event={(e) =>
            dispatch({
              type: ADD_FREQUENCEY,
              payload: { frequencey: e.target.value },
            })
          }
        />
        <DeatilsTextArea
          label="details"
          event={(e) =>
            dispatch({
              type: ADD_DETAILS,
              payload: { details: e.target.value },
            })
          }
          required={true}
        />
        <AddButton type="submit">Add</AddButton>
      </CreateReminderForm>
    </ModelWraper>
  )
}
export default CreateReminder
