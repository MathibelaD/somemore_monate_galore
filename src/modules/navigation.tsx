import React from "react"
import { Route, Routes } from "react-router-dom"
import { Photos } from "../Container/Gallery/photos/photo"

export const NavComponent = () => {


    return (
        <>
        
        <Routes>
          <Route path="/gallery" element={<Photos />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        
        </>
    )
}

