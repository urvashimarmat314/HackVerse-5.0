import React from 'react'
import MedicinePage from '../components/Medicines/MedicinePage'
import MedicineHeader from '../components/Medicines/MedicineHeader'
import Footerai from '../components/Aibot/Footerai'
import ContactSection from '../components/Footer/ContactSection'


const Medicines = () => {
  return (
    <div>
        
        <MedicineHeader/>
        <MedicinePage/>
        <ContactSection/>
     
       
    </div>
  )
}

export default Medicines