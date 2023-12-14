import DisplayAtom from "../../Atoms/DisplayAtom";

interface noodleProp {
    id: number,
    noodle: string,
    time: string
}

function NoodleDisplayMolecule (props: noodleProp) {

    const dateObj = new Date(props.time)
    const dateTimeArray = props.time.split(" ")
    const time = dateTimeArray[1]

    return (
        <>
            <DisplayAtom text={dateObj.toDateString()}/>
            <DisplayAtom text={time} />
            <DisplayAtom text={props.noodle} />
            {/*<DisplayAtom text={props.id} />*/}
        </>
    )
}

export default NoodleDisplayMolecule