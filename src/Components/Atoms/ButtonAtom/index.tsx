interface ButtonProps {
    value: string
    type?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
    width?: string
}

function ButtonAtom(props: ButtonProps) {
    const { value, type , onClick, width="28"} = props
    return (
        <>
            <button  className={"border border-gray-300 rounded-md w-" + width}  type={type} onClick={onClick}>{value}</button>
        </>
    )
}

export default ButtonAtom;
