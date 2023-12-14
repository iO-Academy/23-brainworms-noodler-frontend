interface DisplayProps {
    text: string
}
function DisplayAtom (props: DisplayProps) {
    return (
        <div>
            {props.text}
        </div>
    )
}

export default DisplayAtom