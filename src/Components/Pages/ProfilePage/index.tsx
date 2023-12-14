import HeaderTemplate from "../../Templates/HeaderTemplate";
import NoodleBowlTemplate from "../../Templates/NoodleBowlTemplate";
import NewNoodleTemplate from "../../Templates/NewNoodleTemplate";
import {useState} from "react";
import {useLocation} from "react-router-dom";

function ProfilePage () {
    const [DisplayNewNoodleToggle, setDisplayNewNoodleToggle] = useState(false)
    const location = useLocation()
    const data = location.state
    const userId = data.responseData.userId

    return (
        <>
            <HeaderTemplate userId={userId}/>
            <NewNoodleTemplate userId={userId} setNewNoodleToggle ={setDisplayNewNoodleToggle} displayNewNoodleToggle = {DisplayNewNoodleToggle}/>
            <NoodleBowlTemplate userId={userId} setNewNoodleToggle ={setDisplayNewNoodleToggle} displayNewNoodleToggle = {DisplayNewNoodleToggle}/>
        </>
    )
}

export default ProfilePage