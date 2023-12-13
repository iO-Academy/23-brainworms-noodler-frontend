interface InputProps {
    label: string
    className?: string
    type?: string
    setFunc: (value: string) => void
    maxlength?: number
}
function InputAtom (props: InputProps) {
    const { label,className='', type = 'text', setFunc, maxlength } = props;
    return (

        <div className='flex gap-x-4 place-self-center'>
            <label>{label}</label>
            <input className='border border-gray-300 p-2 rounded-md' type={type} maxLength={maxlength} onChange={(e) => {
                const buttonVal: HTMLInputElement = e.target
                setFunc(buttonVal.value)
            }}></input>
        </div>
    )
}

export default InputAtom