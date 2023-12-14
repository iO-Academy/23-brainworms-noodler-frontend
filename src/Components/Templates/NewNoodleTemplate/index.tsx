import ButtonAtom from "../../Atoms/ButtonAtom";
import InputAtom from "../../Atoms/InputAtom";
import { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";

interface iNewNoodleProps {
    setNewNoodleToggle: (value: boolean) => void,
    displayNewNoodleToggle: boolean
    userId: number
}

function NewNoodleTemplate (props: iNewNoodleProps) {
    const { userId, setNewNoodleToggle, displayNewNoodleToggle} = props
    const [newNoodle, setNewNoodle] = useState("")
    const newNoodleInfo = {id: userId, noodle: newNoodle}


    //on Serve click - post newNoodle to db and refresh profile page
    const sendData = async () => {
        console.log(newNoodleInfo)
        const customSettings = {
            method: "POST",
            body: JSON.stringify(newNoodleInfo), //turn obj into JSON format
            headers: {
                "Content-Type": "application/json", //state what type is being sent
            },
        };
        const response = await fetch(
            "http://0.0.0.0:8080/noodles",
            customSettings
        );
        const responseData = await response.json();
        if (responseData.success) {
            console.log('successfully added')
        } else {
            console.log(responseData.msg)
        }
    };


    //hide div if DisplayNewNoodleToggle is false - using inline styles currently - change to tailwind
    const display = displayNewNoodleToggle ? {display:"block"} : {display:"none"}
    return (
        <div style={display}>
            <InputAtom label="Noodle text" maxlength={255} setFunc={setNewNoodle}/>
            <ButtonAtom value="Flush" onClick={() => setNewNoodleToggle(false)}/>
            <ButtonAtom value="Serve" onClick={sendData}/>
        </div>
    )
}

export default NewNoodleTemplate