import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginFormMolecule() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const formSubmit = (e: Event): void => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }

        navigate("/user", {state: {email}})
        return console.log(data)
    }
    return (
        <>
            <form>
                <InputAtom label='Email:' setFunc={setEmail}/>
                <InputAtom label='Password:' type='password' setFunc={setPassword}/>
                <ButtonAtom value='Login' type='submit' onClick={formSubmit}/>
            </form>
        </>
    )
}

export default LoginFormMolecule;