// TODO: Make lefside type and accept props
// TODO: if mobile, change header and to not include menu so it's just a scroll thru
// so need to figure out the tailwind
import Image from "next/image";
import Menu from "./Menu";
import Contacts from "./Contacts";

const LeftSide = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl">Samir Hassen</h1>
        <h2 className="pt-2 text-base">I like turtles</h2>
        <Image
          src="/images/profile.jpg"
          width={300}
          height={300}
          alt="Picture of Samir"
        />
      </div>
      <Menu></Menu>
      <Contacts></Contacts>
    </div>
  );
};

export default LeftSide;
