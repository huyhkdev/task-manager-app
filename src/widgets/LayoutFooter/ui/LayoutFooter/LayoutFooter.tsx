import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <>
      <footer className="bg-white py-8 px-12 text-base-content   shadow-lg border-t border-gray-300">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>

          <div className="space-y-2 mb-5">
            <p className="text-lg text-gray-600">Huynh Kim Huy</p>
            <p className="text-sm text-gray-500">Phone: +84 774 424 828</p>
            <p className="text-sm text-gray-500">Email: huyhk.dev@gmail.com</p>
          </div>
          <p className="text-sm text-gray-500">© 2025 Huynh Kim Huy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default LayoutFooter;
