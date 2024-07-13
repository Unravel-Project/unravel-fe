'use client';

import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table';
import { useMemo } from "react";

interface Props {
    columns: ColumnDef<any>[]
    data: any[]
    border?: boolean
}

const Table: React.FC<Props> = (props) => {
    const {
        columns,
        data,
        border,
    } = props;

    const currentColumns = useMemo(() => columns, [columns]);

    const table = useReactTable({
        data,
        columns: currentColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    const borderTable = border ? 'border border-[#E0E0E0]' : ''
    const borderStyleHeader = border ? 'border-b border-r border-[#E0E0E0]' : ''
    const borderStyleData = border ? 'border-b border-[#E0E0E0]' : ''

    return (
        <div className="flex flex-col flex-grow gap-[18px]">
            <div>
                <table className={`w-full ${borderTable} ${data.length > 0 ? 'justify-between' : ''}`}>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup, index) => (
                            <tr key={index}>
                                {headerGroup.headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`${borderStyleHeader} text-start bg-backgroundLight py-4 px-3`}
                                        style={
                                            { width: header.getSize() }
                                        }
                                    >
                                        <div
                                            className={
                                                `${header.column.getCanSort() ? 'cursor-pointer select-none' : ''} flex justify-between`
                                            }
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className={`${borderStyleData} pt-[14px] pb-[18px] px-3`}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex-grow">
                    {data.length <= 0 && (
                        <div className={`${borderTable} flex flex-col justify-center items-center p-10 gap-2`}>
                            <p className="text-bold">Data Tidak Ditemukan</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Table