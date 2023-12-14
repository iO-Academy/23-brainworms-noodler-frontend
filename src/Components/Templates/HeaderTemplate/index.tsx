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
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <LogoAtom className="self-center w-72 sm:w-96" image="public/assets/Noodler-logo.png"></LogoAtom>
            <div className="flex flex-col self-center sm:w-2/3">
                <DisplayAtom className="text-4xl sm:text-7xl" text={username}></DisplayAtom>
                <DisplayAtom className="text-base sm:text-2xl" text={description}></DisplayAtom>
            </div>
        </div>
    )
}

export default HeaderTemplate