import { FiSearch } from "react-icons/fi";

import Table from "@/components/Table";
import { columns } from "../config/table";
import { useContext } from "react";
import { MainContext } from "../context/Provider";
import { optionType } from "../config/option";
import { TFilterSelect } from "../../../model.app";

const SectionFirstQuery: React.FC = () => {
    const {
        data,
        handleChangeFilter,
        isFetching
    } = useContext(MainContext)

    return (
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl">First Query</h2>

            <div className="flex gap-3 items-center w-full px-4">
                <div className="flex flex-col gap-1">
                    <div className="flex h-[40px] border border-[#E0E0E0] rounded px-[16px] w-full items-center bg-lightPrimary">
                        <input
                            type="text"
                            className="block h-full w-full bg-lightPrimary text-sm font-medium outline-none placeholder:!text-gray-400 sm:w-fit"
                            onChange={e => handleChangeFilter({ search: e.target.value })}
                        />

                        <p className="pl-3 text-xl">
                            <FiSearch className="h-4 w-4" />
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <select
                        className="border border-[#052A49] p-[6px]"
                        onChange={(e) => handleChangeFilter({ select: e.target.value as TFilterSelect })}
                    >
                        <option key="" value="">select</option>
                        {optionType.map(x => <option key={x.value} value={x.value}>{x.label}</option>)}
                    </select>
                </div>
            </div>

            <div className="w-full px-4">
                <Table
                    data={data}
                    columns={columns}
                    border
                    loading={isFetching}
                />
            </div>
        </div>
    )
}

export default SectionFirstQuery;