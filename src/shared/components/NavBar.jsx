import { Link } from "react-router-dom";
import Nusantap from "../../assets/logo/Nusantap2.png";
import Logo1 from "../../assets/logo/logoOren.png";
import LogoNusantap from "../../assets/logo/LogoNusantap.png";
import Button from "./Button";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <nav className="bg-[#F9F9F7] w-full flex items-center justify-between pl-[61px] pr-[199px] h-[104px] shadow-md">
      {/* Logo */}
      <div className="flex gap-3">
        <img
          src={LogoNusantap}
          alt="LogoNusantap"
          className="w-[276px] h-[55px] object-contain"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex gap-[8px]">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/menu">Menu</NavItem>
        <NavItem to="/pages">Pages</NavItem>
        <NavItem to="/Contact">Contact</NavItem>
      </div>

      <Link to="/Login">
        <Button className="px-[24px] py-[12px] whitespace-nowrap border-[1.5px] hover:bg-[#DBDFD0] transition">
          Get Involved
        </Button>
      </Link>
    </nav>
  );
}
