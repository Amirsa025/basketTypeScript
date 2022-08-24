import { Box, VStack, Image,HStack, Button ,Text  } from "@chakra-ui/react";
import {useShoppingCart} from "../context/ShoppingCartContext";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        DecreaseItemQuantity,
        getItemQuantity,
        removeFromCart,
        increaseItemQuantity
    } = useShoppingCart()
    let quantity  =getItemQuantity(id)
  return (

    <VStack
  spacing={24}
  align='stretch'

>
<Box display="flex" flexDir="column" w={"100%"}  bgColor="#f1f1f1"  pb="1rem">
        <Image objectFit="cover" h={"14em"} src={imgUrl}   alt={name} />

    <HStack display="flex" justifyContent={"space-between"}>
        <Box px="0.5rem" fontWeight={600}  >{name}</Box>
        <Box px="0.5rem" fontWeight={300}  >{price}$</Box>
    </HStack>
    {
        quantity===0 ? (
                <HStack  display="flex" justifyContent={"center"} >
                    <Button onClick={()=>increaseItemQuantity(id)} w={"full"} bgColor="#3182CE" color="white" colorScheme={"blue"}>Add to cart</Button>
                </HStack>
        ):(
            <HStack display={"flex"} justifyContent={"center"}>
                <HStack display='flex' justifyContent={"center"} >
                    <Button bgColor={"#4299E1"} color="white" size='xs' colorScheme='blue' onClick={()=>DecreaseItemQuantity(id)}>-</Button>
                    <Text>{quantity} in Cart</Text>
                    <Button  bgColor={"#E53E3E"} color="white" size='xs'  colorScheme='red' onClick={()=>increaseItemQuantity(id)}>+</Button>
                </HStack>
                <Button
                    onClick={() => removeFromCart(id)}
                    bgColor={"#E53E3E"} color="white" size='xs'  colorScheme='red'
                >
                    Remove
                </Button>
            </HStack>
        )
    }

      </Box>
</VStack>
  );
}
