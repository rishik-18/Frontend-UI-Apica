import { Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SelectBox } from '../SelectBox';

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' }
];

export default function OrderSummary({
    allOrdersText= 'All Orders',
    allOrdersCount= '450',
    pendingText= 'Pending',
    pendingCount= '5',
    completedText= 'Completed',
    completedCount= '320',
    ...props
}) {
    return (
        <Flex
          {...props}
          gap='32px'
          bg='white'
          flexDirection='column'
          p={{ md: '10px', base: '20px' }}
          borderRadius='12px'
        >
            <Flex alignSelf='stretch' justifyContent='space-between' alignItems='center' gap='20px'>
                <IconButton
                  icon={<Image src='images/img_gift.svg' />}
                  aria-label='Demo label'
                  h='36px'
                  bg='#ffcc9128'
                  w='36px'
                  px='8px'
                  borderRadius='8px'
                />
                <SelectBox
                  indicator={<Image src='images/img_arrowdown.svg' alt='Arrow' w='16px' h='16px' />}
                  name="Dropdown week"
                  placeholder={`This Week`}
                  options={dropDownOptions}
                  style={{ color: '#bec0c9', pr: { base: '20px', sm: '22px' }, fontSize: '12px', w: '18%' }}
                />
            </Flex>
            <Flex gap='32px' alignSelf='stretch'>
                <Flex gap='8px' w='100%' flexDirection='column' alignItems='start'>
                    <Text color='#8a8c96'>{allOrdersText}</Text>
                    <Heading as='h6'>{allOrdersCount}</Heading>
                </Flex>
                <Flex gap='8px' w='100%' flexDirection='column' alignItems='start'>
                    <Text color='#8a8c96'>{pendingText}</Text>
                    <Heading as='h6'>{pendingCount}</Heading>
                </Flex>
                <Flex gap='8px' w='100%' flexDirection='column' alignItems='start'>
                    <Text color='#8a8c96'>{completedText}</Text>
                    <Heading as='h6'>{completedCount}</Heading>
                </Flex>
            </Flex>
        </Flex>
    );
}