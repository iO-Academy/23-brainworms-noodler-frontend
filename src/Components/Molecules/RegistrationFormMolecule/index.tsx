import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  let formInput = {
    username: username,
    description: description,
    email: email,
    password: password,
  };

  const sendData = async () => {
    console.log("hi");
    let customSettings = {
      method: "POST",
      body: JSON.stringify(formInput), //turn obj into JSON format
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

      <Link to={"/"}>
        <ButtonAtom value="Back"></ButtonAtom>{" "}
      </Link>
    </>
  );
}

export default RegistrationFormMolecule;
