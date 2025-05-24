import React from 'react'
import {Timeline} from '../components/Timeline'
import { experiences } from '../Constrants'
const Experience = () => {
  return (
    <div className='w-full'>
      <Timeline data={experiences}/>
    </div>
  )
}

export default Experience
