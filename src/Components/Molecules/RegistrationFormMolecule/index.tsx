import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {Link} from "react-router-dom";
import {useState} from "react";

function RegistrationFormMolecule() {
    interface iFormData {
        email: string,
        password: string,
        username: string,
        description: string
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [description, setDescription] = useState('')

    const validateData = (formData: iFormData): boolean => {
        //to be coded up
        let result: boolean = false
        if (formData.email && formData.password && formData.username) {
            if (formData.email.includes('@') && !formData.email.includes(' ')) {
                result = true;
            }
        }
        return result
    }

    const newUserSubmit = (e: MouseEvent): void => {
        e.preventDefault()

        const formData: iFormData = {
            email: email,
            password: password,
            username: username,
            description: description
        }

        if (validateData(formData)) {
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
            return console.log(formData)
        } else {
            console.log('invalid data')
        }
    }

    return (
        <>
            <form>
                <InputAtom type='email' label='Email: ' setFunc={setEmail}></InputAtom>
                <InputAtom label='Username: ' setFunc={setUserName}></InputAtom>
                <InputAtom type='password' label='Password: ' setFunc={setPassword}></InputAtom>
                <InputAtom label='Description: ' maxlength={500}
                           setFunc={setDescription}></InputAtom>
                <ButtonAtom value='Sign Up' onClick={newUserSubmit} type='submit'></ButtonAtom>
            </form>
            <Link to={'/'}><ButtonAtom value='Back'></ButtonAtom> </Link>
        </>
    )
}

export default RegistrationFormMolecule