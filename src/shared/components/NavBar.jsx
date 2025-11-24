import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LogoNusantap from "../../assets/logo/LogoNusantap.png";
import Button from "./Button";
import NavItem from "./NavItem";
import SvgBurger from "./SvgBurger";

export default function NavBar({ isSticky }) {
  const [isOpen, setIsOpen] = useState(false);
  const isShrink = isSticky && !isOpen;

  return (
    <nav
      className={`w-full transition-all duration-300 ease-in-out z-50 
        ${isShrink ? "fixed top-0 left-0 bg-[#F9F9F7]" : "relative bg-[#F9F9F7]"}`}
    >
      <div
        className={`relative flex items-center justify-between w-full
        px-6 lg:px-10 transition-all duration-300
        ${isShrink
            ? "h-[60px] lg:h-[70px]"
            : "h-[65px] lg:h-[80px]"
          }`}
      >
        {/* Kiri: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            {/* Logo kecil (mobile) */}
            <img
              src={LogoNusantap}
              alt="LogoNusantap"
              className="h-[22px] object-contain cursor-pointer lg:hidden"
            />
            {/* Logo besar (desktop) */}
            <img
              src={LogoNusantap}
              alt="LogoNusantap"
              className="h-[50px] object-contain cursor-pointer hidden lg:block"
            />
          </Link>
        </div>

        {/* Tengah: Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-0">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/beneficiaries">Beneficiaries</NavItem>
          <NavItem to="/pages">Pages</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        {/* Kanan: Button */}
        <div className="hidden lg:flex flex-shrink-0">
          <Button className="px-6 py-2 whitespace-nowrap border-2 hover:bg-[#DBDFD0] transition font-DMsans font-bold">
            Get Involved
          </Button>
        </div>

        {/* Burger Menu (mobile & tablet) */}
        <div className="lg:hidden z-50">
          <SvgBurger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Overlay Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] lg:top-[80px] bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden fixed top-[65px] lg:top-[80px] right-0 w-4/5 h-[calc(100vh-65px)] lg:h-[calc(100vh-80px)] flex flex-col items-center gap-4 bg-[#474747] z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="w-full flex flex-col items-start py-[30px] gap-[30px] pl-4 overflow-y-auto">
          <NavItem to="/" className="text-white">Home</NavItem>
          <NavItem to="/about" className="text-white">About</NavItem>
          <NavItem to="/beneficiaries" className="text-white">Beneficiaries</NavItem>
          <NavItem to="/pages" className="text-white">Pages</NavItem>
          <NavItem to="/contact" className="text-white">Contact</NavItem>
          <Button className="px-[24px] py-[12px] whitespace-nowrap border-[1.5px] hover:bg-[#DBDFD0] transition text-white">
            Get Involved
          </Button>
        </div>
      </motion.div>
    </nav>
  );
}
