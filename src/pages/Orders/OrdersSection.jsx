import { Box, Button, Checkbox, Flex, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { SelectBox } from "../../components/SelectBox";
import { CloseIcon } from "@chakra-ui/icons";
import { ReactTable } from '../../components/ReactTable'; 

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' }
];

const tableData = [
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
    {
        customerNameRow: "Test 1",
        orderDateRow: '12 Aug 2022 - 12:25 am',
        orderTypeRow: 'Home Delivery',
        trackingIdRow: '9348fjr73',
        orderTotalRow: '25,000.00',
        statusRow: 'Completed',
    },
];

export default function OrdersSection() {
    const [searchBarValue, setSearchBarValue] = useState('');

    const tableColumns = useMemo(() => {
        const tableColumnHelper = createColumnHelper();
        return [
            tableColumnHelper.accessor('checkboxColumn', {
                cell: (info) => (
                    <Box>
                        <Checkbox value={info?.getValue?.()} borderColor='#cfd2d4' borderWidth='1px' borderRadius='8px' />
                    </Box>
                ),
                header: (info) => (
                    <Flex flexDirection='column' py='14px'>
                        <Checkbox value='undefined' borderColor='#cfd2d4' borderWidth='1px' borderRadius='8px' />
                    </Flex>
                ),
                meta: { width: '24px' },
            }),
            tableColumnHelper.accessor('customerNameRow', {
                cell: (info) => (
                    <Flex ml={{ md: '22px', base: '0px' }}>
                        <Text>{info?.getValue?.()}</Text>
                    </Flex>
                ),
                header: (info) => (
                    <Flex
                      ml={{ md: '22px', base: '0px' }}
                      gap='8px'
                      flex={1}
                      cursor='pointer'
                      py='16px'
                      alignSelf={{ md: 'auto', base: 'stretch' }}
                      onClick={info?.header?.column?.getToggleSortingHandler()}
                    >
                        <Text color='#2b2c33'>Customer Name</Text>
                        <Image src="images/img_sort.svg" alt="Sort" h='16px' w='16px' />
                    </Flex>
                ),
                meta: { width: '208px' },
            }),
            tableColumnHelper.accessor('orderDateRow', {
                cell: (info) => (
                    <Flex>
                        <Text>{info?.getValue?.()}</Text>
                    </Flex>
                ),
                header: (info) => (
                    <Flex
                      gap='9px'
                      flex={1}
                      cursor='pointer'
                      py='16px'
                      alignSelf={{ md: 'auto', base: 'stretch' }}
                      onClick={info?.header?.column?.getToggleSortingHandler()}
                    >
                        <Text color='#2b2c33'>Order Date</Text>
                        <Image src="images/img_sort.svg" alt="Sort" h='16px' w='16px' />
                    </Flex>
                ),
                meta: { width: '204px' },
            }),
            tableColumnHelper.accessor('orderTypeRow', {
                cell: (info) => (
                    <Flex>
                        <Text>{info?.getValue?.()}</Text>
                    </Flex>
                ),
                header: (info) => (
                    <Flex gap='9px' cursor='pointer' py='16px' onClick={info?.header?.column?.getToggleSortingHandler()}>
                        <Text color='#2b2c33'>Order Type</Text>
                        <Image src="images/img_sort.svg" alt="Sort" h='16px' w='16px' />
                    </Flex>
                ),
                meta: { width: '172px' },
            }),
            tableColumnHelper.accessor('trackingIdRow', {
                cell: (info) => (
                    <Flex gap='9px'>
                        <Text>{info?.getValue?.()}</Text>
                        <Image src="images/img_cpy.svg" alt="Copy" h='16px' w='16px' />
                    </Flex>
                ),
                header: (info) => (
                    <Flex gap='9px' cursor='pointer' py='16px' onClick={info?.header?.column?.getToggleSortingHandler()}>
                        <Text color='#2b2c33'>Tracking ID</Text>
                        <Image src="images/img_sort.svg" alt="Sort" h='16px' w='16px' />
                    </Flex>
                ),
                meta: { width: '128px' },
            }),
            tableColumnHelper.accessor('orderTotalRow', {
                cell: (info) => (
                    <Flex>
                        <Text>{info?.getValue?.()}</Text>
                    </Flex>
                ),
                header: (info) => (
                    <Flex gap='11px' cursor='pointer' px={{ base: '20px', sm: '26px' }} py='16px' onClick={info?.header?.column?.getToggleSortingHandler()}>
                        <Text color='#2b2c33'>Order Total</Text>
                        <Image src="images/img_sort.svg" alt="Sort" h='16px' w='16px' />
                    </Flex>
                ),
                meta: { width: '172px' },
            }),
            tableColumnHelper.accessor('actionRow', {
                cell: (info) => (
                    <Flex ml={{ md: '30px', base: '0px' }} justifyContent='center'>
                        <SelectBox
                          indicator={<Image src="images/img_arrowdown.svg" alt="Arrow" w='16px' h='16px' />}
                          name='Order status'
                          placeholder={`Completed`}
                          options={dropDownOptions}
                          style={{
                            color: '#8a8c96',
                            pl: '10px',
                            pr: { base: '20px', sm: '34px' },
                            fontSize: '12px',
                            bg: '#5e636614',
                            w:'100%',
                            py: '4px',
                            borderRadius: '8px',
                          }} 
                        />
                    </Flex>
                ),
                header: (info) => (
                    <Flex ml={{ md: '30px', base: '0px' }} gap='9px' cursor='pointer' px={{ base: '20px', sm: '22px' }} py='16px' onClick={info?.header?.column?.getToggleSortingHandler()}>
                        <Text color='#2b2c33'>Action</Text>
                        <Image src="images/img_sort.svg" alt="Sort" h='16px' w='16px' />
                    </Flex>
                ),
                meta: { width: '146px' },
            }),
            tableColumnHelper.accessor('statusRow', {
                cell: (info) => (
                    <Flex ml={{ md: '16px', base: '0px' }}>
                        <Text
                          size='label_1_regular'
                          color='#519c66'
                          bg='#31936e28'
                          justifyContent='center'
                          display='flex'
                          alignItems='center'
                          px='10px'
                          py='4px'
                          borderRadius='8px'
                        >
                            {info?.getValue?.()}
                        </Text>
                    </Flex>
                ),
                header: (info) => (
                    <Flex ml={{ md: '16px', base: '0px' }} gap='9px' cursor='pointer' py='16px' onClick={info?.header?.column?.getToggleSortingHandler()}>
                        <Text color='#2b2c33'>Status</Text>
                        <Image src="images/img_sort.svg" alt="Sort" h='16px' w='16px' />
                    </Flex>
                ),
                meta: { width: '138px' },
            }),
        ];
    },[]);

    return (
        <>
          <Box>
            <Flex gap='20px' bg='white' flexDirection='column' p='6px' borderRadius='12px'>
                <Flex
                  mt='14px'
                  mr={{ md: '6px', base: '0px' }}
                  justifyContent='center'
                  alignItems='center'
                  flexDirection={{ md: 'row', base: 'column' }}
                >
                    <Heading size='paragraph_1_medium'>Customer Orders</Heading>
                    <Flex
                      flex={1}
                      justifyContent='flex-end'
                      alignSelf={{ md: 'auto', base: 'stretch' }}
                      flexDirection={{ base: 'column', sm: 'row' }}
                    >
                      <InputGroup w={{ base: '100%', sm: '16%' }}>
                         <InputLeftElement h='28px'>
                            <Image src="images/img_search.svg" alt="Search" w='20px' h='20px' />
                         </InputLeftElement>
                         <Input
                            placeholder={`Search`}
                            value={searchBarValue}
                            onChange={(e) => setSearchBarValue(e.target.value)}
                            color='#aaaeb1'
                            fontSize='12px'
                            gap='16px'
                            borderColor='#cfd2d4'
                            borderWidth='1px'
                            h='28px'
                            borderRadius='4px'
                         />
                         <InputRightElement h='28px'>
                           {searchBarValue?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue('')} /> : null}
                         </InputRightElement>
                      </InputGroup>
                      <Flex gap='12px' w={{ base: '100%', sm: '20%' }} justifyContent='center'>
                          <Button
                            leftIcon={<Image src="images/img_filter.svg" alt="Filter" />}
                            color='#52545c'
                            fontSize='11px'
                            gap='8px'
                            borderColor='#52545c'
                            borderWidth='1px'
                            borderStyle='solid'
                            flex={1}
                            flexDirection='row'
                            h='28px'
                            px='5px'
                            borderRadius='4px'
                          >
                            Filter
                          </Button>
                          <Button
                            leftIcon={<Image src="images/img_calendar.svg" alt="Filter" />}
                            color='#52545c'
                            fontSize='11px'
                            gap='8px'
                            borderColor='#52545c'
                            borderWidth='1px'
                            borderStyle='solid'
                            flex={1}
                            flexDirection='row'
                            h='28px'
                            px='5px'
                            borderRadius='4px'
                          >
                            Filter
                          </Button>
                          <Button
                            leftIcon={<Image src="images/img_share.svg" alt="Filter" />}
                            color='#52545c'
                            fontSize='11px'
                            gap='8px'
                            borderColor='#52545c'
                            borderWidth='1px'
                            borderStyle='solid'
                            flex={1}
                            flexDirection='row'
                            h='28px'
                            px='5px'
                            borderRadius='4px'
                          >
                            Share
                          </Button>
                          <SelectBox
                            indicator={<Image src="images/img_arrowdown.svg" alt="Arrow" w='16px' h='16px' />}
                            name='Bulk'
                            placeholder={`Bulk Action`}
                            options={dropDownOptions}
                            style={{
                              color: '#8a8c96',
                              pl: '8px',
                              pr: { base: '20px', sm: '32px' },
                              fontSize: '11px',
                              borderColor: '#52545c',
                              borderWidth: '1px',
                              borderStyle: 'solid',
                              w: '30%',
                              py: '6px',
                              borderRadius: '4px',
                            }}
                          />
                      </Flex>  
                    </Flex>
                </Flex>
                <Box mr={{ md: '6px', base: '0px' }}>
                    <ReactTable
                      headerProps={{
                        borderColor: '#e0e2e8',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderStyle: 'solid'
                      }}
                      display="block"
                      overflowX={{ md: 'visible', base: 'auto' }}
                      columns={tableColumns}
                      data={tableData}
                    />
                    <Flex
                      borderColor='#e0e2e8'
                      borderTopWidth='1px'
                      borderStyle='solid'
                      py='8px'
                      flexDirection={{ md: 'row', base: 'column' }}
                    >
                        <Flex flex={1} alignItems='center' alignSelf={{ md: 'auto', base: 'stretch' }}>
                        <SelectBox
                            indicator={<Image src="images/img_arrowdown.svg" alt="Arrow" w='16px' h='16px' />}
                            name='Items count'
                            placeholder={`10`}
                            options={dropDownOptions}
                            style={{
                              color: '#8a8c96',
                              pl: '10px',
                              pr: { base: '20px', sm: '34px' },
                              fontSize: '12px',
                              bg: '#5e636614',
                              borderWidth: '1px',
                              borderStyle: 'solid',
                              w: '8%',
                              py: '4px',
                              borderRadius: '8px',
                            }}
                          />
                          <Text color='#a5a7b1' ml='10px' alignSelf='start'>
                            Items per page
                          </Text>
                          <Text color='#666666' ml='22px'>
                            1-10 of 200 items
                          </Text>
                        </Flex>
                        <Flex gap='12px' w={{ md: '46%', base: '100%' }} justifyContent='center' alignItems='center'>
                            <Flex gap='8px' flex={1} justifyContent='flex-end' alignItems='center'>
                            <SelectBox
                                indicator={<Image src="images/img_arrowdown.svg" alt="Arrow" w='16px' h='16px' />}
                                getOptionLabel={(e) => (
                                    <>
                                      <Box display='flex' alignItems='center'>
                                        <Image src="images/img_arrowdown.svg" alt="Arrow" w='16px' h='16px' />
                                        <span>{e.label}</span>
                                      </Box>
                                    </>
                                )}
                                name='Page Dropdown'
                                placeholder={`1`}
                                options={dropDownOptions}
                                style={{
                                    color: '#8a8c96',
                                    pl: '10px',
                                    pr: { base: '20px', sm: '34px' },
                                    fontSize: '12px',
                                    bg: '#5e636614',
                                    w: '10%',
                                    py: '4px',
                                    borderRadius: '8px',
                                }}
                          />
                            <Text color='#666666'>of 44 pages</Text> 
                            </Flex>
                            <Flex gap='8px'>
                                <Image src="images/img_pre.svg" alt="Pre" h='16px' w='16px' />
                                <Image src="images/img_after.svg" alt="After" h='16px' w='16px' />
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
          </Box>
        </>
    );
}