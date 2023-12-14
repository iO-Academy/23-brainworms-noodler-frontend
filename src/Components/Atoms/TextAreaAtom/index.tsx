interface iTextAreaProps {
    label: string
    setFunc: (value: string) => void
    maxlength?: number
}

function TextAreaAtom (props: iTextAreaProps) {
    const { label, setFunc, maxlength } = props;
    return (

        <div className='flex flex-col gap-x-4 place-self-center p-2 items-center justify-center'>
            <label>{label}</label>
            <textarea className='border border-gray-300 p-2 rounded-md' rows={3} cols={28} maxLength={maxlength} onChange={(e) => {
                const buttonVal: HTMLTextAreaElement = e.target
                setFunc(buttonVal.value)
            }}></textarea>
        </div>
    )
}

export default TextAreaAtom