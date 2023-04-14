import React from "react";
import { useSelector } from "react-redux";
import { AdminState } from "../store/adminStore";

const StatusMessage: React.FC = () => {
  const { isSaving, isUploading, isDeleting } = useSelector(
    (state: AdminState) => state.admin
  );

  return (
    <p className="rounded bg-white py-8 px-10">
      {isUploading
        ? "Uploading... This might take a few seconds."
        : isSaving
        ? "Saving to database..."
        : isDeleting
        ? "Deleting product"
        : ""}
    </p>
  );
};
export default StatusMessage;
