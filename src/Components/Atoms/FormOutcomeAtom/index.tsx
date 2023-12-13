interface iFormOutcomeProps {
    message: string
    className: string
}

function FormOutcomeAtom(props: iFormOutcomeProps) {
    const {message, className} = props;
    return (
        <div className={className}>
            {message}
        </div>
    )
}

export default FormOutcomeAtom;