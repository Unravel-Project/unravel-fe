import { useContext } from "react";
import { MainContext } from "../context/Provider";
import Table from "@/components/Table";
import { columns } from "../config/table";
import { Button } from "@/components/ui/button";

const SectionMutation: React.FC = () => {
    const {
        dataMutation,
        handleGetData,
        isPending
    } = useContext(MainContext)

    return (
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl">Mutation</h2>

            <div className="flex gap-3 justify-end items-center w-full px-4">
                <Button
                    variant="primary"
                    onClick={handleGetData}
                >
                    Get Data
                </Button>
            </div>

            <div className="w-full px-4">
                <Table
                    data={dataMutation}
                    columns={columns}
                    border
                    loading={isPending}
                />
            </div>
        </div>
    )
}

export default SectionMutation;