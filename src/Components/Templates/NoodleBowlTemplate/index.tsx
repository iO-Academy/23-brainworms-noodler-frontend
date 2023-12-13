import NoodleDisplayMolecule from "../../Molecules/NoodleDisplayMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";

interface iNoodleBowlProps {
    setNewNoodleToggle: (value: boolean) => void,
    displayNewNoodleToggle: boolean
}

function NoodleBowlTemplate (props: iNoodleBowlProps) {
    const {setNewNoodleToggle, displayNewNoodleToggle} = props
    //fetch all noodles from db and render noodle display molecules for each noodle

    //on click Add New Noodle - display new noodle template - using setNewNoodleToggle func
    function handleClick () {
        setNewNoodleToggle(!displayNewNoodleToggle)
    }
    return (
        <>
            <NoodleDisplayMolecule />
            <ButtonAtom value="Add New Noodle" onClick={handleClick}/>
        </>
    )
}

export default NoodleBowlTemplate