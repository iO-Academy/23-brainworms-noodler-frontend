import LoginTemplate from "../../Templates/LoginTemplate";
import LogoAtom from "../../Atoms/LogoAtom";

function LoginPage()
{
    return (
        <>
            <LogoAtom image='https://placedog.net/200/200' />
            <LoginTemplate />
        </>
    )
}

export default LoginPage;