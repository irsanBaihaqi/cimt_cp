function BlogCard({ blog }) {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4">{blog.description}</p>
        <a
          href={blog.link}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default BlogCard;