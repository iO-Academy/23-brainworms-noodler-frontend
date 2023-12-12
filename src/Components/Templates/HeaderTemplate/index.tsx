import LogoAtom from "../../Atoms/LogoAtom";
import DisplayAtom from "../../Atoms/DisplayAtom";

function HeaderTemplate () {
    return (
        <>
            <LogoAtom image="https://placedog.net/200/200"></LogoAtom>
            <DisplayAtom text="Username Info"></DisplayAtom>
            <DisplayAtom text="Description Info"></DisplayAtom>
        </>
    )
}

export default HeaderTemplate