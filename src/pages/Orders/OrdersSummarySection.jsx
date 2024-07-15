import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import React, { Suspense } from "react";
import OrderSummary from "../../components/OrderSummary";

const orderSummaryList = [
    {
        allOrdersText: 'All Orders',
        allOrdersCount: '450',
        pendingText: 'Pending',
        pendingCount: '5',
        completedText: 'Completed',
        completedCount: '320',
    },
    {
        allOrdersText: 'All Orders',
        allOrdersCount: '450',
        pendingText: 'Pending',
        pendingCount: '5',
        completedText: 'Completed',
        completedCount: '320',
    },
    {
        allOrdersText: 'All Orders',
        allOrdersCount: '450',
        pendingText: 'Pending',
        pendingCount: '5',
        completedText: 'Completed',
        completedCount: '320',
    },
];

export default function OrdersSummarySection() {
    return (
        <>
          <Flex gap='20px' flexDirection='column'>
            <Flex justifyContent='space-between' alignItems='center' gap='20px'>
                <Heading size='paragraph_1_medium' as='h1' mb='4px' alignSelf='end'>Orders Summary</Heading>
                <Button
                  leftIcon={<Image src="images/img_plus.svg" alt="Plus" w='24px' h='24px' />}
                  color='white'
                  fontSize='14px'
                  gap='12px'
                  bg='#5570f1'
                  flexDirection='row'
                  h='36px'
                  minW='200px'
                  px='16px'
                  borderRadius='12px'
                >
                    Create a New Order
                </Button>
            </Flex>
            <Flex gap='18px' flexDirection={{ md: 'row', base: 'column' }}>
                <Suspense fallback={<div>Loading feed...</div>}>
                  {orderSummaryList.map((d,index) => (
                    <OrderSummary {...d} key={'summaryList' + index} w='36%' />
                  ))}
                </Suspense>
            </Flex>
          </Flex>
        </>
    )
}