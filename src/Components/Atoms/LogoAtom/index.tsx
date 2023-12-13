//
// import '.public/assets/Noodler-logo.png'

interface LogoProps {
    image: string;
}

function LogoAtom(props: LogoProps) {
    return (
        <div className="flex justify-center items-center">
            <img src={props.image} alt="logo" />
        </div>
    );
}

export default LogoAtom;