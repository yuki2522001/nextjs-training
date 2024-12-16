import { getBlogById } from "@/services/blog";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  const blog = await getBlogById(params.slug);
  console.log("blog", blog);

  // const router = useParams();

  // const { slug } = router;

  return (
    <p>This is the detail page with slug: {params.slug}</p>
  )
}

export default BlogDetail;
