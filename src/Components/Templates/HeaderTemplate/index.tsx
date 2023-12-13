import LogoAtom from "../../Atoms/LogoAtom";
import DisplayAtom from "../../Atoms/DisplayAtom";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

interface iUserInfo {
    username: string,
    description: string
}
interface iUserObject {
    data: iUserInfo
}

function HeaderTemplate () {
    const location = useLocation()
    const data = location.state
    const userId: number = data.responseData.userId
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
            return 'success'
        }
        fetchData()
    }, [])

    const {username, description} = userInfo.data

    return (
        <>
            <LogoAtom image="https://placedog.net/200/200"></LogoAtom>
            <DisplayAtom text={username}></DisplayAtom>
            <DisplayAtom text={description}></DisplayAtom>
        </>
    )
}

export default HeaderTemplate