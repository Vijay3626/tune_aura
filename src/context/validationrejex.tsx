// validations.ts
export const emailValidate = (email: string): string | undefined => {
  if (!email) return 'Email is required';
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!regex.test(email)) return 'Please enter a valid email address';
};

export const passwordValidate = (password: string): string | undefined => {
  if (!password) return 'Password is required';
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&])\S{8,}$/;
  if (!regex.test(password)) return 'Please enter a valid password';
};
export const cnfPasswordValidate = (password: string, form: any): string | undefined => {
  if (!password) return 'Confirm Password is required';
  return password === form.password ? '' : 'Passwords do not match';
};

export const emptyPasswordValidate = (password: string): string | undefined => {
  if (!password) return 'Password is required'; 
}
export const nameValidate = (name: string): string | undefined => {
    if (!name) return 'Name is required';
    const regex = /^[A-Za-z][A-Za-z\s'-]{1,48}[A-Za-z]$/;
    if (!regex.test(name)) return 'Please enter a valid name';
}