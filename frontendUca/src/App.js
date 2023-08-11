import React from 'react'
import './App.css'
import DashRoute from "./routes/DashRoute";
import AccueilRoute from "./routes/AccueilRoute";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthGuard from "./helpers/AuthGuard";
import LoginDashRoute from "./routes/LoginDashRoute";

const App = () => {
  return (
    <>
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<AccueilRoute/>}/>
                    <Route path="/admin/*" element={
                        <AuthGuard>
                            <DashRoute/>
                        </AuthGuard>
                        }/>
                    <Route path="/authDash/*" element={<LoginDashRoute/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
