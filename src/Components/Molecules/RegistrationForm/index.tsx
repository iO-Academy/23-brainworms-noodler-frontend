import LogoAtom from "../../Atoms/LogoAtom";
import InputAtom from "../../Atoms/InputAtom";
import Button from "../../Atoms/Button";

function RegistrationForm () {
    return (
        <>
            <LogoAtom image='https://placedog.net/200/200' />
            <InputAtom label='Email: '></InputAtom>
            <InputAtom label='Username: '></InputAtom>
            <InputAtom label='Password: '></InputAtom>
            <InputAtom label='Description: '></InputAtom>
            <Button value='Back'></Button>
            <Button value='Register'></Button>
        </>
    )
}

export default RegistrationForm