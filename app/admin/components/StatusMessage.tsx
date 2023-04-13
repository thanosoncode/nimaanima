import { UploadStatus } from "@/app/utils/models";
import React from "react";

interface StatusMessageProp {
  uploadStatus: UploadStatus;
}

const StatusMessage: React.FC<StatusMessageProp> = ({
  uploadStatus: { isUploading, isSaving },
}) => {
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
