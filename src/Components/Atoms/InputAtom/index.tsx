interface inputProps {
    label: string
}
function InputAtom (props: inputProps) {
    return (
        <>
            <label>{props.label}</label>
            <input type='text'></input>
        </>
    )
}

export default InputAtom