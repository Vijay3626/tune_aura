"use server";
import { headers } from "next/headers";
import dotenv from "dotenv";
dotenv.config();

interface FetchOptions {
  url: string;
  dataParam?: Record<string, string>;
  method?: string;                      // default = 'GET'
  body?: Record<string, unknown> | FormData;
  tags?: string[];
}

export const globalApiCall = async ({
  url,
  dataParam,
  method = "GET",
  body,
  tags,
}: FetchOptions) => {
  try {
    const hdrs = await headers();
    const cookieHeader = hdrs.get("cookie") ?? "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => c.split("="))
    );
    const token   = cookies["token"];
    const appMode = (cookies["selectedStatus"] ?? "live").toLowerCase();
    const baseurl = "https://node-back-tc0e.onrender.com";
    console.log("baseurl",baseurl);
    const qs = dataParam ? "?" + new URLSearchParams(dataParam) : "";
    const fullUrl = `${baseurl}${url}${qs}`;
    console.log('fullUrl: ', fullUrl);
    const requestHeaders: HeadersInit = {
      Accept: "application/json",
      "App-Mode": `_${appMode}`,
    };
    if (!(body instanceof FormData)) {
      requestHeaders["Content-Type"] = "application/json";
    }

    if (token) {
      requestHeaders["Authorization"] = `Bearer ${token}`;
    }
    const options: RequestInit = {
      method,
      headers: requestHeaders,
      next: { tags },
    };

    if (body) {
      options.body = body instanceof FormData ? body : JSON.stringify(body);
    }
    const res   = await fetch(fullUrl, options);
    const data  = await res.json().catch(() => null); // avoid crash on non-JSON
    return { status: res.status, data, baseurl};
  } catch (err: any) {
    return { status: 500, data: { message: `${err.message}, ${process.env.NEXT_PUBLIC_API_BASE_URL}` } };
  }
};
