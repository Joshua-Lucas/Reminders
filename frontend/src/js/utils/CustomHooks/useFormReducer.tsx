import { useReducer } from 'react'

interface IReducer {
  previousState: any
  field: any
  value: any
}

const reducer = (previousState: any, updateState: any) => {
  return { ...previousState, ...updateState }
}

const useFormReducer = (initalState: any) => {
  const [formData, dispatch] = useReducer(reducer, initalState)

  const setFormData = (updatedState: any) => {
    dispatch(updatedState)
  }

  return [formData, setFormData]
}

export default useFormReducer
