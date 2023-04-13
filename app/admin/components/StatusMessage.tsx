import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/adminStore";

const StatusMessage: React.FC = () => {
  const { isSaving, isUploading } = useSelector(
    (state: RootState) => state.admin
  );

  return (
    <p className="p-2">
      {isUploading
        ? "Uploading... This might take a few seconds."
        : isSaving
        ? "Saving to database..."
        : ""}
    </p>
  );
};
export default StatusMessage;
