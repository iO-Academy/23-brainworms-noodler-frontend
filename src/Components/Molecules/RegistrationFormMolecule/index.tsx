import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormOutcomeAtom from "../../Atoms/FormOutcomeAtom";
import DisplayAtom from "../../Atoms/DisplayAtom";


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
  const [formOutcomeColors , setFormOutcomeColors] = useState("hidden")
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  
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
      setErrorMessage(responseData.msg)
    }
  };

  const submitRegistrationData = () => {
    if (!validateRegData(regFormInput)) {
      console.log('Failed frontend validation')
    } else {
      sendRegistrationData();
    }}

  return (
    <div className='flex flex-col gap-4'>
      <InputAtom type="email" label="* Email: " setFunc={setEmail}></InputAtom>
      <InputAtom label="* Username: " setFunc={setUserName}></InputAtom>
      <InputAtom
        type="password"
        label="* Password: "
        setFunc={setPassword}></InputAtom>
      <InputAtom
        label="Description: "
        maxlength={500}
        setFunc={setDescription}></InputAtom>
      <ButtonAtom value="Sign Up" onClick={submitRegistrationData}></ButtonAtom>
      <FormOutcomeAtom
          message={formOutcomeMessage}
          className={'text-sm border-2 px-1 py-3 place-self-center w-2/3 ' + formOutcomeColors}
      />
      <DisplayAtom text={errorMessage} />
      <Link to={"/"}>
        <ButtonAtom value="Back"></ButtonAtom>{" "}
      </Link>
    </div>
  );
}

export default RegistrationFormMolecule;
