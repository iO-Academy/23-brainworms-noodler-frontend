import LogoAtom from "../../Atoms/LogoAtom";
import DisplayAtom from "../../Atoms/DisplayAtom";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function HeaderTemplate () {

    const location = useLocation()
    const email = location.state.email
    const usernames = {'test@email.com': {username: 'test', description: 'example description'}}
    if (usernames.hasOwnProperty(email)){
        const username = usernames[email].username
        const description = usernames[email].description
        console.log(location.state)

        return (
            <>
                <LogoAtom image="https://placedog.net/200/200"></LogoAtom>
                <DisplayAtom text={username}></DisplayAtom>
                <DisplayAtom text={description}></DisplayAtom>
            </>
        )
    } else {
        return <DisplayAtom text="Error: no user found" />
    }

}

export default HeaderTemplate