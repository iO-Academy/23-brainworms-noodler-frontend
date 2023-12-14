import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import DisplayAtom from "../../Atoms/DisplayAtom";

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
        console.log(responseData)

        if (responseData.success) {
            navigate("/user", {state: {responseData}})
        } else {
            setErrorMessage(responseData.msg)
        }
    }

    return (
        <div className='flex flex-col gap-4 align items-center'>
            <InputAtom className="text-xl p-4" label="Email:" setFunc={setEmail}/>
            <InputAtom className="text-xl p-4" label="Password:" type="password" setFunc={setPassword}/>
            <ButtonAtom value="Login" onClick={sendData}/>
            <DisplayAtom text={errorMessage}/>
        </div>
    );
}

export default LoginFormMolecule;
