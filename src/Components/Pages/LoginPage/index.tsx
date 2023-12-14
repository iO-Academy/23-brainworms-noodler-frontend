import LoginTemplate from "../../Templates/LoginTemplate";
import LogoAtom from "../../Atoms/LogoAtom";

function LoginPage() {
    return (
        <>
            <LogoAtom image='public/assets/Noodler-logo.png' />
            <LoginTemplate />
        </>
    )
}

export default LoginPage;