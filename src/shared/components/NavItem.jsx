import { Link } from "react-router-dom";

function NavItem({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center px-[16px] py-[4px] rounded-full text-[#2C2F24] text-base font-DMsans font-medium whitespace-nowrap hover:bg-[#DBDFD0] transition ${className}`}
    >
      {children}
    </Link>
  );
}

export default NavItem;
