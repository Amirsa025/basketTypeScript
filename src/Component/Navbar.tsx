import { Container } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from "react-router-dom";
import { Box, Text,Button } from "@chakra-ui/react"
import {useShoppingCart} from "../context/ShoppingCartContext";
const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <Box bgColor='#fcfcfc' py={"1.5rem"}>
            <Box  maxW={'100%'} px={"1rem"} py={"0.5rem"}  bgColor={'white'}  rounded={"0.5rem"} boxShadow='md'>
                <Box display='flex' alignItems={"center"} justifyContent="space-between">
                    <Box display="flex" alignItems="center" gap="1rem">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ?'activeStyle' : undefined
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink to="/store"   className={({ isActive }) =>
                            isActive ?'activeStyle' : undefined
                        }>
                            Store
                        </NavLink>
                        <NavLink to="/about"   className={({ isActive }) =>
                            isActive ?'activeStyle' : undefined
                        }>
                            About
                        </NavLink>
                    </Box>
                    <Box rounded={"100%"} pos="relative">
                        {
                            cartQuantity > 0 && (
                                <>
                                    <Button colorScheme='cyan' gap={"3rem"} variant='outline' w={"3rem"} h={"2.5rem"} rounded="3xl"onClick={openCart}  >
                                        <i className="ri-shopping-cart-fill"></i>
                                    </Button>
                                    <Box bgColor='red' pos={"absolute"} right="-0.5rem" top="1.5rem" color='white' w={"1.5rem"} h={"1.5rem"} rounded="2xl" display="flex" alignItems="center" justifyContent="center">{cartQuantity}</Box>
                                </>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
