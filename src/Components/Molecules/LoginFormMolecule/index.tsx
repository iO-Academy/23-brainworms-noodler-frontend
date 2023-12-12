import InputAtom from "../../Atoms/InputAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { useState } from "react";

function LoginFormMolecule() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let formInput = {
    userEmail: email,
    password: password,
  };

  const sendData = async () => {
    let customSettings = {
      method: "POST",
      body: JSON.stringify(formInput), //turn obj into JSON format
      headers: {
        "Content-Type": "application/json", //state what type is being sent
      },
    };
    const response = await fetch("http://0.0.0.0:8080/login", customSettings);
    const data23 = await response.json();
    console.log(data23);
  };

  return (
    <>
      <InputAtom label="Email:" setFunc={setEmail} />
      <InputAtom label="Password:" type="password" setFunc={setPassword} />
      <ButtonAtom value="Login" onClick={sendData} />
    </>
  );
}

export default LoginFormMolecule;
