// Logo.jsx
const Logo = () => {
  return (
    <div className="flex items-end gap-1 group text-[2.6rem] font-bold leading-none cursor-pointer">
      <span className="text-[#0e75ee] tracking-wider font-[Oswald] group-hover:tracking-[.25em] transition-all duration-500">
        Crodous
      </span>
      <span className="text-[#3c3c3c] font-[Cinzel] text-[1.8rem] italic font-medium group-hover:text-black transition-colors duration-500">
        Cv
      </span>
    </div>
  );
};

export default Logo;
