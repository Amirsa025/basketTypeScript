import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import StoreItem from "../Component/StoreItem";
import StoreItems from "../data/items.json"
import { useMediaQuery } from '@chakra-ui/react'
const Store = () => {
    return (
        <div>
            <strong>   Store</strong>
            <Grid  templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gridAutoColumns="grid-auto-columns" gridGap={{base:'15rem',md:'14rem' , lg:'2rem'  }}>
                {StoreItems.map((item,id) =>{
                    return (
                        <GridItem colSpan={1}  w='100%' h='10'  py={10} key={id}  >
                            <StoreItem {...item}/>
                        </GridItem>
                    )
                })}
            </Grid>
        </div>
    );
};

export default Store;
