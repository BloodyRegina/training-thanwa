import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 ">หน้าหลัก</h1>
      <hr />
      <img src="https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="my-2"/>
      <hr />
    </Layout>
  );
};

export default Home;
