import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Helmet } from 'react-helmet';
import SidebarDash from "../../components/SidebarDash";
import Header from '../../components/Header';
import DashboardSection from "./DashboardSection";
import MarketingDashboard from "../../components/MarketingDashboard";
import SummaryDashboard from "../../components/SummaryDashboard";
import DashboardSummary from "../../components/DashboardSummary";
import DashboardSummarySection from "./DashboardSummarySection";

const orderDetailsList = [
    {
        productName: 'iphone13',
        productDate: '12 Sept 2022',
        productPrice: '730,000.00 x 1',
        productStatus: 'Pending'
    },
    {
        productName: 'iphone13',
        productDate: '12 Sept 2022',
        productPrice: '730,000.00 x 1',
        productStatus: 'Pending'
    },
    {
        productName: 'iphone13',
        productDate: '12 Sept 2022',
        productPrice: '730,000.00 x 1',
        productStatus: 'Pending'
    },
    {
        productName: 'iphone13',
        productDate: '12 Sept 2022',
        productPrice: '730,000.00 x 1',
        productStatus: 'Pending'
    },
    {
        productName: 'iphone13',
        productDate: '12 Sept 2022',
        productPrice: '730,000.00 x 1',
        productStatus: 'Pending'
    },
];

export default function DashboardPage() {
    return (
        <>
         <Helmet>
            <title> Nanny's Shop Dashboard - Overview & Analytics </title>
            <meta
              name="description"
              content="test"
            />
         </Helmet>
         <Flex bg="#f4f5f9" w="100%">
            <SidebarDash />
            <Flex gap='28px' flex={1} flexDirection='column'>
                <Box>
                    <Header />
                    <Box borderColor='#f1f2f8' borderTopWidth='1px' borderStyle='solid' bg='white'>
                        <Flex>
                            <Image src="images/img_home.svg" alt="Home" h='16px' w='16px' ml='20px' />
                        </Flex>
                    </Box>
                </Box>
                <Flex mb='4px' gap='20px' flexDirection='column' mx={{ md: '18px', base: '0px' }}>
                    <DashboardSection />
                    <Flex gap='18px' flexDirection={{ md: 'row', base: 'column' }}>
                        <Flex
                          gap='20px'
                          flex={1}
                          flexDirection='column'
                          alignSelf={{ md: 'auto', base: 'stretch' }}
                          p={{ md: 0, base: '20px' }}
                        >
                            <Flex gap='20px' flexDirection={{ md: 'row', base: 'column' }}>
                                <MarketingDashboard />
                                <Flex gap='18px' w='100%' flexDirection='column'>
                                    <DashboardSummary bg='#5570f1' />
                                    <DashboardSummary bg='white' />
                                </Flex>
                            </Flex>
                            <DashboardSummarySection />
                        </Flex>
                        
                    </Flex>
                </Flex>
            </Flex>
         </Flex>
        </>
    );
}