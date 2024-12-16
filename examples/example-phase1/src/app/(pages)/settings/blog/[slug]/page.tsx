import { getBlogById } from "@/services/blog";

interface BlogDetailPageProps {
  params?: Promise<{
    slug: string
 }>
}

const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  const blogId = await params?.slug;
  
  const blog = await getBlogById(blogId);
  console.log("blog", blog);
  
  return (
    <p>This is the detail page with slug:</p>
  )
}

export default BlogDetail;
