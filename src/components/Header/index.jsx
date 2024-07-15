import { Container, Flex, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import { SelectBox } from "./../SelectBox";

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' }
];

export default function Header({ ...props }) {
    return (
        <Flex {...props} bg='white' alignItems='center' p='14px' as='header'>
            <Container
                w='100%'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                maxW='1570px'
                gap='20px'
                px='0px'
                mx='auto'
                flexDirection={{ base: 'column', sm: 'row' }}
                ml='10px'
            >
                <Heading as='h6'>Dashboard</Heading>
                <Flex gap='20px' w={{ base: '100%', sm: '22%' }} justifyContent='center' alignItems='center'>
                    <SelectBox
                        indicator={<Image src="images/img_arrowdown.svg" alt="Arrow Down" w='20px' h='20px' />}
                        name="Shop Dropdown"
                        placeholder="Nanny's Shop"
                        options={dropDownOptions}
                        style={{
                            color: '#1c1d22',
                            pl: '12px',
                            pr: { base: '20px', sm: '34px' },
                            fontSize: '14px',
                            bg: '#fdf4e9',
                            flexGrow: 1,
                            py: '6px',
                            borderRadius: '8px'
                        }}
                    />
                    <Link href="#">
                       <Image src="images/img_bell.svg" alt="Bell" h='20px' w='20px' />
                    </Link>
                    <Link href="#">
                      <Image src="images/img_profile.svg" alt="Profile" h='32px' w='32px' fit='cover' borderRadius='8px' />
                    </Link>
                </Flex>
            </Container>
        </Flex>
    );
}