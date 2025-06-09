import { globalApiCall } from "@/context/api"

export const handlelogin = async (e: { email: string; password: string }) => {
  const result = await globalApiCall({
    url: `api/login`,
    method: 'POST',
    body: { email: e.email, password: e.password },
  });

  return result;
};