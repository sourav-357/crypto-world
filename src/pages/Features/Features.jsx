import React from "react";
import "./Features.css";

export const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Real-Time Market Data",
      description: "Get live cryptocurrency prices, market caps, and trading volumes updated in real-time from multiple exchanges.",
    },
    {
      icon: "📈",
      title: "Advanced Charts",
      description: "Interactive price charts with 7-day historical data to help you make informed investment decisions.",
    },
    {
      icon: "🔍",
      title: "Comprehensive Search",
      description: "Search through thousands of cryptocurrencies quickly and easily with our powerful search engine.",
    },
    {
      icon: "💱",
      title: "Multi-Currency Support",
      description: "View prices in USD, EUR, INR, and more. Switch between currencies instantly.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Access your crypto data anywhere, anytime with our fully responsive design for all devices.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Your data is safe with us. We use industry-standard security practices to protect your information.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Experience blazing-fast load times and smooth navigation throughout the platform.",
    },
    {
      icon: "📰",
      title: "Latest News & Updates",
      description: "Stay informed with the latest cryptocurrency news, trends, and market analysis.",
    },
    {
      icon: "🎯",
      title: "Detailed Coin Information",
      description: "Access comprehensive details about each cryptocurrency including supply, all-time highs, and more.",
    },
  ];

  return (
    <div className="features-page">
      <div className="features-hero">
        <h1>Platform Features</h1>
        <p>
          Discover the powerful features that make CryptoWorld the best
          cryptocurrency marketplace
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users tracking their favorite cryptocurrencies</p>
        <button>Sign Up Now</button>
      </div>
    </div>
  );
};

