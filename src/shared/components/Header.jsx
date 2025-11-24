import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import NavBar from "./NavBar";

function Header() {
  const [showTopbar, setShowTopbar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (mobile) {
        setShowTopbar(false);
        return;
      }

      // kalau scroll lebih dari tinggi topbar (misal 40px), hilang
      setShowTopbar(window.scrollY < 40);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <motion.div
        className="bg-white"
        animate={{
          // klo ga mau shadow di header, ganti ke -> boxShadow: "none",
          boxShadow: "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Topbar (desktop only) */}
        {!isMobile && (
          <motion.div
            animate={{
              height: showTopbar ? "auto" : 0,
              opacity: showTopbar ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-[#474747] text-white font-DMsans"
          >
            <div className="flex justify-between items-center px-10 py-2">
              {/* Kontak */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <FiPhone className="text-lg" />
                  <span>08123456789</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMail className="text-lg" />
                  <span>apakek@gmail.com</span>
                </div>
              </div>

              {/* Sosial Media */}
              <div className="flex gap-3">
                {[FaInstagram, RiTwitterXLine, FaFacebookF, FaGithub].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-[#838282] flex items-center justify-center"
                    >
                      <Icon className="text-white text-sm" />
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Navbar tetap di bawah topbar */}
        <NavBar />
      </motion.div>
    </header>
  );
}

export default Header;
