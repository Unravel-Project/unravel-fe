interface Props {
    variant: 'primary' | 'secondary' | 'danger'
    customClass?: string
    label: string
    onClick?: (values: any) => void
    type?: 'button' | 'reset' | 'submit'
}

const BUTTON_TYPE = {
    primary: 'bg-sky-500 font-medium text-white transition duration-200 hover:bg-sky-600 active:bg-sky-700',
    secondary: 'bg-emerald-100 font-medium transition duration-200 hover:bg-emerald-200 active:bg-emerald-300',
    danger: 'bg-red-500 font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700',
};

const Button:React.FC<Props> = (props) => {
    const { variant, customClass = '', label, onClick = () => {}, type = 'button' } = props;
    const cssClass = `${BUTTON_TYPE[variant]} ${customClass} px-[16px] py-[8px] rounded`;

    return (
        <button className={`${cssClass}`} onClick={onClick} type={type}>
            {label}
        </button>
    )
}

export default Button;