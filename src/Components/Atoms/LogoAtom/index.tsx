interface LogoProps {
    image: string
    width?: number
}

function LogoAtom(props: LogoProps) {
    return (
        <div className="flex justify-center items-center">
            <img src={props.image} alt="logo" width={props.width}/>
        </div>
    );
}

export default LogoAtom;