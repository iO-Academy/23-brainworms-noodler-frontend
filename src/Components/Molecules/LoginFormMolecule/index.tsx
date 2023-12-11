import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";

function LoginFormMolecule()
{
    return (
        <>
            <form>
            <InputAtom label='Email:' />
            <InputAtom label='Password:' />
            <ButtonAtom value='Login' type='submit'/>
            </form>
        </>
    )
}

export default LoginFormMolecule;