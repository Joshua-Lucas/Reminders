import React, { useState, useContext } from 'react'
import Modal from '../../Modal'
import styled from 'styled-components'
import { Dropdown } from '@jludev/component-lib-typescript'
import ReminderContainer from './RemindersContiner'
import ReminderContext from '../../context/RemindersContext'
import CreateReminder from './CreateReminder'
import useDropdown from '../../utils/formComponents/useDropdown'

// STYLED COMPONENTS
const RemindersWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  border-left: 2px solid ${(props) => props.theme.lightNeutralColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Reminders: React.FC = ({}) => {
  // Hooks
  const { fetchedReminders } = useContext(ReminderContext)
  const [showModal, setShowModal] = useState(false)
  const [filterState, setFilterState] = useState('All')

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
      <form>
        <Dropdown
          label="Filter by Day"
          name="filter"
          options={[
            'All',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ]}
          event={(e) => setFilterState(e.target.value)}
        />
      </form>
      {filterReminders(filterState)}
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
