import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SidebarOrders from "../../components/SidebarOrders";
import Header from "../../components/Header";
import OrdersSummarySection from "./OrdersSummarySection";
import OrdersSection from "./OrdersSection";

export default function OrdersPage() {
    return (
        <>
          <Flex bg='#f4f5f9' w='100%'>
            <SidebarOrders />
            <Flex gap='22px' flex={1} flexDirection='column'>
                <Box>
                    <Header />
                    <Box borderColor='#f1f2f8' borderTopWidth='1px' borderStyle='solid' bg='white'>
                        <Flex justifyContent='center' alignItems='center'>
                            <Image src="images/img_home.svg" alt="Home" h='16px' w='16px' />
                            <Flex gap='11px' flex={1} flexWrap='wrap' px='10px'>
                                <Text size='label_1_regular' color='#8a8c96'>/</Text>
                                <Text size='label_1_regular' color='#8a8c96'>Orders</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Flex mb='4px' gap='20px' flexDirection='column' mx={{ md: '20px', base: '0px' }}>
                    <OrdersSummarySection />
                    <OrdersSection />
                </Flex>
            </Flex>
          </Flex>
        </>
    );
}