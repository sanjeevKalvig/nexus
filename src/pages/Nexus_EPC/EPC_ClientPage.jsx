import React from 'react'
import ClientsComponent from '../../components/Epc/EpcClient/ClientsComponent'
import ClientSpeakSection from '../../components/Epc/EpcClient/ClientSpeakSection'
import Footer from '../../components/Nexus_EPC/home/Footer'
import NexusNavbar from '../../components/Nexus/home/NexusNavbar'
ClientSpeakSection

const EPC_ClientPage = () => {
  return (
    <div>
      <NexusNavbar />
      <ClientsComponent />
      <ClientSpeakSection />
      <Footer />
    </div>
  )
}

export default EPC_ClientPage