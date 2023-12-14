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

// object-cover absolute top-24 left-24 h-60 w-60 src=public/assets/Noodler-logo.png