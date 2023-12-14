interface LogoProps {
    image: string
    width?: number
    className?: string
}

function LogoAtom(props: LogoProps) {
    return (
        <div className={props.className}>
            <img src={props.image} alt="logo" width={props.width}/>
        </div>
    );
}

export default LogoAtom;
