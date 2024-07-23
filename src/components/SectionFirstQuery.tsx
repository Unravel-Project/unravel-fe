import InputSearch from "@/components/Input/InputSearch";
import InputSelect from "@/components/Input/InputSelect";
import Table from "@/components/Table";
import { columns } from "../configs/table";
import { useContext } from "react";
import { MainContext } from "../contexts/Provider";
import { optionType } from "../configs/option";
import { TFilterSelect } from "../app/model.app";

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
                <InputSearch label="" onChange={(e) => handleChangeFilter({ search: e })} />
                <InputSelect options={optionType} onChange={(e) => handleChangeFilter({ select: e as TFilterSelect })} />
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