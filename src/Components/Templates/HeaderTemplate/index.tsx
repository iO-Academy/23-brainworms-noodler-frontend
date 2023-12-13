import LogoAtom from "../../Atoms/LogoAtom";
import DisplayAtom from "../../Atoms/DisplayAtom";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function HeaderTemplate () {
    const location = useLocation()
    const data = location.state
    const userId = data.responseData.userId
    const [userInfo, setUserInfo] = useState({data: {username: 'start', description:'blah'}})

    useEffect(() => {
        async function fetchData() {
            const customSettings = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json", //state what type is being sent
                },
            };
            const response = await fetch(`http://0.0.0.0:8080/users/${userId}`, customSettings);
            const userInfo = await response.json();
            // console.log(userInfo)
            setUserInfo(userInfo)
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