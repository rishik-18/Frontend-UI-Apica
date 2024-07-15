import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SidebarDash({ ...props }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Box
          {...props}
          width="298px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          rowStyles={{ [`.${sidebarClasses.container}`]: { gap: 62 } }}
          as={Sidebar}
          pt="14px"
          gap={{ base: '31px', sm: '62px' }}
          display="flex"
          flexDirection="column"
          bg="white"
          h="100vh"
          top='0px'
          overflow="auto"
          px={{ base: '20px', sm: "30px" }}
          sx={{ position: "sticky !important" }}
        >
          <Image src="images/Logo.png" alt="Sidebar logo" h="52px" w="122px" fit="contain" />
          <Box
            menuItemStyles={{
              button: {
                padding: '8px 8px 8px 20px',
                gap: '16px',
                color: "#52545c",
                fontWeight: 400,
                fontSize: "14px",
                borderRadius: '12px',
                [`&:hover, &.ps-active`]: { color: '#ffffff', backgroundColor: "#5570f1 !important" },
              },
            }}
            as={Menu}
            mb="22px"
            pb="12px"
            mt="32px"
            alignSelf="stretch"
            w="100%"
          >
            <Box>
              <MenuItem as={Link} href="/" icon={<Image src="images/img_grid.svg" alt="Grid icon" h="24px" w="24px" />}>Dashboard</MenuItem>
              <MenuItem
                as={Link}
                href='/orders'
                icon={<Image src="images/img_bag.svg" alt="Bag icon" h="24px" w="24px" />}
                suffix={
                  <Box alignSelf='start' bg='#ffcc91' w='24px' flexDirection='column' borderRadius='12px'>
                    <Text fontSize='12px' fontWeight='400' fontStyle='normal' color="#1c1d22" mt="3px" ml='8px'> 3 </Text>
                  </Box>
                }
              >Orders</MenuItem>
              <MenuItem icon={<Image src="images/img_customers.svg" alt="Grid icon" h="24px" w="24px" />}>Customers</MenuItem>
              <MenuItem icon={<Image src="images/img_inventory.svg" alt="Grid icon" h="24px" w="24px" />}>Inventory</MenuItem>
              <MenuItem
                icon={<Image src="images/img_conversations.svg" alt="Bag icon" h="24px" w="24px" />}
                suffix={
                  <Box alignSelf='start' bg='#ffcc91' w='24px' flexDirection='column' borderRadius='12px'>
                    <Text fontSize='12px' fontWeight='400' fontStyle='normal' color="#1c1d22" mt="3px" ml='6px'> 16 </Text>
                  </Box>
                }
              >Conversations</MenuItem>
              <MenuItem icon={<Image src="images/img_settings.svg" alt="Grid icon" h="24px" w="24px" />}>Settings</MenuItem>
            </Box>
            <Box mt='305px'>
              <MenuItem icon={<Image src="images/img_support.svg" alt="Grid icon" h="24px" w="24px" />}>Contact Support</MenuItem>
            </Box>
            <Flex
              gap='16px'
              bg='#ffcc9133'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              p='10px'
              borderRadius='16px'
            >
              <Flex gap='12px' alignItems='center'>
                <Image src="images/img_gift.svg" alt="Gift Icon" h='24px' w='24px' />
                <Text color='#1c1d22' alignSelf='end'>
                  Free Gift Awaits You!
                </Text>
              </Flex>
              <Flex gap='18px' mr='27px'>
                <Text fontSize='12px' fontWeight='400' fontStyle='normal'> Upgrade your account </Text>
                <Image src="images/img_right.svg" alt="Right" h='16px' w='16px' />
              </Flex>
            </Flex>
            <Box>
              <MenuItem icon={<Image src="images/img_logout.svg" alt="Grid icon" h="24px" w="24px" />}>Logout</MenuItem>
            </Box>
          </Box>
        </Box>
    );
}
