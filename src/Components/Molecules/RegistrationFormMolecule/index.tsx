import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";

function RegistrationFormMolecule () {
    return (
        <>
            <InputAtom label='Email: '></InputAtom>
            <InputAtom label='Username: '></InputAtom>
            <InputAtom label='Password: '></InputAtom>
            <InputAtom label='Description: '></InputAtom>
            <ButtonAtom value='Back'></ButtonAtom>
            <ButtonAtom value='Sign Up'></ButtonAtom>
        </>
    )
}

export default RegistrationFormMolecule