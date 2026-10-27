import { globalApiCall } from "@/context/api"

export const handlelogin = async (e: { email: string; password: string }) => {
  const result = await globalApiCall({
    url: `login`,
    method: 'POST',
    body: { email: 'vijay@cloudrevelinnovation.com', password: 'Vijay@1502' },
  });
  return result;
};