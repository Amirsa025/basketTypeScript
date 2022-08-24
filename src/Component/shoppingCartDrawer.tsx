import React from 'react';
import {Button, useDisclosure } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react'
import {useShoppingCart} from "../context/ShoppingCartContext";
type ShoppingCartProps ={
    open:boolean
}
const ShoppingCartDrawer = ({open}:ShoppingCartProps) => {
    const { onOpen, onClose} = useDisclosure()
    const { closeCart, cartItem } = useShoppingCart()
    return (
        <>
            <Drawer placement='right' onClose={closeCart} isOpen={open}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>shopping cart</DrawerHeader>
                    <DrawerBody>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default ShoppingCartDrawer;
