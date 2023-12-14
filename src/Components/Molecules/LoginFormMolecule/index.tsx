import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import DisplayAtom from "../../Atoms/DisplayAtom";
import LogoAtom from "../../Atoms/LogoAtom";

function LoginFormMolecule() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    const formInput = {
        userEmail: email,
        password: password,
    };

    const sendData = async () => {
        const customSettings = {
            method: "POST",
            body: JSON.stringify(formInput), //turn obj into JSON format
            headers: {
                "Content-Type": "application/json", //state what type is being sent
            },
        };
        const response = await fetch("http://0.0.0.0:8080/login", customSettings);
        const responseData = await response.json();

        if (responseData.success) {
            navigate("/user", {state: {responseData}})
        } else {
            setErrorMessage(responseData.msg)
        }
    }
    return (
        <div className='flex flex-col gap-4 items-center'>
            <div className="justify-end">
                <InputAtom className="text-xl" label="Email:" setFunc={setEmail}/>
                <InputAtom className="text-xl" label="Password:" type="password" setFunc={setPassword}/>
            </div>
            <ButtonAtom value="Login" onClick={sendData}/>
            <DisplayAtom text={errorMessage}/>
        </div>
    );
}

export default LoginFormMolecule;
