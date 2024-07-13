import { FiSearch } from "react-icons/fi";

interface Props {
    label?: string
    onChange?: (value: string) => void
    placeholder?: string
}

const InputSearch: React.FC<Props> = (props) => {
    const { label: labelName, onChange, placeholder = 'Search...' } = props;

    return (
        <div className="flex flex-col gap-1">
            {labelName && (
                <label className="text-sm">
                    {labelName}
                </label>
            )}

            <div className="flex h-[40px] border border-[#E0E0E0] rounded px-[16px] w-full items-center bg-lightPrimary">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="block h-full w-full bg-lightPrimary text-sm font-medium outline-none placeholder:!text-gray-400 sm:w-fit"
                    onChange={e => onChange ? onChange(e.target.value) : undefined}
                />

                <p className="pl-3 text-xl">
                    <FiSearch className="h-4 w-4" />
                </p>
            </div>
        </div>
    )
}

export default InputSearch;