import React from 'react';
import { Container } from '@chakra-ui/react'
import {Routes,Route} from "react-router";
import Home from '../pages/Home';
import Store from "../pages/store";
import About from "../pages/About";
import Navbar from "../Component/Navbar";
import {ShoppingCardProvider} from "../context/ShoppingCartContext";
const MainRoute = () => {
    return (
        <ShoppingCardProvider>
            <Container maxW={"100%"} h={"100vh"} bgColor='#fcfcfc' >
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </Container>
        </ShoppingCardProvider>



    );
};

export default MainRoute;
