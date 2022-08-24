import React from 'react';
import './App.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import MainRoute from "./routes/MainRoute";
function App() {
    return (
        <ChakraProvider>
            <MainRoute/>
        </ChakraProvider>
    )
}

export default App;
