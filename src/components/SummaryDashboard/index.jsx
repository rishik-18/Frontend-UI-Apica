import { Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import React from 'react';
import { SelectBox } from "../SelectBox";

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' }
];

export default function SummaryDashboard({
    salesText= 'Sales',
    salesAmount= '₦4,000,000.00',
    volumeText= 'Volume',
    volumeAmount= '450',
    volumeChange= '+20.00%',
    ...props
}) {
    return (
        <Flex
            {...props}
            gap='32px'
            flexDirection='column'
            p={{ md: '10px', base: '20px' }}
        >
            <Flex alignSelf='stretch' justifyContent='space-between' alignItems='center' gap='20px'>
                <IconButton
                  icon={<Image src="images/img_icon.svg" />}
                  aria-label="I64:25679;10:8309-Icon Button"
                  h='36px'
                  bg='#5570f11e'
                  w='36px'
                  px='8px'
                  borderRadius='8px'
                />
                <SelectBox
                  indicator={<Image src="images/img_arrowdown.svg" alt="Arrow" w='16px' h='16px' />}
                  name="Dropdown This week"
                  placeholder={`This Week`}
                  options={dropDownOptions}
                  style={{ color: '#bec0c9', pr: { base: '20px', sm: '22px' }, fontSize: '12px', w: '28%' }}
                />
            </Flex>
            <Flex gap='20px' alignSelf='stretch'>
                <Flex gap='8px' w='100%' flexDirection='column' alignItems='start'>
                    <Text color='#8a8c96'>{salesText}</Text>
                    <Heading as='h6'>{salesAmount}</Heading>
                </Flex>
                <Flex gap='8px' w='100%' flexDirection='column' alignItems='start'>
                    <Text color='#8a8c96'>{volumeText}</Text>
                    <Flex gap='8px' alignSelf='stretch' alignItems='center' flexWrap='wrap'>
                        <Heading as='h6'>{volumeAmount}</Heading>
                        <Text size='label_1_regular' color='#519c66'>{volumeChange}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}