import React, { useState } from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';
import ProviderLogo from '@site/src/components/ProviderLogo';

import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();
  
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>🚀</span>
              <span>Most Advanced AI Integration for WordPress</span>
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              Supercharge WordPress with 
              <span className={styles.gradientText}> Intelligent AI</span>
            </Heading>
            <p className={styles.heroSubtitle}>
              Connect 8+ AI providers, build intelligent tools, and automate workflows 
              without writing a single line of code. Enterprise-grade security with 
              WordPress-native simplicity.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Active Users</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>AI Providers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Uptime</span>
              </div>
            </div>
            <div className={styles.heroButtons}>
              <Link
                className={styles.primaryButton}
                to="/docs/getting-started">
                <span>Start Building</span>
                <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                className={styles.secondaryButton}
                href="https://github.com/artificialpoets/mcp-wp-docs">
                <svg className={styles.buttonIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageContainer}>
              <img 
                src="/img/hero-home.png"
                alt="AI-powered WordPress integration"
                className={styles.heroImage}
              />
              <div className={styles.floatingCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>🤖</div>
                  <span>AI Providers</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardStat}>
                    <span className={styles.cardNumber}>8+</span>
                    <span className={styles.cardLabel}>AI Models</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className={styles.socialProofSection}>
      <div className="container">
        <div className={styles.socialProofContent}>
          <p className={styles.socialProofText}>
            Trusted by leading WordPress agencies and developers worldwide
          </p>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              "MCP for WP transformed our content workflow. We're saving 20+ hours per week on content creation."
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>👤</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Sarah Chen</div>
                <div className={styles.authorTitle}>CTO, Digital Agency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCalculatorSection() {
  const [hoursSaved, setHoursSaved] = useState(20);
  const [monthlyCost, setMonthlyCost] = useState(5000);
  
  const calculateROI = () => {
    const hourlyRate = monthlyCost / 160; // Assuming 160 hours per month
    const weeklySavings = hoursSaved * hourlyRate;
    const monthlySavings = weeklySavings * 4;
    const annualSavings = monthlySavings * 12;
    return { weeklySavings, monthlySavings, annualSavings };
  };
  
  const { weeklySavings, monthlySavings, annualSavings } = calculateROI();
  
  return (
    <section className={styles.valueSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Calculate Your AI ROI
          </Heading>
          <p className={styles.sectionSubtitle}>
            See how much time and money MCP for WP can save your business
          </p>
        </div>
        <div className={styles.calculatorContainer}>
          <div className={styles.calculatorInputs}>
            <div className={styles.inputGroup}>
              <label>Hours saved per week</label>
              <input 
                type="range" 
                min="5" 
                max="40" 
                value={hoursSaved}
                onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                className={styles.rangeInput}
              />
              <span className={styles.rangeValue}>{hoursSaved} hours</span>
            </div>
            <div className={styles.inputGroup}>
              <label>Monthly team cost ($)</label>
              <input 
                type="number" 
                value={monthlyCost}
                onChange={(e) => setMonthlyCost(parseInt(e.target.value))}
                className={styles.numberInput}
                min="1000"
                max="50000"
                step="500"
              />
            </div>
          </div>
          <div className={styles.calculatorResults}>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}>💰</div>
              <div className={styles.resultContent}>
                <div className={styles.resultAmount}>${weeklySavings.toLocaleString()}</div>
                <div className={styles.resultLabel}>Weekly Savings</div>
              </div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}>📈</div>
              <div className={styles.resultContent}>
                <div className={styles.resultAmount}>${monthlySavings.toLocaleString()}</div>
                <div className={styles.resultLabel}>Monthly Savings</div>
              </div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}>🎯</div>
              <div className={styles.resultContent}>
                <div className={styles.resultAmount}>${annualSavings.toLocaleString()}</div>
                <div className={styles.resultLabel}>Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "🔌",
      title: "Zero-Code Integration",
      description: "Connect AI providers through an intuitive WordPress admin interface. No coding required.",
      highlight: "5-minute setup"
    },
    {
      icon: "🛠️",
      title: "Custom AI Tools",
      description: "Build and deploy AI-powered tools directly from WordPress. Create workflows that fit your exact needs.",
      highlight: "Unlimited tools"
    },
    {
      icon: "📊",
      title: "Enterprise Security",
      description: "Full control over API keys, rate limits, and usage monitoring. GDPR compliant with complete audit trails.",
      highlight: "SOC 2 ready"
    },
    {
      icon: "⚡",
      title: "High Performance",
      description: "Optimized for speed with caching, connection pooling, and intelligent request routing.",
      highlight: "99.9% uptime"
    },
    {
      icon: "🔒",
      title: "Cost Control",
      description: "Set budgets, monitor usage, and prevent unexpected charges with granular cost controls.",
      highlight: "Real-time alerts"
    },
    {
      icon: "🌐",
      title: "Multi-Provider",
      description: "Connect to 8+ AI providers simultaneously. Switch between models or use them in parallel.",
      highlight: "8+ providers"
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Build AI-Powered WordPress Sites
          </Heading>
          <p className={styles.sectionSubtitle}>
            Professional-grade AI integration with enterprise features and WordPress simplicity
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <span className={styles.featureHighlight}>{feature.highlight}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.featureCTAs}>
          <Link
            className={styles.ctaPrimaryButton}
            to="/get-in-touch">
            <span>Get in Touch</span>
            <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            className={styles.ctaSecondaryButton}
            to="/docs/getting-started">
            <span>Read the Documentation</span>
            <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why MCP for WP vs. Alternatives?
          </Heading>
          <p className={styles.sectionSubtitle}>
            See how we stack up against other AI integration solutions
          </p>
        </div>
        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <div className={styles.tableCell}>Feature</div>
            <div className={styles.tableCell}>MCP for WP</div>
            <div className={styles.tableCell}>Other Plugins</div>
            <div className={styles.tableCell}>Custom Development</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>Setup Time</div>
            <div className={styles.tableCell}>5 minutes</div>
            <div className={styles.tableCell}>30+ minutes</div>
            <div className={styles.tableCell}>Days/weeks</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>AI Providers</div>
            <div className={styles.tableCell}>8+ supported</div>
            <div className={styles.tableCell}>1-2 providers</div>
            <div className={styles.tableCell}>Custom only</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>Custom Tools</div>
            <div className={styles.tableCell}>Unlimited</div>
            <div className={styles.tableCell}>Limited</div>
            <div className={styles.tableCell}>Full control</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>Security</div>
            <div className={styles.tableCell}>Enterprise-grade</div>
            <div className={styles.tableCell}>Basic</div>
            <div className={styles.tableCell}>Your responsibility</div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>Cost</div>
            <div className={styles.tableCell}>Free + usage</div>
            <div className={styles.tableCell}>$50-200/year</div>
            <div className={styles.tableCell}>$10k+ development</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProvidersSection() {
  const providers = [
    {
      name: "OpenAI",
      models: ["GPT-4", "GPT-3.5", "DALL-E"],
      description: "Industry-leading language models and image generation",
      status: "active"
    },
    {
      name: "Anthropic",
      models: ["Claude 3.5", "Claude 3"],
      description: "Advanced reasoning and safety-focused AI",
      status: "active"
    },
    {
      name: "Google",
      models: ["Gemini Pro", "Gemini Flash"],
      description: "Multimodal AI with deep Google integration",
      status: "active"
    },
    {
      name: "Meta",
      models: ["Llama 3.1", "Llama 2"],
      description: "Open-source AI models for customization",
      status: "active"
    },
    {
      name: "Mistral",
      models: ["Mistral Large", "Mixtral"],
      description: "High-performance European AI models",
      status: "active"
    },
    {
      name: "Cohere",
      models: ["Command R+", "Command"],
      description: "Enterprise-focused language models",
      status: "active"
    },
    {
      name: "Alibaba",
      models: ["Qwen 2.5", "Qwen 2"],
      description: "Advanced Chinese language AI models",
      status: "active"
    },
    {
      name: "Self-Hosted",
      models: ["Ollama", "Local Models"],
      description: "Deploy and run AI models on your own infrastructure",
      status: "coming-soon"
    }
  ];

  return (
    <section className={styles.providersSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Connect to Any AI Provider
          </Heading>
          <p className={styles.sectionSubtitle}>
            Choose from the world's leading AI models and services
          </p>
        </div>
        <div className={styles.providersGrid}>
          {providers.map((provider, index) => (
            <div key={index} className={styles.providerCard}>
              {provider.status === "coming-soon" ? (
                <>
                  <div className={styles.providerHeader}>
                    <h3 className={styles.providerName}>{provider.name}</h3>
                    <span className={styles.comingSoon}>Coming soon</span>
                  </div>
                  <p className={styles.providerDescription}>{provider.description}</p>
                  <div className={styles.providerModels}>
                    {provider.models.map((model, modelIndex) => (
                      <span key={modelIndex} className={styles.modelTag}>
                        {model}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={`/docs/ai-providers/${provider.name.toLowerCase()}`}
                  className={styles.providerCardLink}
                >
                  <div className={styles.providerHeader}>
                    <h3 className={styles.providerName}>{provider.name}</h3>
                    <span className={styles.statusActive}>Active</span>
                  </div>
                  <p className={styles.providerDescription}>{provider.description}</p>
                  <div className={styles.providerModels}>
                    {provider.models.map((model, modelIndex) => (
                      <span key={modelIndex} className={styles.modelTag}>
                        {model}
                      </span>
                    ))}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className={styles.featureCTAs}>
          <Link
            className={styles.ctaPrimaryButton}
            to="/get-in-touch">
            <span>Get in Touch</span>
            <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            className={styles.ctaSecondaryButton}
            to="/docs/getting-started">
            <span>Read the Documentation</span>
            <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="MCP for WP - Supercharge WordPress with Intelligent AI"
      description="Connect 8+ AI providers to your WordPress site in minutes. Build intelligent tools, automate workflows, and enhance user experiences without complex coding."
      >
      <main className={styles.main}>
        <HeroSection />
        <SocialProofSection />
        {/* <ValueCalculatorSection /> */}
        <FeaturesSection />
        <ComparisonSection />
        <ProvidersSection />
      </main>
    </Layout>
  );
}
