interface InputProps {
    label: string
    type?: string
    setFunc: (value: string) => void
    maxlength?: number
}
function InputAtom (props: InputProps) {
    const { label, type = 'text', setFunc, maxlength } = props;
    return (
        <>
            <label>{label}</label>
            <input type={type} maxLength={maxlength} onChange={(e) => {
                const buttonVal: HTMLInputElement = e.target
                setFunc(buttonVal.value)
            }}></input>
        </>
    )
}

export default InputAtom