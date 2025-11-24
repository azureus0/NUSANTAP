import { Link } from "react-router-dom";

function NavItem({ to, children, className = "" }) {

  // Fungsi Teleport
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <Link
      to={to}
      onClick={handleScrollTop}
      className={`inline-flex items-center justify-center px-[16px] py-[4px] rounded-full text-[#2C2F24] text-base font-DMsans font-medium whitespace-nowrap hover:bg-[#DBDFD0] transition ${className}`}
    >
      {children}
    </Link>
  );
}

export default NavItem;