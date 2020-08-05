import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import {
  FormDiv,
  Textarea as DeatilsTextArea,
  BaseButton,
  Input,
  Dropdown,
  UtilityStyles,
} from '@jludev/component-lib-typescript'
import useFormReducer from '../../utils/CustomHooks/useFormReducer'
import { ICreateReminder, INewReminder } from '../../utils/interfaces'
import { remindersApi } from '../../utils/api/ReimdersApi'

// Styled Components
const ModelWraper = styled.div`
  width: 700px;
  height: 650px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.lightNeutralColor};
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
const AddButton = styled(BaseButton)`
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

// INTERFACES
interface ICreateReminderContiner {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
}

// COMPONENT
const CreateReminder: React.FC<ICreateReminderContiner> = ({ toggleModal }) => {
  // HOOKS
  const initalState: ICreateReminder = {
    title: '',
    details: '',
    daytobe: '',
    frequencey: 1,
    user_id: 1,
  }

  const [formData, setFormData] = useFormReducer(initalState)

  // ---METHODS---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    remindersApi.post(formData)
    toggleModal(false)
  }

  return (
    <ModelWraper>
      <CreateReminderHeader>Create A New Reminder</CreateReminderHeader>
      <CreateReminderForm onSubmit={handleSubmit}>
        <Input
          label="Title"
          name="title"
          type="text"
          value={formData.title}
          event={handleChange}
        />
        <Dropdown
          label="day to be reminded"
          name="daytobe"
          options={[
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ]}
          event={handleChange}
        />
        <Dropdown
          label="how often?"
          name="frequencey"
          options={['Every Week', 'Every Two Weeks', 'Every Month']}
          event={handleChange}
        />
        <DeatilsTextArea
          label="Details"
          name="details"
          event={handleChange}
          required={true}
        />
        <AddButton type="submit">Add</AddButton>
      </CreateReminderForm>
    </ModelWraper>
  )
}
export default CreateReminder
