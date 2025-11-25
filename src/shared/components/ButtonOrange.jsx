function ButtonOrange({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-[#7A2E11] text-[#fff] rounded-full border-2 border-transparent transition-all duration-300 ${className}`}
      {...props}

      // className={`bg-[#7A2E11] text-[#fff] rounded-full border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:text-[#7A2E11] hover:border-[#7A2E11] ${className}`}
      // {...props}
    >
      {children}
    </button>
  );
}

export default ButtonOrange