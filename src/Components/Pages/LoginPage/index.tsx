import LoginTemplate from "../../Templates/LoginTemplate";
import LogoAtom from "../../Atoms/LogoAtom";

function LoginPage() {
    return (
        <div className="flex flex-col items-center">
            <LogoAtom width={400} image='public/assets/Noodler-logo.png' />
            <LoginTemplate />
        </div>
    )
}

export default LoginPage;