import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '@jludev/component-lib-typescript'

interface IRemindersContinerProps {
  id: number
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
  const [state, setState] = useState('')
  return (
    <div>
      <h4>{title}</h4>
      <p>{details}</p>
    </div>
  )
}
export default RemindersContiner
