import LoginFormMolecule from "../../Molecules/LoginFormMolecule";
import { Link } from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom";

function LoginTemplate() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <LoginFormMolecule />
      <Link to={"Register"}>
        <ButtonAtom value="Sign up" />
      </Link>
    </div>
  );
}

export default LoginTemplate;
