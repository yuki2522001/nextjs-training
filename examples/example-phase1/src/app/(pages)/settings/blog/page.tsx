// Services
import { getBlogItems } from "@/services/blog";

// Types
import { BlogItemType } from "@/types";

// Components
import BlogItem from "./blogItem/page";

const Blog = async () => {
  const blogs: BlogItemType[] = await getBlogItems()

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl my-4">Blog page</h1>
      <ul className="flex flex-row justify-between w-80">
        {blogs.map((blog) => (
          <li key={blog.slug}>
              <BlogItem id={blog.id} name={blog.name} slug={blog.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
