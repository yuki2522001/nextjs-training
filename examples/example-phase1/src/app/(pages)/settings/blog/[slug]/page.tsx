// Libs
import { notFound } from "next/navigation";

// Services
import { getBlogById } from "@/services/blog";

// Utils
import { extractIdFromSlug } from "@/utils/slug";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  const { slug } = params;

  const blogId = extractIdFromSlug(slug);

  if (!blogId) {
    notFound();
  }

  const blog = await getBlogById(blogId);

  return (
    <>
      <p>This is the detail page with slug: {blogId} </p>
      <div>Name: {blog?.name}</div>
    </>
  );
};

export default BlogDetail;
