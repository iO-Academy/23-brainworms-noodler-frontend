import LoginFormMolecule from "../../Molecules/LoginFormMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";

function LoginTemplate()
{
    return (
        <>
            <LoginFormMolecule />
            <ButtonAtom value='Sign up'/>
        </>
    )
}

export default LoginTemplate;