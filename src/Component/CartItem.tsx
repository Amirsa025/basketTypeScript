import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import StoreItems from "../data/items.json"
import {Image,HStack ,Box ,Text,VStack,Button} from "@chakra-ui/react";
import {formatCurrency} from "../utilis/formatCurrency";
type CartItemProps = {
    id:number,
    quantity:number
}
const CartItem = ({id,quantity}:CartItemProps) => {
    const {removeFromCart} = useShoppingCart()
    const item:any = StoreItems.find(item => item.id ===id)
    console.log(item.imgUrl)
    if(item===null) return  null
    return  (
        <HStack display={"flex"} alignItems={"center"}>
          <Box columnGap={2} display={"flex"} flex-direction="column"  py={"0.5rem"} >
              <Image w={"12rem"} height={"5rem"} objectFit="cover" src={item.imgUrl}  />
          </Box>
            <Box display={"flex"} justifyContent={"space-between"} w={"100%"} alignItems={"center"}>
             <VStack display={"flex"} alignItems={"center"}>
                 <Text fontSize='xs'> {item.name}  x{quantity>1 ? quantity : 1}</Text>
                 <Text fontSize='xs'> {item.price} $</Text>
             </VStack>
                <HStack >
                    <Box>{formatCurrency(quantity*item.price)}</Box>
                    <Button onClick={()=>removeFromCart(id)} size='medium'>X</Button>
                </HStack>
            </Box>
        </HStack>
    )
    return (
        <div>

        </div>
    );
};

export default CartItem;
