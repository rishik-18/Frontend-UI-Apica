import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import SummaryDashboard from "../../components/SummaryDashboard";

const salesSummaryList = [
    {
        salesText: 'Sales',
        salesAmount: '₦4,000,000.00',
        volumeText: 'Volume',
        volumeAmount: '450',
        volumeChange: '+20.00%',
    },
    {
        salesText: 'Customers',
        salesAmount: '₦4,000,000.00',
        volumeText: 'Active',
        volumeAmount: '1,180',
        volumeChange: '85%',
    },
    {
        salesText: 'Sales',
        salesAmount: '₦4,000,000.00',
        volumeText: 'Volume',
        volumeAmount: '450',
        volumeChange: '+20.00%',
    },
];

export default function DashboardSection() {
    return (
        <>
          <Flex gap='18px' flexDirection={{ md: 'row', base: 'column' }} justifyContent='space-between'>
            <Suspense fallback={<div>Loading feed...</div>}>
              {salesSummaryList.map((d,index) => (
                <SummaryDashboard {...d} key={'iconList' + index} bg='white' w='28%' borderRadius='12px' />
              ))}
            </Suspense>
          </Flex>
        </>
    )
}