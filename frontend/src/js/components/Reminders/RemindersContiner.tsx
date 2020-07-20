import React from 'react'

interface IRemindersContinerProps {
  key: number
  title: string
  details: string
  frequency: number
}

const RemindersContiner: React.FC<IRemindersContinerProps> = ({
  title,
  details,
  frequency,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{details}</p>
    </div>
  )
}
export default RemindersContiner
