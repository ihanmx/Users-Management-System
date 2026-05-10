import Swal from "sweetalert2";

export const swal = Swal.mixin({
  // pre-configured Swal
  buttonsStyling: false, // Disable default button styles
  ...(typeof window !== "undefined" && {
    direction: document.documentElement.dir as "ltr" | "rtl",
  }), // Set direction based on document typeof avoid window is not defined error during SSR
  customClass: {
    popup:
      "rounded-2xl bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100",

    title: "text-zinc-900 dark:text-zinc-100",
    htmlContainer: "text-zinc-600 dark:text-zinc-400",
    confirmButton:
      "px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 ms-2",
    cancelButton:
      "px-4 py-2 rounded-md bg-zinc-200 text-zinc-800 font-medium hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100",
  },
});

type ConfirmOptions = {
  title?: string;
  text?: string;
  confirmText?: string;
  cancelText?: string;
}; //we pass options to support translation

export async function confirmDelete(options: ConfirmOptions = {}) {
  const result = await swal.fire({
    title: options.title || "Are you sure?",
    text: options.text || "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: options.confirmText || "Delete",
    cancelButtonText: options.cancelText || "Cancel",
    reverseButtons: true,
  });
  return result.isConfirmed;
}

export function showSuccess(message: string) {
  return swal.fire({
    title: message,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
}

export function showError(message: string, title = "Something went wrong") {
  return swal.fire({
    title: title,
    text: message,
    icon: "error",
  });
}
