interface InputProps {
    label: string
}
function InputAtom (props: InputProps) {
    return (
        <>
            <label>{props.label}</label>
            <input type='text'></input>
        </>
    )
}

export default InputAtom