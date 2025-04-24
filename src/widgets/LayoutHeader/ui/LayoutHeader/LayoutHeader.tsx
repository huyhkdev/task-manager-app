import { FC } from "react";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-white text-black font-bold text-xl flex justify-start items-center border-b border-gray-200">
          Todo List
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
