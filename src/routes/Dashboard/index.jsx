import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  BitcoinEthereum,
  Cards,
  Overview,
  Payments,
  Statistics,
  Transactions,
  Users,
  AgentsAdd,
  AgentMore,
} from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Loading from "../../assets/images/loading.png"

const Agents = lazy(() => new Promise((resolve) => {
  return setTimeout(() => resolve(import("../../pages/Dashboard/Agents")), 1500);
}))

function DashboardRoutes() {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <Navbar />
        <div className="w-[80%] h-[100vh] overflow-y-auto relative">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="/agents" element={
              <Suspense fallback={
                <img className="absolute top-0 bottom-0 left-0 right-0 m-auto" src={Loading} alt="" width={300} />
              }><Agents /></Suspense>
            } />
            <Route path="/agents/:id" element={<AgentMore />} />
            <Route path="/agents/add" element={<AgentsAdd />} />
            <Route path="/agents/:id/edit" element={<AgentsAdd />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/bitcoin-ethereum" element={<BitcoinEthereum />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default DashboardRoutes;
