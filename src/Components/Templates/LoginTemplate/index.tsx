import LoginFormMolecule from "../../Molecules/LoginFormMolecule";
import { Link} from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom";

function LoginTemplate() {
    return (
        <>
            <LoginFormMolecule/>
            <Link to={'Register'}><ButtonAtom value='Sign up'/></Link>
        </>
    )
}

export default LoginTemplate;