import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SidebarOrders({ ...props }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Box
            {...props}
            width="90px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            rowStyles={{ [`.${sidebarClasses.container}`]: { gap: 78 } }}
            as={Sidebar}
            pt="14px"
            gap={{ md: '78px', base: '39px', sm: '58px' }}
            display="flex"
            flexDirection="column"
            bg="white"
            h="100vh"
            top='0px'
            overflow="auto"
            px='16px'
            sx={{ position: "sticky !important" }}
      >
        <Image src="images/img_logocoll.svg" alt="Sidebar logo" h="52px" w="52px" fit="contain" />
        <Box
            menuItemStyles={{
              button: {
                padding: '16px',
                justifyContent: 'center',
                borderRadius: '12px',
                [`&:hover, &.ps-active`]: { backgroundColor: "#5570f1 !important" },
              },
              label: {  display: 'none' },
            }}
            rootStyles={{ ['&>ul']: { gap: '238px' } }}
            as={Menu}
            mb="34px"
            pb="8px"
            display='flex'
            alignSelf="stretch"
            flexDirection='column'
            w="100%"
            mt='24px'
          >
            <Flex gap='10px' flexDirection='column'>
                <MenuItem as={Link} href="/" icon={<Image src="images/img_gridblack.svg" alt="Grid" h='24px' w='24px' />} />
                <MenuItem as={Link} href="/orders" icon={<Image src="images/img_bag.svg" alt="Grid" h='24px' w='24px' />} />
                <MenuItem icon={<Image src="images/img_customers.svg" alt="Grid" h='24px' w='24px' />} />
                <MenuItem icon={<Image src="images/img_inventory.svg" alt="Grid" h='24px' w='24px' />} />
                <MenuItem icon={<Image src="images/img_conversations.svg" alt="Grid" h='24px' w='24px' />} />
                <MenuItem icon={<Image src="images/img_settings.svg" alt="Grid" h='24px' w='24px' />} />
            </Flex>
            <Flex gap='10px' flexDirection='column'>
              <MenuItem icon={<Image src="images/img_support.svg" alt="Grid" h='24px' w='24px' />} />
              <MenuItem icon={<Image src="images/img_gift.svg" alt="Grid" h='24px' w='24px' />} />
              <MenuItem icon={<Image src="images/img_logout.svg" alt="Grid" h='24px' w='24px' />} />
            </Flex>
      </Box>
      </Box>
    )
}