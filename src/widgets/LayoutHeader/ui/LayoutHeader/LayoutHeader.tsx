import { FC, memo } from "react";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-white text-black font-bold text-xl flex justify-start items-center border-b border-gray-200">
          Task Manager App
        </nav>
      </header>
    </>
  );
};

export default memo(LayoutHeader);
