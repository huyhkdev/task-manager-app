import{ ReactNode, memo } from "react";

interface AppModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  width?: string;
}

const AppModal = ({
  open,
  onClose,
  title,
  children,
  actions,
  width = "max-w-md"
}: AppModalProps) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    const modalBox = document.getElementById("common-modal-box");
    if (modalBox && !modalBox.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <>
      {open && (
        <dialog className="modal modal-open" onClick={handleClickOutside}>
          <div
            id="common-modal-box"
            className={`modal-box w-11/12 ${width} bg-gray-200`}
            onClick={(e) => e.stopPropagation()}
          >
            {title && <h3 className="font-bold text-lg mb-4 text-gray-800">{title}</h3>}
            <div className="mb-4">{children}</div>
            {actions && <div className="modal-action">{actions}</div>}
          </div>
        </dialog>
      )}
    </>
  );
};

export default memo(AppModal);