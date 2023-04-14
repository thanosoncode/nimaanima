import { useSelector } from "react-redux";
import { AdminState } from "../store/adminStore";
import StatusMessage from "./StatusMessage";

const Backdrop = () => {
  const { isSaving, isUploading, isDeleting } = useSelector(
    (state: AdminState) => state.admin
  );

  const open = isSaving || isUploading || isDeleting;

  return (
    <div
      className={`absolute inset-0 flex h-full w-full items-center justify-center backdrop-brightness-75 ${
        open ? "flex" : "hidden"
      }`}
    >
      <StatusMessage />
    </div>
  );
};
export default Backdrop;
