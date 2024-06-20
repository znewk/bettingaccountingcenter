import { useUserStore } from '@/store/useUserStore';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8181/api";

async function get(url: string) {
  const requestOptions = {
    method: "GET",
    headers: await getHeaders(),
  };

  const response = await fetch(baseUrl + url, requestOptions);
  return await handleResponse(response);
}

async function post(url: string, body: {}) {
  const requestOptions = {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(body),
  };
  const response = await fetch(baseUrl + url, requestOptions);
  return await handleResponse(response);
}

async function put(url: string, body: {}) {
  const requestOptions = {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify(body),
  };
  const response = await fetch(baseUrl + url, requestOptions);
  return await handleResponse(response);
}

async function del(url: string) {
  const requestOptions = {
    method: "DELETE",
    headers: await getHeaders(),
  };
  const response = await fetch(baseUrl + url, requestOptions);
  return await handleResponse(response);
}

async function getHeaders() {
  const token = useUserStore.getState().token;
  const headers = { "Content-Type": "application/json", Accept: "application/json" } as any;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

async function handleResponse(response: Response) {
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    data = text;
  }

  if (response.ok) {
    return data || response.statusText;
  } else {
    const error = {
      status: response.status,
      message: typeof data === "string" && data.length > 0 ? data : response.statusText,
    };
    return Promise.reject(error);
  }
}

export const fetchWrapper = {
  get,
  post,
  put,
  del,
};
