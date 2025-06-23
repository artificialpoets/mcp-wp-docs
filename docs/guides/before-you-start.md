---
title: Before You Start
---

# ✅ Before You Start

Welcome to the world of AI-powered tools in WordPress! Before you jump in and start creating, let's go over a few key things to ensure you have a smooth and successful experience with MCP for WP.

## <strong>📋 Essential Prerequisites</strong>

Please make sure your WordPress environment meets the following minimum requirements:

-   **WordPress Version**: 5.8 or higher
-   **PHP Version**: 7.4 or higher
-   **API Key**: You will need an active API key from at least one of our [supported AI providers](./provider-integrations.md).

## <strong>🚀 The Typical Workflow</strong>

Getting started with MCP for WP generally follows this path. Understanding this flow will help you know what to expect.

<MermaidDiagram
  title="MCP for WP Workflow"
  chart={`
graph TD;
    A[Step 1: Install & Activate Plugin] --> B[Step 2: Add Provider API Keys in Settings];
    B --> C[Step 3: Create Your First AI Tool];
    C --> D[Step 4: Test the Tool Thoroughly];
    D --> E[Step 5: Integrate via Shortcode or REST API];
    E --> F[Step 6: Monitor & Optimize with Logs];
  `}
/>

## <strong>🧠 Key Terminology to Understand</strong>

To get the most out of this documentation, it's helpful to be familiar with a few core concepts. We've prepared a full [Glossary](../getting-started/glossary), but here are the absolute essentials:

-   **Tool**: A custom AI-powered function that you create and manage. This is the central concept of MCP for WP.
-   **Provider**: The third-party AI service (like OpenAI) that powers your tool.
-   **Schema**: The structured format (in JSON) that defines the inputs your tool requires and the output it will produce.

## <strong>📚 Recommended Reading</strong>

To give you a solid foundation, we highly recommend reading through these core concept pages before you start building:

1.  [**What is MCP for WP?**](../core-concepts/whats-mcp) - Understand the purpose and vision behind the plugin.
2.  [**Understanding LLMs**](../core-concepts/llm-basics) - Learn the basics of how Large Language Models work.
3.  [**Provider Integrations**](./provider-integrations) - See which AI providers we support and how to connect them.

Once you've reviewed these materials, you'll be well-prepared to start your journey with MCP for WP. Let's begin! 