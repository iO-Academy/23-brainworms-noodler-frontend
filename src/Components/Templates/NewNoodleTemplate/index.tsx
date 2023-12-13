import ButtonAtom from "../../Atoms/ButtonAtom";
import InputAtom from "../../Atoms/InputAtom";
import {useState} from "react";

interface iNewNoodleProps {
    setNewNoodleToggle: (value: boolean) => void,
    displayNewNoodleToggle: boolean
}

function NewNoodleTemplate (props: iNewNoodleProps) {
    const {setNewNoodleToggle, displayNewNoodleToggle} = props
    const [newNoodle, setNewNoodle] = useState("")

    //on Serve click - post newNoodle to db and refresh profile page

    //on Scorch click - close new noodle template area

    //hide div if DisplayNewNoodleToggle is false - using inline styles currently - change to tailwind
    const display = displayNewNoodleToggle ? {display:"block"} : {display:"none"}
    return (
        <div style={display}>
            <InputAtom label="Noodle text" maxlength={255} setFunc={setNewNoodle}/>
            <ButtonAtom value="Scorch" onClick={() => setNewNoodleToggle(false)}/>
            <ButtonAtom value="Serve" />
        </div>
    )
}

export default NewNoodleTemplate