import { Metadata } from "next";
import { BlogSection } from "@/components/sections/blog";

export const metadata: Metadata = {
  title: "Blog | Yash Dwivedi",
  description: "Insights on technology, development, and innovation from Yash Dwivedi",
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <BlogSection />
    </main>
  );
}
