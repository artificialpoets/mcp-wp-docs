---
title: Supported AI Models
description: Complete guide to all supported AI providers and their models in MCP for WP
---

# Supported AI Models

MCP for WP supports integration with **7 major AI providers**, giving you access to the most advanced language models available today. Each provider offers unique capabilities, pricing models, and performance characteristics.

## <strong>📊 Provider Overview</strong>

<MermaidDiagram
  title="AI Providers and Use Cases"
  chart={`
graph LR
    OpenAI["OpenAI"] --> Content["Content Generation"]
    OpenAI --> Code["Code Assistance"]
    OpenAI --> Analysis["Data Analysis"]
    Anthropic["Anthropic (Claude)"] --> Analysis
    Anthropic --> Writing["Creative Writing"]
    Gemini["Gemini"] --> Content
    Gemini --> Analysis
    Gemini --> Translation["Translation"]
    Llama["Llama"] --> Content
    Llama --> Code
    Mistral["Mistral"] --> Content
    Mistral --> Analysis
    Cohere["Cohere"] --> Summarization["Summarization"]
    Cohere --> Content
    Qwen["Qwen"] --> Translation
    Qwen --> Content
  `}
/>

## <strong>🏆 Provider Comparison</strong>

| Provider | Best For | Pricing | Speed | Context Window | Latest Models |
|----------|----------|---------|-------|----------------|---------------|
| **OpenAI** | General purpose, coding | Pay-per-token | Fast | 128K tokens | GPT-4 Turbo |
| **Anthropic (Claude)** | Analysis, reasoning | Pay-per-token | Medium | 200K tokens | Claude 3 Opus |
| **Gemini** | Multimodal, research | Pay-per-token | Fast | 1M tokens | Gemini 1.5 Pro |
| **Llama** | Open source, cost-effective | Variable | Fast | 32K tokens | Llama 3 70B |
| **Mistral** | European compliance | Pay-per-token | Fast | 32K tokens | Mistral Large |
| **Cohere** | Enterprise, RAG | Pay-per-token | Fast | 128K tokens | Command R+ |
| **Qwen** | Multilingual, cost-effective | Pay-per-token | Fast | 32K tokens | Qwen Max |

## <strong>🎯 Quick Start Guide</strong>

### 1. Choose Your Provider
   - Consider your use case, budget, and compliance requirements
   - Review the detailed provider guides below
   - Check pricing and rate limits

### 2. Get API Access
   - Sign up for the provider's developer account
   - Generate your API key
   - Note any usage limits or restrictions

### 3. Configure in MCP for WP
   - Go to **MCP for WP > Settings**
   - Enter your API key
   - Test the connection
   - Select your preferred model

### 4. Create Your First Tool
   - Navigate to **MCP for WP > Add New Tool**
   - Choose your provider and model
   - Define input/output schemas
   - Test and deploy

## <strong>📚 Detailed Provider Guides</strong>

### [OpenAI Models](../AIProviders/openai)
The most widely-used AI provider with powerful models for general-purpose tasks.

**Key Features:**
- Industry-leading performance
- Extensive documentation and community support
- Reliable API with high uptime
- Strong coding and reasoning capabilities

### [Anthropic (Claude) Models](../ai-providers/claude)
Anthropic's safety-focused models with exceptional reasoning abilities.

**Key Features:**
- Superior reasoning and analysis
- Large context windows (up to 200K tokens)
- Safety-focused training
- Excellent for complex problem-solving

### [Gemini Models](../AIProviders/gemini)
Google's multimodal models with massive context windows.

**Key Features:**
- Multimodal capabilities (text, images, audio)
- Massive context windows (up to 1M tokens)
- Strong research and analysis abilities
- Competitive pricing

### [Llama Models](../AIProviders/llama)
Open-source models available through multiple hosting providers.

**Key Features:**
- Open-source foundation
- Multiple hosting options (Groq, Replicate, custom)
- Cost-effective for high-volume usage
- Customizable and self-hostable

### [Mistral Models](../AIProviders/mistral)
European AI models with strong performance and compliance.

**Key Features:**
- European data compliance
- Strong multilingual capabilities
- Competitive pricing
- Fast inference speeds

### [Cohere Models](../AIProviders/cohere)
Enterprise-focused models with excellent RAG capabilities.

**Key Features:**
- Specialized in retrieval-augmented generation (RAG)
- Strong enterprise features
- Excellent for document processing
- Reliable API with good uptime

### [Qwen Models](../AIProviders/qwen)
Alibaba's multilingual models with competitive pricing.

**Key Features:**
- Strong multilingual support
- Cost-effective pricing
- Good performance for Asian languages
- Reliable API infrastructure

## <strong>🔧 Common Parameters</strong>

All providers support these common parameters (with provider-specific variations):

### Core Parameters
- **Model**: The specific AI model to use
- **Max Tokens**: Maximum length of the response
- **Temperature**: Controls randomness (0.0 = deterministic, 1.0 = creative)

### Advanced Parameters
- **Top P**: Nucleus sampling for response diversity
- **Frequency Penalty**: Reduces repetition
- **Presence Penalty**: Encourages new topics
- **Stop Sequences**: Custom stopping conditions

## <strong>💡 Best Practices</strong>

### Model Selection
- **Start with the default model** for each provider
- **Upgrade for complex tasks** that require more capability
- **Consider cost vs. performance** for high-volume usage
- **Test multiple models** to find the best fit for your use case

### Parameter Tuning
- **Use lower temperature (0.1-0.3)** for factual tasks
- **Use higher temperature (0.7-0.9)** for creative tasks
- **Set appropriate max tokens** to control response length
- **Monitor usage and costs** regularly

### Error Handling
- **Implement retry logic** for transient failures
- **Handle rate limits** gracefully
- **Log errors** for debugging
- **Provide fallback options** when possible

## <strong>🔗 Additional Resources</strong>

- [API Rate Limits Guide](../guides/rate-limits)
- [Cost Optimization Tips](../guides/cost-optimization)
- [Model Performance Benchmarks](../reference/benchmarks)
- [Troubleshooting Common Issues](../guides/troubleshooting)

## <strong>📞 Support</strong>

If you need help with a specific provider:

1. **Check the provider's official documentation** (linked in each guide)
2. **Review our troubleshooting guide** for common issues
3. **Test your API key** using the connection test feature
4. **Check the execution logs** for detailed error information

---

**Ready to get started?** Choose a provider from the list above and follow the detailed setup guide! 