// Services
import { getBlogs } from "@/services/blog";

// Types
import { BlogItemType } from "@/types";

// Components
import BlogItem from "./BlogItem";

const BlogList = async () => {
  const blogs: BlogItemType[] = await getBlogs();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl my-4">Blog page</h1>
      <ul className="flex flex-row justify-between w-80">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <BlogItem id={blog.id} name={blog.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
