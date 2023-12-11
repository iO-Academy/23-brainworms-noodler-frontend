import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {useState} from "react";

function LoginFormMolecule() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formSubmit = (e): void => {
        e.preventDefault()
        let data = {
            email: email,
            password: password
        }

        // fetch('./backendAPI', {
        //     credentials: 'same-origin',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     method: 'get',
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(responseJson => {
        //         if (responseJson.success) {
        //         } else {
        //             console.log(responseJson.message);
        //             console.log('error');
        //         }
        //     })
        return console.log(data)

    }


    return (
        <>
            <p onClick={formSubmit}>click</p>
            <form>
                <InputAtom label='Email:' setFunc={setEmail}/>
                <InputAtom label='Password:' type='password' setFunc={setPassword}/>
                <ButtonAtom value='Login' type='submit' onClick={formSubmit}/>
            </form>
        </>
    )
}

export default LoginFormMolecule;