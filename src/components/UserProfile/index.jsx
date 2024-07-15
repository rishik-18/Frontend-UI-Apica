import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function UserProfile({ septCounterText = 'Sept 10', ...props}) {
    return (
        <Flex {...props} gap='18px' w={{ base: '100%', sm: '6%' }} flexDirection='column' alignItems='center'>
            <Box bg='#eef0f9' w='32%' borderRadius='6px'>
                <Box h='210px' mt='30px' bg='#5570f1' w='12px' borderRadius='6px' /> 
            </Box>
            <Text size='label_2_regular' color='#bec0c9'>{septCounterText}</Text>
        </Flex>
    );
}