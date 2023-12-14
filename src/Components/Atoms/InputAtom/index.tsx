interface InputProps {
    label: string
    type?: string
    setFunc: (value: string) => void
    maxlength?: number
    className? : string
}
function InputAtom (props: InputProps) {
    const { label, type = 'text', setFunc, maxlength, className } = props;
    return (
        <div className='flex flex-col gap-x-4 p-2 items-center justify-end'>
            <label className={className}>{label}</label>
            <input className='border border-gray-300 p-2 rounded-md w-48 ' type={type} maxLength={maxlength} onChange={(e) => {
                const buttonVal: HTMLInputElement = e.target
                setFunc(buttonVal.value)
            }}></input>
        </div>
    )
}

export default InputAtom