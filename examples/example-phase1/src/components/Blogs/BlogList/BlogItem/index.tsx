import Link from "next/link";

// Types
import { BlogItemType } from "@/types";

const BlogItem = ({ name, slug }: BlogItemType) => (
  <div className="border-2">
    <Link href={`/settings/blog/${slug}`}>{name}</Link>
  </div>
);

export default BlogItem;
