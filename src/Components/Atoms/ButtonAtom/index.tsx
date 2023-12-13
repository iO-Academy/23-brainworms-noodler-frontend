interface ButtonProps {
    value: string
    type?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
}

function ButtonAtom(props: ButtonProps) {
    return (
        <>
            <button  className="ml-2 mt-2 border border-gray-300 p-2 rounded-md" type={props.type} onClick={props.onClick}>{props.value}</button>
        </>
    )
}

export default ButtonAtom;
