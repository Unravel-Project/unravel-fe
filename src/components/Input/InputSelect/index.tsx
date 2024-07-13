interface Props {
    label?: string
    onChange: (value: number | string) => void
    disabled?: boolean
    options: Array<{ value: number | string, label: string }>
    id?: string
    required?: boolean
    value?: string | number | undefined
}

const InputSelect: React.FC<Props> = (props) => {
    const {
        id,
        label: labelName,
        onChange,
        options,
        required,
        value
    } = props;

    return (
        <div className="flex flex-col gap-1">
            {labelName && (
                <label className="text-sm">
                    {labelName}
                    {required && <span className="text-red-500">{' *'}</span>}
                </label>
            )}

            <select
                id={id}
                name={id}
                className="border border-[#052A49] p-[6px]"
                onChange={e => onChange(e.target.value)}
                value={value}
            >
                <option key="" value="">{`select ${labelName?.toLowerCase() ?? ''}`}</option>
                {options.map(x => <option key={x.value} value={x.value}>{x.label}</option>)}
            </select>
        </div>
    )
}

export default InputSelect;