import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";

const ReactTable = ({
    columns,
    data = [],
    headerProps = {},
    bodyProps = {},
    rowDataProps = {},
    variant = '',
    size = '',
    ...restConfig
}) => {
    const tableConfig = {
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        ...restConfig,
    };

    const table = useReactTable(tableConfig);

    return (
        <Table variant={variant} size={size}>
            <Thead {...headerProps}>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Th {...header.column.columnDef?.meta} key={header.id}>
                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...bodyProps}>
                {table.getRowModel().rows.map((row) => (
                    <Tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <Td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export { ReactTable };