import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { SelectBox } from "../../components/SelectBox";
import UserProfile from "../../components/UserProfile";

const dateWiseBarList = [
    { septCounterText: 'Sept 10' },
    { septCounterText: 'Sept 11' },
    { septCounterText: 'Sept 12' },
    { septCounterText: 'Sept 13' },
    { septCounterText: 'Sept 14' },
    { septCounterText: 'Sept 15' },
    { septCounterText: 'Sept 16' },
];

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' }
];

export default function DashboardSummarySection() {
    return (
        <>
         <Box>
            <Flex gap='34px' bg='white' flexDirection='column' p='10px' borderRadius='12px'>
                <Flex alignItems='center'>
                    <Flex gap='22px' flex={1} alignItems='center'>
                        <Heading size='paragraph_1_medium' as='h1' alignSelf='end'>Summary</Heading>
                        <SelectBox
                           indicator={<Image src="images/img_arrowdown.svg" alt="Arrow Down" w='20px' h='20px' />}
                           name='Sales Dropdown'
                           placeholder={`Sales`}
                           options={dropDownOptions}
                           style={{
                            color: '#5570f1',
                            pl: '12px',
                            pr: { base: '20px', sm: '34px'},
                            fontSize: '14px',
                            bg: '#5570f114',
                            w: '18%',
                            py: '6px',
                            borderRadius: '8px'
                           }}
                        />
                    </Flex>
                    <SelectBox
                       indicator={<Image src="images/img_arrowdown.svg" alt="Arrow Down" w='16px' h='16px' />}
                       name='Duration dropdown'
                       placeholder={`Last 7 days`}
                       options={dropDownOptions}
                       style={{
                        color: '#1c1d22',
                        pr: { base: '20px', sm: '22px' },
                        fontSize: '12px',
                        w:'14%'
                       }}
                    />
                </Flex>
                <Flex justifyContent='space-between' alignItems='start' gap='20px' flexDirection={{ md: 'row', base: 'column' }}>
                    <Flex gap='34px' flexDirection='column' alignItems='end'>
                        <Text size='label_2_regular' color='#a5a7b1'>100k</Text>
                        <Text size='label_2_regular' color='#a5a7b1'>80k</Text>
                        <Text size='label_2_regular' color='#a5a7b1'>60k</Text>
                        <Text size='label_2_regular' color='#a5a7b1'>40k</Text>
                        <Text size='label_2_regular' color='#a5a7b1'>20k</Text>
                    </Flex>
                    <Flex
                      ml={{ md: '44px', base: '0px' }}
                      gap='44px'
                      alignSelf={{ md: 'center', base: 'stretch' }}
                      flex={1}
                      flexDirection={{ base: 'column', sm: 'row' }}
                    >
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {dateWiseBarList.map((d,index) => (
                            <UserProfile {...d} key={"barList" + index} />
                          ))}
                        </Suspense>
                    </Flex>
                </Flex>
            </Flex>
         </Box> 
        </>
    );
}