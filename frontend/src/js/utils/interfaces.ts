// REMINDER INTERFACES
export const filterOptions = [
  'All',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export interface IReminder {
  id: number
  title: string
  details: string
  daytobe: string
  frequencey: number
  user_id: number
}

export interface INewReminder {
  title: IReminder['title']
  details: IReminder['details']
  daytobe: IReminder['daytobe']
  frequencey: IReminder['frequencey']
  user_id: IReminder['user_id']
}

export type GetReminders = IReminder[]
export interface ICreateReminder extends INewReminder {}
