"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RemoveButton = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openConfirmationDialog = () => {
    setIsDialogOpen(true);
  };

  const closeConfirmationDialog = () => {
    setIsDialogOpen(false);
  };

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/manage/${id}`, { method: "DELETE" }),
    mutationKey: ["my-products"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
      setIsDialogOpen(false);
    },
    onError: () => setIsDialogOpen(false),
  });

  return (
    <>
      <button
        className="rounded bg-red-400 py-1 px-3 font-semibold text-white hover:bg-red-200"
        onClick={openConfirmationDialog}
      >
        remove product
      </button>
      <div className={`${isDialogOpen ? "fixed" : "hidden"} inset-0 z-40`}>
        <div className="h-full  w-full bg-black opacity-70 duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className=" flex flex-col items-center justify-center whitespace-nowrap bg-white py-4 px-2 text-black sm:py-10 sm:px-12">
            <h4>Are you sure you want to delete this product?</h4>
            <div className="mx-auto mt-8 flex w-full justify-center gap-12 px-8">
              <button
                onClick={closeConfirmationDialog}
                className="font-semibold"
              >
                Cancel
              </button>
              <button
                className="rounded bg-red-400 py-1 px-3 font-semibold text-white hover:bg-red-200"
                onClick={() => mutate(id)}
                disabled={isDeleting}
              >
                {isDeleting ? "Removing..." : "Remove product"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RemoveButton;
