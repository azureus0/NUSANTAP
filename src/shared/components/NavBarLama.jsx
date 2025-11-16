import { Link } from "react-router-dom";
import Nusantap from "../../assets/logo/Nusantap2.png";
import Logo1 from "../../assets/logo/logoOren.png";
import LogoNusantap from "../../assets/logo/LogoNusantap.png";
import Button from "./Button";
import NavItem from "./NavItem";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F9F9F7] w-full flex items-center justify-between pl-[61px] pr-[199px] h-[104px] shadow-md">

      {/* Logo
      <div className="flex gap-3">
        <img src={Logo1} alt="Logo1" className="w-[43px] h-[55px] object-contain" />
        <img src={Nusantap} alt="NusantapLogo" className="h-11 w-auto mt-2 object-contain" />
      </div> */}

      {/* Logo */}
      <div className="flex gap-3">
        <Link to="/">
          <img
            src={LogoNusantap}
            alt="LogoNusantap"
            className="w-[276px] h-[55px] object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="flex gap-[8px]">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/menu">Menu</NavItem>
        <NavItem to="/pages">Pages</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </div>

      <Button className="px-[24px] py-[12px] whitespace-nowrap border-[1.5px] hover:bg-[#DBDFD0] transition">
        Get Involved
      </Button>
    </nav>
  );
}
