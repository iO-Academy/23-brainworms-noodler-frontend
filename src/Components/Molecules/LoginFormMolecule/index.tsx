import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function LoginFormMolecule() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  interface iLoginFormInput {
    userEmail: string
    password: string
  }

  let formInput = {
    userEmail: email,
    password: password,
  };

  const validateLoginData = (formInput: iLoginFormInput) => {
    let result = false;
    if (!formInput.userEmail.includes('@') || formInput.userEmail.includes(' ')) {
      console.log('Invalid Email')
    } else if (formInput.password.length < 8) {
      console.log('Invalid password')
    } else {
      result = true;
    }
    return result;
  }

  const sendData = async () => {
    let customSettings = {
      method: "POST",
      body: JSON.stringify(formInput), //turn obj into JSON format
      headers: {
        "Content-Type": "application/json", //state what type is being sent
      },
    };
    const response = await fetch("http://0.0.0.0:8080/login", customSettings);
    const responseData = await response.json();

    if (responseData) {
      navigate("/user", {state: {responseData}})
    }
  }

  const submitData = () => {
  if (!validateLoginData(formInput)) {
    console.log('Failed frontend validation')
  } else {
    sendData();
  }}

  return (
    <>
      <InputAtom label="Email:" setFunc={setEmail} />
      <InputAtom label="Password:" type="password" setFunc={setPassword} />
      <ButtonAtom value="Login" onClick={submitData} />
    </>
  );
}

export default LoginFormMolecule;
