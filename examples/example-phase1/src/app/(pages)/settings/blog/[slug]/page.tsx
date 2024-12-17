// Services
import { getBlogBySlug } from "@/services/blog";

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  const slug = params?.slug;

  const blog = await getBlogBySlug(slug as string);

  return (
    <>
      <p>This is the detail page with slug: {slug} </p>
      <div>Name: {blog?.name}</div>
    </>

  )
}

export default BlogDetail;
