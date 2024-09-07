import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">Sorry, Not Found :(</h1>
      <div className="bg-blue-400 inline-block rounded-md p-4 mt-3">
      <NavLink to="/" className="text-white hover:text-green-400">
      Back to Home
      </NavLink>
      </div>
    </Layout>
    
  );
};

export default NotFound;
