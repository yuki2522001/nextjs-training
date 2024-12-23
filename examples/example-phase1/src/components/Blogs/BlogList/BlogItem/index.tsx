import Link from "next/link";

// Types
import { BlogItemType } from "@/types";

// Utils
import { generateSlugByNameAndId } from "@/utils/slug";

const BlogItem = ({ name, id }: BlogItemType) => (
  <div className="border-2">
    <Link href={`/settings/blog/${generateSlugByNameAndId(name, id)}`}>{name}</Link>
  </div>
);

export default BlogItem;
