import ButtonAtom from "../../Atoms/ButtonAtom";
import InputAtom from "../../Atoms/InputAtom";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextAreaAtom from "../../Atoms/TextAreaAtom";

interface iNewNoodleProps {
  setNewNoodleToggle: (value: boolean) => void;
  displayNewNoodleToggle: boolean;
  userId: number;
}

function NewNoodleTemplate(props: iNewNoodleProps) {
  const { userId, setNewNoodleToggle, displayNewNoodleToggle } = props;
  const [newNoodle, setNewNoodle] = useState("");
  const newNoodleInfo = { id: userId, noodle: newNoodle };
  const [value, setValue] = useState("");

  //on Serve click - post newNoodle to db and refresh profile page
  const sendData = async () => {
    const customSettings = {
      method: "POST",
      body: JSON.stringify(newNoodleInfo), //turn obj into JSON format
      headers: {
        "Content-Type": "application/json", //state what type is being sent
      },
    };
    const response = await fetch("http://0.0.0.0:8080/noodles", customSettings);
    const responseData = await response.json();
    if (responseData.success) {
      setValue("");
    } else {
      console.log(responseData.msg);
    }
  };

  //hide div if DisplayNewNoodleToggle is false - using inline styles currently - change to tailwind
  const display = displayNewNoodleToggle ? "block" : "hidden";
  return (
    <div className={"flex flex-col items-center " + display}>
      <TextAreaAtom
        label="Noodle text"
        maxlength={255}
        setFunc={setNewNoodle}
        value={value}
        setValue={setValue}
      />
      <div className="flex gap-2">
        <ButtonAtom
          value="Flush"
          onClick={() => {
            setNewNoodleToggle(false);
            setValue("");
          }}
        />
        <ButtonAtom value="Serve" onClick={sendData} />
      </div>
    </div>
  );
}

export default NewNoodleTemplate;
