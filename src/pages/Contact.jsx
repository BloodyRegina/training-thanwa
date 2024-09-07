import React from 'react'
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">ติดต่อ</h1>
      <hr />
      <div className='flex flex-col gap-4 mt-3'>
        <h1 className='font-bold text-2xl'>NVC Training Center</h1>
        <p><span className='font-bold'>Address</span>: 90 Tesa.Rd.Muang,Nakhon Pathom,73000</p>
        <p><span className='font-bold'>Tel</span>: 032-252790</p>
        <p><span className='font-bold'>E-mail</span>: admin@daksfjkadfj.com</p>
      </div>
    </Layout>
  )
}

export default Contact