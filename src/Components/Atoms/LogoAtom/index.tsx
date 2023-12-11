interface LogoProps {
    image: string
}
function logoAtom (props: LogoProps) {
    return (
        <>
            <img src={props.image}></img>
        </>
    )
}

export default logoAtom