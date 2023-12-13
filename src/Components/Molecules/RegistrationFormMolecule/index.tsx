import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DisplayAtom from "../../Atoms/DisplayAtom";

function RegistrationFormMolecule() {
  interface iFormData {
    email: string;
    password: string;
    username: string;
    description: string;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const formInput: iFormData = {
    username: username,
    description: description,
    email: email,
    password: password
  };

  const sendData = async () => {
    const customSettings = {
      method: "POST",
      body: JSON.stringify(formInput), //turn obj into JSON format
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

  return (
    <>
      <InputAtom type="email" label="Email: " setFunc={setEmail}></InputAtom>
      <InputAtom label="Username: " setFunc={setUserName}></InputAtom>
      <InputAtom
        type="password"
        label="Password: "
        setFunc={setPassword}></InputAtom>
      <InputAtom
        label="Description: "
        maxlength={500}
        setFunc={setDescription}></InputAtom>
      <ButtonAtom value="Sign Up" onClick={sendData}></ButtonAtom>
      <DisplayAtom text={errorMessage} />
      <Link to={"/"}>
        <ButtonAtom value="Back"></ButtonAtom>{" "}
      </Link>
    </>
  );
}

export default RegistrationFormMolecule;
