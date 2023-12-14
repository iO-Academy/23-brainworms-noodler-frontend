import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import LogoAtom from "../../Atoms/LogoAtom";
import FormOutcomeAtom from "../../Atoms/FormOutcomeAtom";
import TextAreaAtom from "../../Atoms/TextAreaAtom";


function RegistrationFormMolecule() {
    interface iRegistrationData {
        email: string;
        password: string;
        username: string;
        description: string;
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [formOutcomeMessage, setFormOutcomeMessage] = useState('');
    const [formOutcomeColors, setFormOutcomeColors] = useState("hidden")
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=?!]).*$/;
    const navigate = useNavigate();

    let regFormInput = {
        username: username,
        description: description,
        email: email,
        password: password
    };


    const validateRegData = (regFormInput: iRegistrationData) => {
        let result = false;
        setFormOutcomeColors('block bg-red-100');
        if (!regFormInput.username || !regFormInput.email || !regFormInput.password) {
            setFormOutcomeMessage('Username, email and password fields are mandatory');
        } else if (!regFormInput.email.includes('@') || regFormInput.email.includes(' ')) {
            setFormOutcomeMessage('Invalid Email');
        } else if (regFormInput.password.length < 8 || !passwordRegex.test(regFormInput.password)) {
            setFormOutcomeMessage('Invalid password. Passwords must be at least 8 characters, contain an upper and lower case letter, at least one number and special character.');
        } else if (regFormInput.description.length > 500) {
            setFormOutcomeMessage('Description cannot be more than 500 characters.');
        } else {
            result = true;
            setFormOutcomeMessage('Form successfully submitted');
            setFormOutcomeColors('block bg-green-100')
        }
        return result;
    }

    const sendRegistrationData = async () => {
        let customSettings = {
            method: "POST",
            body: JSON.stringify(regFormInput), //turn obj into JSON format
            headers: {
                "Content-Type": "application/json", //state what type is being sent
            },
        };
        const response = await fetch(
            "http://0.0.0.0:8080/register",
            customSettings
        );
        const responseData = await response.json();
        if (responseData.success) {
            navigate("/user", {state: {responseData}})
        } else {
            setFormOutcomeColors('block bg-red-200')
            setFormOutcomeMessage(responseData.msg)
        }
    };

    const submitRegistrationData = () => {
        if (!validateRegData(regFormInput)) {
            console.log('Failed frontend validation')
        } else {
            sendRegistrationData();
        }
    }

    return (
        <div className='flex flex-col gap-4 items-center'>
            <LogoAtom image='public/assets/Noodler-logo.png' width={400}/>
            <div className='flex flex-col gap-4'>
                <InputAtom type="email" label="* Email: " setFunc={setEmail}></InputAtom>
                <InputAtom label="* Username: " setFunc={setUserName}></InputAtom>
                <InputAtom
                    type="password"
                    label="* Password: "
                    setFunc={setPassword}></InputAtom>
            </div>
            <TextAreaAtom label="Description: " setFunc={setDescription} maxlength={500}/>
            <ButtonAtom value="Sign Up" onClick={submitRegistrationData}></ButtonAtom>
            <FormOutcomeAtom
                message={formOutcomeMessage}
                className={'text-sm border-2 px-1 py-3 place-self-center w-2/3 ' + formOutcomeColors}
            />
            <Link to={"/"}>
                <ButtonAtom value="Cancel"></ButtonAtom>
            </Link>
        </div>
    );
}

export default RegistrationFormMolecule;
