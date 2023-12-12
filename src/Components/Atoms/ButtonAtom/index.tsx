interface ButtonProps {
    value: string
    type?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
}

function ButtonAtom(props: ButtonProps) {
    return (
        <>
            <button type={props.type} onClick={props.onClick}>{props.value}</button>
        </>
    )
}

export default ButtonAtom;