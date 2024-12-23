// Services
import { getBlogById } from "@/services/blog";

// Utils
import { extractIdFromSlug } from "@/utils/slug";

interface BlogDetailPageProps {
  params: {
    id: string
  }
}

const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  const blogId = extractIdFromSlug(params?.id) || "1";

  const blog = await getBlogById(blogId);

  return (
    <>
      <p>This is the detail page with slug: {blogId} </p>
      <div>Name: {blog?.name}</div>
    </>

  )
}

export default BlogDetail;
