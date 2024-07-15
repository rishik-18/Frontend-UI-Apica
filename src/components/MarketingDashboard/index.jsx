import { Box, CircularProgress, Flex, Heading, Image, Text, Center } from "@chakra-ui/react";
import React from "react";
import { SelectBox } from "../SelectBox";

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' }
];

export default function MarketingDashboard({
    marketingText= 'Marketing',
    acquisitionText= 'Acquisition',
    purchaseText= 'Purchase',
    retentionText= 'Retention',
    ...props
}) {
    return (
        <Flex
           {...props}
           gap='20px'
           bg='white'
           w='100%'
           flexDirection='column'
           px='20px'
           py={{ base: '20px', sm: '22px' }}
           borderRadius='12px'
        >
          <Flex gap='6px' alignSelf='stretch' flexDirection='column'>
            <Flex justifyContent='space-between' alignItems='start' gap='20px'>
                <Heading size='paragraph_1_medium' as='h6' alignSelf='center'>{marketingText}</Heading>
                <SelectBox
                  indicator={<Image src="images/img_arrowdown.svg" alt="Arrow" w='16px' h='16px' />}
                  name="Dropdown Timeframe"
                  placeholder={`This Week`}
                  options={dropDownOptions}
                  style={{ color: '#bec0c9', pr: { base: '20px', sm: '22px' }, fontSize: '12px', w: '28%' }}
                />
            </Flex>
            <Flex justifyContent='space-between' gap='20px'>
               <Flex gap='8px' w='26%' justifyContent='center' alignItems='start'>
                  <Box h='8px' bg='#5570f1' w='8px' borderRadius='4px' />
                  <Text size='label_2_regular' color='#a5a7b1' alignSelf='center'>{acquisitionText}</Text>
                </Flex>
                <Flex gap='8px' w='22%' justifyContent='center' alignItems='start'>
                  <Box h='8px' bg='#96a5ea' w='8px' borderRadius='4px' />
                  <Text size='label_2_regular' color='#a5a7b1' alignSelf='center'>{purchaseText}</Text>
                </Flex>
                <Flex gap='8px' w='22%' justifyContent='center' alignItems='start'>
                  <Box h='8px' bg='#ffcc91' w='8px' borderRadius='4px' />
                  <Text size='label_2_regular' color='#a5a7b1' alignSelf='center'>{retentionText}</Text>
                </Flex>   
            </Flex>
          </Flex>
          <Center
            h='204px'
            mb='18px'
            bg='#eef0fa'
            alignSelf='stretch'
            position='relative'
            p='16px'
            borderRadius='102px'
          >
            <Box position='relative' h='160px' w='160px'>
              <CircularProgress
                value={2}
                thickness='12px'
                size='160px'
                trackColor='#ffcc91'
                color="#ffcc91"
                position='absolute'
                top='0'
                left='0'
              />
              <CircularProgress
                value={5}
                thickness='12px'
                size='160px'
                trackColor='#96a5ea'
                color="#96a5ea"
                position='absolute'
                top='0'
                left='0'
              />
              <CircularProgress
                value={750}
                thickness='12px'
                size='160px'
                trackColor='#5570f1'
                color="#5570f1"
                position='absolute'
                top='0'
                left='0'
              />
            </Box>
          </Center>
        </Flex>
    );
}