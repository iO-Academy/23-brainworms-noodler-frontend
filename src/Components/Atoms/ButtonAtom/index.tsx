interface ButtonProps {
    value: string,
    type?: 'submit' | 'reset' | 'button' | undefined
}

function ButtonAtom(props: ButtonProps) {
    return (
        <>
            <button type={props.type}>{props.value}</button>
        </>
    )
}

export default ButtonAtom;