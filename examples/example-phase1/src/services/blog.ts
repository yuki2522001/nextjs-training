// Constants
import { BLOGS_URL, ENDPOINTS } from "@/constants";

// Types
import { BlogItemType } from "@/types";

// Utils
import { httpRequest } from "@/utils";

export const getBlogs = async (): Promise<BlogItemType[]> =>
  await httpRequest<BlogItemType[]>(BLOGS_URL, {
    // Helps cache and revalidate data
    // Eg: revalidateTag(ENDPOINTS.BLOGS)
    next: {
      tags: [ENDPOINTS.BLOGS],
    },
  });

/**
 * 
 * @param id to get blog by id
 * @returns 
 */
export const getBlogById = async (id: string): Promise<BlogItemType | null> => {
  const data = await httpRequest<BlogItemType[]>(`${BLOGS_URL}?id=${id}`);

  // Check if the array is not empty and has a first element.
  if (data.length > 0) {
    return data[0];
  }

  // Return null if the blog cannot be found
  return null;
};
