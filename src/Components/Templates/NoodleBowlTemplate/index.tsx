import NoodleDisplayMolecule from "../../Molecules/NoodleDisplayMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { useEffect, useState } from "react";

interface iNoodleBowlProps {
  // setNewNoodleToggle: (value: boolean) => void,
  // displayNewNoodleToggle: boolean,
  userId: number;
}

function NoodleBowlTemplate(props: iNoodleBowlProps) {
  const { userId } = props;
  const [noodles, setNoodles] = useState([]);

  //fetch all noodles from db and render noodle display molecules for each noodle
  useEffect(() => {
    async function fetchData() {
      const customSettings = {
        method: "GET",
        headers: {
          "Content-Type": "application/json", //state what type is being sent
        },
      };
      const response = await fetch(
        `http://0.0.0.0:8080/noodles/${userId}`,
        customSettings
      );
      const userNoodles = await response.json();
      setNoodles(userNoodles);
    }
    fetchData();
  }, [noodles]);

  return (
    <>
      <div>
        {noodles.map((noodle) => {
          return (
            <NoodleDisplayMolecule
              key={noodle.id}
              id={noodle.id}
              noodle={noodle.noodle}
              time={noodle.time}
            />
          );
        })}
      </div>
    </>
  );
}
export default NoodleBowlTemplate;
