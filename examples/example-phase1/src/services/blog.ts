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
   * @param slug to get blog by slug
   * @returns 
   */
  export const getBlogBySlug = async (slug: string): Promise<BlogItemType | null> => {
    const data = await httpRequest<BlogItemType[]>(`${BLOGS_URL}?slug=${slug}`);
    
    // Check if the array is not empty and has a first element.
    if (data.length > 0) {
      return data[0];
    }
  
    // Return null if the blog cannot be found
    return null;
  };
