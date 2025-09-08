type ShowToastFn = (options: { message: string; type: string }) => void;

let showToastFn: ShowToastFn | null = null;

export const registerShowToast = (fn: ShowToastFn) => {
  showToastFn = fn;
};

export const showToast = (message: string, type = 'success') => {
  if (showToastFn) {
    showToastFn({ message, type });
  }
};
