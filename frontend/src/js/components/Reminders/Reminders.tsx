import React, { useState, useContext } from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'
import ReminderContainer from './RemindersContiner'
import ReminderContext from '../../context/RemindersContext'
import CreateReminder from './CreateReminder'

// STYLED COMPONENTS
const RemindersWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  border-left: 2px solid ${(props) => props.theme.lightNeutralColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`
// REACT COMPONENT
const Reminders: React.FC = ({}) => {
  // Hooks
  const { fetchedReminders, filter } = useContext(ReminderContext)
  const [showModal, setShowModal] = useState(false)

  // Methods
  const filterReminders = (filter: string) => {
    if (fetchedReminders == null) {
      return <p>No Reminders</p>
    } else {
      if (filter == 'All' && fetchedReminders.length > 0) {
        const all = fetchedReminders.map((reminders: any) => (
          <ReminderContainer
            key={reminders.id}
            id={reminders.id}
            title={reminders.title}
            details={reminders.details}
            frequency={reminders.frequencey}
          />
        ))
        return all
      } else {
        var filteredByDay = fetchedReminders.filter(
          (reminder: any) => reminder.daytobe == filter
        )
        var filtered = filteredByDay.map((reminders: any) => (
          <ReminderContainer
            key={reminders.id}
            id={reminders.id}
            title={reminders.title}
            details={reminders.details}
            frequency={reminders.frequencey}
          />
        ))

        return filtered
      }
    }
  }

  return (
    <RemindersWrapper>
      <h1>Your Reminders</h1>
      {filterReminders(filter)}
      <button onClick={() => setShowModal(!showModal)}>
        Click me to show Modal
      </button>
      {showModal ? (
        <Modal>
          <div className=" flex flex-col items-center">
            <CreateReminder toggleModal={setShowModal} />
            <button onClick={() => setShowModal(!showModal)}>
              Close Model
            </button>
          </div>
        </Modal>
      ) : null}
    </RemindersWrapper>
  )
}
export default Reminders
