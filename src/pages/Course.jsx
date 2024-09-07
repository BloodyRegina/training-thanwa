import React from 'react'
import Layout from "../components/Layout";
import Card from '../components/Card';
const Course = () => {
    const Datacard = [
        {
            image: "basic-react-native.png",
            name:"Basic React Native",
            time:"5",
            price:"7500"
        },
        {
            image: "powerbi-dashboard.png",
            name:"Power BI Dashboard",
            time:"4",
            price:"5500"
        },
        {
            image: "ui-design-with-figma.png",
            name:"Ul Design with Figma",
            time:"3",
            price:"5000"
        },
        {
            image: "ui-design-with-figma.png",
            name:"Cross Platform with Flutter",
            time:"5",
            price:"6500"
        },
    ]
  return (
    <Layout>
    <h1 className="font-bold text-4xl text-blue-950">หลักสูตรที่เปิดสอน</h1>
    <hr />
    <div className='grid lg:grid-cols-4 gap-2 sm:grid-cols-2 md:grid-cols-3'>
    {
        Datacard.map((d) =>(
            <Card key={d.name} {...d}/>
        ))
    }
    </div>
  </Layout>
  )
}

export default Course