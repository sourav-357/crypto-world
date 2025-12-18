import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

export const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Cryptocurrency Market Trends in 2025",
      excerpt:
        "Explore the latest trends shaping the cryptocurrency market this year, including DeFi innovations, regulatory changes, and emerging technologies.",
      author: "CryptoWorld Team",
      date: "January 15, 2025",
      category: "Market Analysis",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Build a Diversified Crypto Portfolio",
      excerpt:
        "Learn the fundamentals of building a well-diversified cryptocurrency portfolio that balances risk and reward for long-term growth.",
      author: "Sarah Johnson",
      date: "January 12, 2025",
      category: "Investment",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Bitcoin vs Ethereum: A Comprehensive Comparison",
      excerpt:
        "Dive deep into the differences between Bitcoin and Ethereum, their use cases, and which might be better for your investment strategy.",
      author: "Michael Chen",
      date: "January 10, 2025",
      category: "Education",
      readTime: "8 min read",
    },
    {
      id: 4,
      title: "The Future of DeFi: What to Expect",
      excerpt:
        "Discover how decentralized finance is revolutionizing traditional banking and what innovations are on the horizon.",
      author: "Emily Rodriguez",
      date: "January 8, 2025",
      category: "DeFi",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Cryptocurrency Security Best Practices",
      excerpt:
        "Essential security tips to protect your digital assets from hackers and scams in the crypto space.",
      author: "David Kim",
      date: "January 5, 2025",
      category: "Security",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "NFTs: Beyond Digital Art",
      excerpt:
        "Explore how NFTs are being used in gaming, real estate, and other industries beyond the art world.",
      author: "Lisa Anderson",
      date: "January 3, 2025",
      category: "NFTs",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "Market Analysis",
    "Investment",
    "Education",
    "DeFi",
    "Security",
    "NFTs",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="blogs-page">
      <div className="blogs-hero">
        <h1>CryptoWorld Blog</h1>
        <p>
          Stay informed with the latest news, insights, and analysis from the
          cryptocurrency world
        </p>
      </div>

      <div className="blog-categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blogs-grid">
        {filteredPosts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-header">
              <span className="blog-category">{post.category}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-meta">
              <div className="blog-author">
                <span>By {post.author}</span>
              </div>
              <span className="blog-date">{post.date}</span>
            </div>
            <Link to={`/blog/${post.id}`} className="blog-read-more">
              Read More →
            </Link>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="no-posts">
          <p>No blog posts found in this category.</p>
        </div>
      )}
    </div>
  );
};

