import { Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function DashboardSummary({ ...props }) {
    return (
       <Flex {...props} gap='46px' flexDirection='column' p='10px' borderRadius='12px'>
          <Flex alignSelf='stretch' justifyContent='center' alignItems='center'>
            <IconButton
              icon={<Image src="images/img_cart.svg" />}
              aria-label="Cart Icon"
              h='36px'
              bg='#ffcc9128'
              w='36px'
              px='8px'
              borderRadius='8px' 
            />
            <Flex gap='8px' flex={1} justifyContent='flex-end' alignItems='center'>
                <Text size='label_1_regular' color='#bec0c9'>This week</Text>
                <Image src="images/img_arrowdown.svg" alt="Arrow" h='16px' w='16px' /> 
            </Flex>
          </Flex>
          <Flex alignSelf='stretch' justifyContent='space-between' gap='20px'>
            <Flex gap='8px' w='44%' flexDirection='column' alignItems='start'>
                <Text color='#cc5f5f'>Abandoned Cart</Text>
                <Flex gap='8px' alignSelf='stretch' alignItems='center' flexWrap='wrap'>
                    <Heading as='h6'>20%</Heading>
                    <Text size='label_1_regular' color='#519c66'>+0.00%</Text>
                </Flex>
            </Flex>
            <Flex gap='8px' w='44%' flexDirection='column' alignItems='start'>
                <Text color='#8a8c96'>Customers</Text>
                <Heading as='h6'>30</Heading>
            </Flex>
          </Flex>
       </Flex> 
    );
}