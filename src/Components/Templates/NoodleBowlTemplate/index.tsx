import NoodleDisplayMolecule from "../../Molecules/NoodleDisplayMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

interface iNoodleBowlProps {
    setNewNoodleToggle: (value: boolean) => void,
    displayNewNoodleToggle: boolean
}

function NoodleBowlTemplate (props: iNoodleBowlProps) {
    const {setNewNoodleToggle, displayNewNoodleToggle} = props
    const location = useLocation()
    const data = location.state
    const [noodles, setNoodles] = useState([])
    const userId = data.responseData.userId


    //fetch all noodles from db and render noodle display molecules for each noodle
    useEffect(() => {
        async function fetchData(){
            const customSettings = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json", //state what type is being sent
                },
            };
            const response = await fetch(`http://0.0.0.0:8080/noodles/${userId}`, customSettings);
            const userNoodles = await response.json();
            setNoodles(userNoodles)
        }
        fetchData()
    }, [])



    //on click Add New Noodle - display new noodle template - using setNewNoodleToggle func
    function handleClick () {
        setNewNoodleToggle(!displayNewNoodleToggle)
    }


    return (
        <>
            <div>{noodles.map((noodle) => {
                return <NoodleDisplayMolecule id={noodle.id} noodle={noodle.noodle} time={noodle.time}/>
            })}</div>
            <ButtonAtom value="Add New Noodle" onClick={handleClick}/>
        </>
    )

export default NoodleBowlTemplate