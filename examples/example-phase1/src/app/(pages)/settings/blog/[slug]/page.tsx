"use client"
import { useParams } from "next/navigation";

// Services
import { getBlogById } from "@/services/blog";
import { useState } from "react";
import { BlogItemType } from "@/types";

const BlogDetail = async () => {
  const [blog, setBlog] = useState<BlogItemType | null>(null)
  const router = useParams();

  const { slug } = router;

  const user = await getBlogById(slug as string);

  return (
    <p>This is the detail page with slug: {slug}</p>
  )
}

export default BlogDetail;
