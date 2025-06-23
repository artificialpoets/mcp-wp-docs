---
title: Provider Integrations
---

# 🔌 Provider Integrations

MCP for WP (Model Control Protocol for WordPress) is your gateway to the world of AI, offering seamless integration with a broad spectrum of leading AI providers. Whether you need cutting-edge commercial models or flexible open-source solutions, MCP for WP (Model Control Protocol for WordPress) empowers you to choose the best fit for every use case—all from a single, unified interface.

## <strong>✅ Supported Providers</strong>

MCP for WP (Model Control Protocol for WordPress) natively supports a growing list of top-tier AI providers, giving you the freedom to mix and match the right model for each tool you build:

- **OpenAI**: Industry leader with GPT-4, GPT-3.5, and more for general-purpose, coding, and creative tasks.
- **Anthropic (Claude)**: Safety-focused models with exceptional reasoning and large context windows.
- **Google Gemini**: Multimodal models (text, images, audio) with massive context windows and research-grade performance.
- **Llama**: Open-source models from Meta, available via self-hosting or cloud providers like Together AI and Replicate.
- **Mistral**: European AI models with strong multilingual support, compliance, and open-source options.
- **Cohere**: Enterprise-grade models specializing in retrieval-augmented generation (RAG) and multilingual tasks.
- **Qwen**: Alibaba's multilingual models, offering cost-effective, high-performance options for global use cases.

> 💡 **Always Evolving:** We're committed to expanding our integrations. New providers and models are added regularly—check our documentation and release notes for the latest updates!

## <strong>⚙️ How to Configure a Provider</strong>

Getting started with any provider is simple and secure:

1. **Navigate to Settings:** In your WordPress admin, go to **MCP for WP (Model Control Protocol for WordPress) > Settings**.
2. **Enter Your API Key:** Add your API keys for any providers you wish to use. You can connect as many as you like.
3. **Provider-Specific Options:** Some providers (like Azure OpenAI, Together AI, or Replicate) may require extra details such as region, deployment ID, or custom endpoints. These can be configured in the same settings area.
4. **Save and Test:** Save your settings and use the built-in connection test to ensure everything is working.
5. **Select Provider per Tool:** When creating or editing a tool, simply choose your preferred provider and model from the dropdown menu.

## <strong>📊 Provider Selection Process</strong>

This flexible, modular approach means you can:
- Use OpenAI for coding tools, Gemini for multimodal research, Llama for open-source projects, and more—all in one site.
- Switch providers at any time, or run A/B tests to compare results.
- Future-proof your workflows as new models and providers become available.

<MermaidDiagram 
  title="Provider Integration Flow"
  chart={`
flowchart TD
    A[Configure API Keys] --> B{Select Provider for Tool}
    B --> C[OpenAI]
    B --> D[Claude]
    B --> E[Gemini]
    B --> F[Llama]
    B --> G[Mistral]
    B --> H[Cohere]
    B --> I[Qwen]

    C --> J[Execute Tool]
    D --> J
    E --> J
    F --> J
    G --> J
    H --> J
    I --> J

    J --> K[Process Response]
  `}
/>

## <strong>⚠️ Important Considerations</strong>

- **Capabilities & Pricing:** Each provider offers unique features, pricing, and rate limits. Review their official docs for details.
- **API Key Security:** Keep your API keys safe—use environment variables or secure storage, and rotate keys as needed.
- **Provider-Specific Settings:** Some providers may require additional configuration (e.g., region, endpoint, or deployment ID).

---

With MCP for WP (Model Control Protocol for WordPress), you're always in control—choose the best AI for every job, and adapt as the landscape evolves. Ready to build? Head to your settings and start connecting the world's best AI models today! 