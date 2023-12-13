import DisplayAtom from "../../Atoms/DisplayAtom";

function NoodleDisplayMolecule () {

    //receive noodle info from props

    return (
        <>
            <DisplayAtom text='date'/>
            <DisplayAtom text='time' />
            <DisplayAtom text='This is my first noodle' />
            <DisplayAtom text='username' />
        </>
    )
}

export default NoodleDisplayMolecule