// Services
import { getBlogById } from "@/services/blog";

interface BlogDetailPageProps {
  params: {
    id: number
  }
}

const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  const blogId = params?.id;

  const blog = await getBlogById(blogId);
  console.log("blog", blog);
  

  return (
    <>
      <p>This is the detail page with slug: {blogId} </p>
      <div>Name: {blog?.name}</div>
    </>

  )
}

export default BlogDetail;
