import DisplayAtom from "../../Atoms/DisplayAtom";

interface noodleProp {
  id: number;
  noodle: string;
  time: string;
}

function NoodleDisplayMolecule(props: noodleProp) {
  const dateObj = new Date(props.time);
  const dateTimeArray = props.time.split(" ");
  const time = dateTimeArray[1];

  return (
    <div className="border-2 border-yellow-500 rounded-md bg-yellow-100 p-2 my-4">
      <div className="flex justify-between font-bold gap-2">
        <DisplayAtom text={dateObj.toDateString()} />
        <DisplayAtom text={time} />
      </div>
      <DisplayAtom text={props.noodle} />
    </div>
  );
}

export default NoodleDisplayMolecule;
