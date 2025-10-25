import React from 'react'
import ClientsComponent from '../../components/Epc/EpcClient/ClientsComponent'
import ClientSpeakSection from '../../components/Epc/EpcClient/ClientSpeakSection'
import Footer from '../../components/Nexus_EPC/home/Footer'

import Epc_Navbar from './Epc_Navbar'


const EPC_ClientPage = () => {
  return (
    <div>
      <Epc_Navbar />
      <ClientsComponent />
      <ClientSpeakSection />
      <Footer />
    </div>
  )
}

export default EPC_ClientPage