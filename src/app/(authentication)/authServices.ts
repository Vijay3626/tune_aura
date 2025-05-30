import { globalApiCall } from "@/context/api";

export const handleRegister = async (e: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const result = await globalApiCall({
    url: `register`,
    method: 'POST',
    body: { name: e.name, email: e.email, password: e.password, cnf_password: e.confirmPassword },
  });

  return result;
};