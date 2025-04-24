import { AppButton, AppModal } from "@/widgets";
import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { FC, memo } from "react";


interface ConfirmDeleteModalProps {
    open: boolean;
    onCancel: () => void;
    onDelete: () => void;
}

const ConfirmDeleteModal: FC<ConfirmDeleteModalProps> = ({ open, onCancel, onDelete }) => {
    return (
        <AppModal
            open={open}
            onClose={onCancel}
            title="Confirm Deletion"
            actions={<div className="flex gap-2">
                <AppButton type="secondary" icon={<CloseOutlined />} text="Cancel" onClick={onCancel} />
                <AppButton icon={<DeleteOutlined />} text="Delete" onClick={onDelete} />
               
            </div>}

        >
            <p className="py-4 text-gray-800">Are you sure you want to delete this task?</p>
        </AppModal>
    );
};

export default memo(ConfirmDeleteModal);
