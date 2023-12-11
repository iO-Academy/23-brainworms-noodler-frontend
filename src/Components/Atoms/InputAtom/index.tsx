interface InputProps {
    label: string
    type?: string
    setFunc: (value: string) => void
}
function InputAtom (props: InputProps) {
    const { label, type = 'text', setFunc } = props;

    return (
        <>
            <label>{label}</label>
            <input type={type} onChange={(e) => {
                let buttonVal: HTMLInputElement = e.target
                setFunc(buttonVal.value)
            }}></input>
        </>
    )
}

export default InputAtom