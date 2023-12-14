import LogoAtom from "../../Atoms/LogoAtom";
import DisplayAtom from "../../Atoms/DisplayAtom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface iUserInfo {
    username: string,
    description: string
}
interface iUserObject {
    data: iUserInfo
}

interface iProps {
    userId: number
}

function HeaderTemplate (props: iProps) {
    const userId = props.userId
    const [userInfo, setUserInfo] = useState<iUserObject>({data: {username: '', description:''}})

    useEffect(() => {
        async function fetchData(){
            const customSettings = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json", //state what type is being sent
                },
            };
            const response = await fetch(`http://0.0.0.0:8080/users/${userId}`, customSettings);
            const userInfo = await response.json();
            setUserInfo(userInfo)
        }
        fetchData()
    }, [])

    const {username, description} = userInfo.data

    return (
        <>
            <LogoAtom image="public/assets/Noodler-logo.png"></LogoAtom>
            <DisplayAtom text={username}></DisplayAtom>
            <DisplayAtom text={description}></DisplayAtom>
        </>
    )
}

export default HeaderTemplate