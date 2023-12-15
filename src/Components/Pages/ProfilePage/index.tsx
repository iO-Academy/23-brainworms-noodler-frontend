import HeaderTemplate from "../../Templates/HeaderTemplate";
import NoodleBowlTemplate from "../../Templates/NoodleBowlTemplate";
import NewNoodleTemplate from "../../Templates/NewNoodleTemplate";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom";

function ProfilePage() {
  const [DisplayNewNoodleToggle, setDisplayNewNoodleToggle] = useState(false);
  const location = useLocation();
  const data = location.state;
  const userId = data.responseData.userId;

  //on click Add New Noodle - display new noodle template - using setNewNoodleToggle func
  function handleClick() {
    setDisplayNewNoodleToggle(!DisplayNewNoodleToggle);
  }

  return (
    <>
      <HeaderTemplate userId={userId} />
      <div className="flex justify-center">
        <ButtonAtom value="Add New Noodle" onClick={handleClick} width="56" />
      </div>
      <NewNoodleTemplate
        userId={userId}
        setNewNoodleToggle={setDisplayNewNoodleToggle}
        displayNewNoodleToggle={DisplayNewNoodleToggle}
      />
      <NoodleBowlTemplate userId={userId} />
    </>
  );
}

export default ProfilePage;
