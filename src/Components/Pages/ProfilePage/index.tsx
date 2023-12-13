import HeaderTemplate from "../../Templates/HeaderTemplate";
import NoodleBowlTemplate from "../../Templates/NoodleBowlTemplate";
import NewNoodleTemplate from "../../Templates/NewNoodleTemplate";
import {useState} from "react";

function ProfilePage () {
    const [DisplayNewNoodleToggle, setDisplayNewNoodleToggle] = useState(false)
    return (
        <>
            <HeaderTemplate />
            <NoodleBowlTemplate setNewNoodleToggle ={setDisplayNewNoodleToggle} displayNewNoodleToggle = {DisplayNewNoodleToggle}/>
            <NewNoodleTemplate setNewNoodleToggle ={setDisplayNewNoodleToggle} displayNewNoodleToggle = {DisplayNewNoodleToggle}/>
        </>
    )
}

export default ProfilePage