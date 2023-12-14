interface ButtonProps {
    value: string
    type?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
}

function ButtonAtom(props: ButtonProps) {
    return (
        <>
            <button  className="border border-gray-300 rounded-md w-28" type={props.type} onClick={props.onClick}>{props.value}</button>
        </>
    )
}

export default ButtonAtom;
