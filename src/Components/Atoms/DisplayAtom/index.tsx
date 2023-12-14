interface DisplayProps {
    text: string,
    className?: string
}
function DisplayAtom (props: DisplayProps) {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
}

export default DisplayAtom