// TODO: Make lefside type and accept props
// TODO: if mobile change header and to not include menu so it's just a scroll thru
// so need to figure out the tailwind
import Menu from "./Menu";
import Contacts from "./Contacts";

const LeftSide = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl">Samir Hassen</h1>
        <h2 className="pt-2 text-base">
          Column one will include basics: name, job title, picture, socials,
          navigation.
        </h2>
      </div>
      <Menu></Menu>
      <Contacts></Contacts>
    </div>
  );
};

export default LeftSide;
