"use client"

import { useParams } from "next/navigation";

const BlogDetail = () => {
  const router = useParams();
  const { slug } = router;

  return (
      <p>This is the detail page with slug: {slug}</p>
  )
}

export default BlogDetail;
