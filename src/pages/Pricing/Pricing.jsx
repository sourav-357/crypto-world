import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with cryptocurrency tracking",
      features: [
        "Real-time price tracking",
        "Basic coin information",
        "7-day price charts",
        "Multi-currency support",
        "Search functionality",
        "Responsive design",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For serious crypto enthusiasts and traders",
      features: [
        "Everything in Free",
        "30-day price charts",
        "Advanced analytics",
        "Price alerts",
        "Portfolio tracking",
        "Priority support",
        "Ad-free experience",
        "Export data to CSV",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For businesses and institutions",
      features: [
        "Everything in Pro",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
        "Advanced security",
        "Team collaboration",
      ],
      popular: false,
    },
  ];

  return (
    <div className="pricing-page">
      <div className="pricing-hero">
        <h1>Choose Your Plan</h1>
        <p>
          Select the perfect plan for your cryptocurrency tracking needs
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={index}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`plan-button ${plan.popular ? "popular-btn" : ""}`}>
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and cryptocurrency payments.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a free trial?</h3>
            <p>Yes, Pro plan comes with a 14-day free trial. No credit card required.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>We offer a 30-day money-back guarantee on all paid plans.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

