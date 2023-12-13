import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  let regFormInput = {
    username: username,
    description: description,
    email: email,
    password: password,
  };

  const validateRegData = (regFormInput: iRegistrationData) => {
    let result = false;
    if (!regFormInput.username || !regFormInput.email || !regFormInput.password) {
      console.log('Username, email and password fields are mandatory')
    } else if (!regFormInput.email.includes('@') || regFormInput.email.includes(' ')) {
      console.log('Invalid Email')
    } else if (regFormInput.password.length < 8 || regFormInput.password.length >16) {
      console.log('Invalid password. Passwords must be 8-16 characters.')
    } else {
      result = true;
    }
    return result;
  }

  const sendRegistrationData = async () => {
    console.log("hi");
    let customSettings = {
      method: "POST",
      body: JSON.stringify(regFormInput), //turn obj into JSON format
      headers: {
        "Content-Type": "application/json", //state what type is being sent
      },
    };
    console.log("hiya");
    const response = await fetch(
      "http://0.0.0.0:8080/register",
      customSettings
    );
    const data23 = await response.json();
    console.log(data23);
  };

  const submitRegistrationData = () => {
    if (!validateRegData(regFormInput)) {
      console.log('Failed frontend validation')
    } else {
      sendRegistrationData();
    }}

  return (
    <>
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

      <Link to={"/"}>
        <ButtonAtom value="Back"></ButtonAtom>{" "}
      </Link>
    </>
  );
}

export default RegistrationFormMolecule;
