"use server";
import { headers } from "next/headers";
interface FetchOptions {
  url: string;
  dataParam?: Record<string, string>;
  method?: string;
  body?: Record<string, unknown> | FormData;
  tags?: string[];
}

export const globalApiCall = async (fetchoptions: FetchOptions) => {
  try {
    let { url, tags, dataParam, method = "GET", body } = fetchoptions;
    const headersObj = await headers();
    const cookieHeader = headersObj.get("cookie");
    const cookies = cookieHeader
      ? Object.fromEntries(
          cookieHeader.split("; ").map((cookie) => cookie.split("="))
        )
      : {};
    const token = cookies["token"];
    const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const appMode = cookies["selectedStatus"]
      ? cookies["selectedStatus"].toLowerCase()
      : "live";
    let queryString;
    if (dataParam) {
      queryString = new URLSearchParams(dataParam).toString();
      url = `${baseurl}${url}?${queryString}`;
    } else {
      url = `${baseurl}${url}`;
    }
    const header: HeadersInit = {
      Accept: "application/json",
      "App-Mode": `_${appMode}`,
    };
    if (!(body instanceof FormData)) {
      header["Content-Type"] = "application/json";
    }
    header["Accept"] = "application/json";
    if (!(body instanceof FormData)) {
      header["Content-Type"] = "application/json";
    }
    if (token) {
      header["Authorization"] = `Bearer ${token}`;
    }
    const options: RequestInit = {
      method,
      headers: header,
      next: { tags },
    };
    if (body) {
      options.body = body instanceof FormData ? body : JSON.stringify(body);
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      const data = await response.json();
      return { status: response.status, data };
    } else {
      const data = await response.json();
      return { status: response.status, data };
    }
  } catch (data) {
    return {
      data,
    };
  }
};
