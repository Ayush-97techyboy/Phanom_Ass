import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: "The Future of Innovation in Tech",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of innovation.",
      author: "John Smith",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      category: "Technology"
    },
    {
      title: "Building Scalable Solutions",
      excerpt: "Best practices for creating scalable and maintainable software solutions.",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Development"
    },
    {
      title: "The Impact of AI on Business",
      excerpt: "How artificial intelligence is transforming modern business operations.",
      author: "Mike Wilson",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      category: "AI"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Insights, updates, and stories about innovation and technology
        </p>

        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Featured post"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="text-purple-600 font-semibold mb-2">Featured</div>
              <h2 className="text-2xl font-bold mb-4">
                Revolutionizing Business Through Digital Transformation
              </h2>
              <p className="text-gray-600 mb-4">
                Discover how digital transformation is reshaping industries and creating new opportunities for growth and innovation.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>March 20, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>David Brown</span>
                </div>
              </div>
              <Link to="/blog/featured" className="text-purple-600 font-semibold flex items-center gap-2 hover:text-purple-700">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-purple-600 text-sm font-semibold mb-2">{post.category}</div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link to={`/blog/${index + 1}`} className="text-purple-600 font-semibold flex items-center gap-2 hover:text-purple-700">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}