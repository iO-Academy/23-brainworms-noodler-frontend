interface DisplayProps {
    text: string
}
function DisplayAtom (props: DisplayProps) {
    return (
        <>
            <h2>{props.text}</h2>
        </>
    )
}

export default DisplayAtom