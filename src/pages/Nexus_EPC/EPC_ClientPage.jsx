import React from 'react'
import ClientsComponent from '../../components/Epc/EpcClient/ClientsComponent'
import ClientSpeakSection from '../../components/Epc/EpcClient/ClientSpeakSection'
import Footer from '../../components/Nexus_EPC/home/Footer'
ClientSpeakSection

const EPC_ClientPage = () => {
  return (
    <div>
        <ClientsComponent />
        <ClientSpeakSection/>
        <Footer />
    </div>
  )
}

export default EPC_ClientPage