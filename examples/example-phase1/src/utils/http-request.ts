export const httpRequest = async <T>(url: string, options?: RequestInit) => {
  const headerOption: HeadersInit = {
    "Content-Type": "application/json",
    ...(options?.headers || {}),
  };

  try {
    const response = await fetch(url, {
      method: options?.method || "GET",
      headers: headerOption,
      body: options?.body,
      ...options,
    });

    if (!response.ok) {
      const errorMessage = `Error ${response.status}: ${response.statusText}`;

      throw {
        status: response.status,
        message: errorMessage,
      };
    }

    return response.json() as T;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
