import Link from "next/link";

// Types
import { BlogItemType } from "@/types";

// Utils
import { formatToKebabCase } from "@/utils/slug";

const BlogItem = ({ name }: BlogItemType) => (
  <div className="border-2">
    <Link href={`/settings/blog/${formatToKebabCase(name)}`}>
      {name}
    </Link>
  </div>
)

export default BlogItem;
