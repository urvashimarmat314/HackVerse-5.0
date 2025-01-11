import React from 'react'
import DoctorAppointments from '../components/Dashboard/DoctorsAppointment'
import DoctorsInfo from '../components/Dashboard/DoctorsInfo'
import DoctorThankYou from '../components/Dashboard/DoctorThankYou'
const DashBoard = () => {
  return (
    <div>
           <DoctorThankYou/>
      <DoctorAppointments/>
      <DoctorsInfo/>
   
    </div>
  )
}

export default DashBoard
