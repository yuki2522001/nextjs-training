/**
 * Sends an HTTP request and returns the parsed JSON response.
 *
 * @param url - The URL of the API or resource to fetch.
 * @param options - (Optional) Configuration options for the request, such as method, headers, and body.
 * @returns - A Promise containing the parsed JSON response.
 */
export const httpRequest = async <T>(url: string, options?: RequestInit) => {
  const headerOption: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options?.headers || {})
  }

  try {
    const response = await fetch(url, {
      method: options?.method || 'GET',
      headers: headerOption,
      body: options?.body,
      ...options
    })

    if (!response.ok) {
      const errorMessage = `Error ${response.status}: ${response.statusText}`

      throw {
        status: response.status,
        message: errorMessage
      }
    }

    return response.json() as T
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong')
  }
}
