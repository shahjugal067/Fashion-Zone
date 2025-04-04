import { useState } from "react";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of AI in Web Development",
      author: "John Doe",
      date: "March 10, 2025",
      content: "AI is revolutionizing web development by automating tasks, improving user experience, and enhancing security measures."
    },
    {
      id: 2,
      title: "Top 10 JavaScript Frameworks in 2025",
      author: "Jane Smith",
      date: "March 12, 2025",
      content: "Explore the most popular JavaScript frameworks in 2025, including React, Vue, Angular, and more."
    },
    {
      id: 3,
      title: "How to Optimize Your Website for SEO",
      author: "Alice Brown",
      date: "March 15, 2025",
      content: "Learn the latest SEO techniques to improve your website’s ranking on search engines."
    }
  ]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for a blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-lg shadow-sm"
        />
      </div>
      
      {/* Blog Posts */}
      <div>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className="mb-6 p-6 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-500 text-sm">By {blog.author} | {blog.date}</p>
              <p className="mt-2 text-gray-700">{blog.content}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
