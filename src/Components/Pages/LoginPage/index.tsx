import LoginTemplate from "../../Templates/LoginTemplate";
import LogoAtom from "../../Atoms/LogoAtom";

function LoginPage() {
    return (
        <>
            <LogoAtom width={400} image='public/assets/Noodler-logo.png' />
            <LoginTemplate />
        </>
    )
}

export default LoginPage;