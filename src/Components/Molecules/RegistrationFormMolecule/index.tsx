import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {Link} from "react-router-dom";

function RegistrationFormMolecule () {
    return (
        <>
            <InputAtom label='Email: '></InputAtom>
            <InputAtom label='Username: '></InputAtom>
            <InputAtom label='Password: '></InputAtom>
            <InputAtom label='Description: '></InputAtom>
           <Link to={'/'} ><ButtonAtom value='Back'></ButtonAtom> </Link>
            <ButtonAtom value='Sign Up'></ButtonAtom>
        </>
    )
}

export default RegistrationFormMolecule