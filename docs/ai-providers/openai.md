---
title: OpenAI Models
description: Complete guide to using OpenAI models (GPT-4, GPT-3.5) with MCP for WP
---

# 🔵 OpenAI Models

OpenAI is the industry leader in AI language models, offering the most widely-used and well-documented AI APIs. Their models excel at general-purpose tasks, coding, reasoning, and creative writing.

## <strong>🏆 Why Choose OpenAI?</strong>

<MermaidDiagram
  title="OpenAI Advantages"
  chart={`
graph LR
    A[OpenAI Advantages] --> B[Industry Leading Performance]
    A --> C[Extensive Documentation]
    A --> D[Reliable API]
    A --> E[Strong Community Support]
    A --> F[Advanced Capabilities]
    
    B --> G[Best-in-class reasoning]
    C --> H[Comprehensive guides & examples]
    D --> I[99.9% uptime SLA]
    E --> J[Large developer community]
    F --> K[Coding, analysis, creativity]
  `}
/>

## <strong>📊 Available Models</strong>

| Model | Context Window | Best For | Input Cost | Output Cost |
|-------|----------------|----------|------------|-------------|
| **GPT-4 Turbo** | 128K tokens | Complex reasoning, coding | $0.01/1K tokens | $0.03/1K tokens |
| **GPT-4** | 8K tokens | Advanced tasks | $0.03/1K tokens | $0.06/1K tokens |
| **GPT-3.5 Turbo** | 16K tokens | General purpose, cost-effective | $0.0015/1K tokens | $0.002/1K tokens |
| **GPT-3.5 Turbo 16K** | 16K tokens | Longer conversations | $0.003/1K tokens | $0.004/1K tokens |

## <strong>🚀 Getting Started</strong>

### Step 1: Create OpenAI Account

1. **Visit [OpenAI Platform](https://platform.openai.com/)**
2. **Sign up** with your email or Google/Microsoft account
3. **Verify your email** address
4. **Complete identity verification** (required for API access)

### Step 2: Add Payment Method

<MermaidDiagram
  title="OpenAI Payment Setup"
  chart={`
graph TD
    A[OpenAI Account] --> B[Add Payment Method]
    B --> C[Credit Card]
    B --> D[PayPal]
    B --> E[Bank Transfer]
    C --> F[Instant Activation]
    D --> F
    E --> G[1-3 Business Days]
  `}
/>

**Important:** OpenAI requires a valid payment method to use the API, even for free tier usage.

### Step 3: Generate API Key

1. **Navigate to [API Keys](https://platform.openai.com/api-keys)**
2. **Click "Create new secret key"**
3. **Give it a descriptive name** (e.g., "MCP for WP Production")
4. **Copy the key immediately** (you won't see it again)
5. **Store it securely** (use a password manager)

### Step 4: Configure in MCP for WP

1. **Go to MCP for WP > Settings**
2. **Find the "OpenAI API Key" field**
3. **Paste your API key**
4. **Click "Test Connection"** to verify
5. **Save settings**

## <strong>⚙️ Model Configuration</strong>

### Default Settings

```json
{
  "model": "gpt-3.5-turbo",
  "max_tokens": 1000,
  "temperature": 0.7,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0
}
```

### Parameter Guide

#### **Model Selection**
- **`gpt-4-turbo`**: Best for complex reasoning, coding, analysis
- **`gpt-4`**: High-quality responses, smaller context
- **`gpt-3.5-turbo`**: Cost-effective, good for most tasks
- **`gpt-3.5-turbo-16k`**: Longer conversations, same quality

#### **Max Tokens**
- **Range**: 1 to 4096 (GPT-3.5) or 4096 (GPT-4)
- **Recommendation**: Start with 1000, adjust based on needs
- **Cost Impact**: Higher values = more expensive responses

#### **Temperature**
- **Range**: 0.0 to 2.0
- **0.0**: Deterministic, consistent responses
- **0.7**: Balanced creativity and consistency
- **1.0+**: More creative, varied responses

#### **Top P (Nucleus Sampling)**
- **Range**: 0.0 to 1.0
- **1.0**: Consider all tokens equally
- **0.9**: Consider top 90% of probability mass
- **Use with temperature** for fine-tuned control

#### **Frequency Penalty**
- **Range**: -2.0 to 2.0
- **Positive values**: Reduce repetition
- **Negative values**: Allow more repetition
- **0.0**: No penalty

#### **Presence Penalty**
- **Range**: -2.0 to 2.0
- **Positive values**: Encourage new topics
- **Negative values**: Stay on current topic
- **0.0**: No penalty

## <strong>💰 Pricing & Usage</strong>

### Cost Calculator

<MermaidDiagram
  title="OpenAI Cost Calculation"
  chart={`
graph LR
    A[Input Tokens] --> B[Cost Calculation]
    C[Output Tokens] --> B
    B --> D[Total Cost]
    
    E[GPT-3.5 Turbo] --> F[$0.0015/1K input]
    E --> G[$0.002/1K output]
    
    H[GPT-4 Turbo] --> I[$0.01/1K input]
    H --> J[$0.03/1K output]
  `}
/>

### Usage Limits

| Plan | Rate Limit | Monthly Limit |
|------|------------|---------------|
| **Free Tier** | 3 requests/minute | $5 credit/month |
| **Pay-as-you-go** | 3,500 requests/minute | No limit |
| **Enterprise** | Custom | Custom |

### Cost Optimization Tips

1. **Use GPT-3.5 Turbo** for most tasks
2. **Set appropriate max_tokens** to avoid over-generation
3. **Use lower temperature** for factual tasks
4. **Monitor usage** in OpenAI dashboard
5. **Implement caching** for repeated requests

## <strong>🔧 Advanced Configuration</strong>

### Custom System Messages

```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful coding assistant specialized in WordPress development."
    },
    {
      "role": "user",
      "content": "How do I create a custom post type?"
    }
  ]
}
```

### Function Calling

```json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "What's the weather in New York?"
    }
  ],
  "functions": [
    {
      "name": "get_weather",
      "description": "Get current weather for a location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "City name"
          }
        },
        "required": ["location"]
      }
    }
  ]
}
```

### Streaming Responses

```javascript
// For real-time responses
const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "Tell me a story" }],
  stream: true
});
```

## <strong>🛠️ Use Cases & Examples</strong>

### Content Generation

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "topic": {
        "type": "string",
        "description": "Blog post topic"
      },
      "tone": {
        "type": "string",
        "enum": ["professional", "casual", "technical"],
        "description": "Writing tone"
      },
      "length": {
        "type": "string",
        "enum": ["short", "medium", "long"],
        "description": "Content length"
      }
    },
    "required": ["topic"]
  }
}
```

**Recommended Settings:**
- **Model**: `gpt-4-turbo`
- **Temperature**: 0.7
- **Max Tokens**: 2000

### Code Generation

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "language": {
        "type": "string",
        "description": "Programming language"
      },
      "task": {
        "type": "string",
        "description": "What the code should do"
      },
      "framework": {
        "type": "string",
        "description": "Framework (optional)"
      }
    },
    "required": ["language", "task"]
  }
}
```

**Recommended Settings:**
- **Model**: `gpt-4-turbo`
- **Temperature**: 0.1
- **Max Tokens**: 1500

### Data Analysis

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "string",
        "description": "Data to analyze"
      },
      "analysis_type": {
        "type": "string",
        "enum": ["summary", "trends", "insights"],
        "description": "Type of analysis"
      }
    },
    "required": ["data", "analysis_type"]
  }
}
```

**Recommended Settings:**
- **Model**: `gpt-4-turbo`
- **Temperature**: 0.3
- **Max Tokens**: 1000

## <strong>🔍 Troubleshooting</strong>

### Common Issues

#### **"Invalid API Key" Error**
- **Cause**: Incorrect or expired API key
- **Solution**: Regenerate API key in OpenAI dashboard
- **Prevention**: Store keys securely, rotate regularly

#### **"Rate Limit Exceeded" Error**
- **Cause**: Too many requests per minute
- **Solution**: Implement exponential backoff
- **Prevention**: Monitor usage, implement rate limiting

#### **"Context Length Exceeded" Error**
- **Cause**: Input too long for model context
- **Solution**: Reduce input length or use larger context model
- **Prevention**: Set appropriate max_tokens

#### **"Model Not Found" Error**
- **Cause**: Model name typo or unavailable model
- **Solution**: Check model name spelling
- **Prevention**: Use model list from API

### Debugging Tips

1. **Check API key** in OpenAI dashboard
2. **Monitor usage** and billing
3. **Review request logs** in MCP for WP
4. **Test with OpenAI Playground** first
5. **Check rate limits** and quotas

## <strong>📚 Additional Resources</strong>

### Official Documentation
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [API Reference](https://platform.openai.com/docs/api-reference)
- [Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)
- [Safety Guidelines](https://platform.openai.com/docs/guides/safety-best-practices)

### Community Resources
- [OpenAI Community Forum](https://community.openai.com/)
- [GitHub Examples](https://github.com/openai/openai-cookbook)
- [Discord Community](https://discord.gg/openai)

### Pricing & Billing
- [Pricing Calculator](https://openai.com/pricing)
- [Usage Dashboard](https://platform.openai.com/usage)
- [Billing FAQ](https://help.openai.com/en/articles/7039783-how-does-billing-work)

## <strong>🔐 Security Best Practices</strong>

1. **Never expose API keys** in client-side code
2. **Use environment variables** for key storage
3. **Implement rate limiting** to prevent abuse
4. **Monitor usage** for unusual patterns
5. **Rotate keys** regularly
6. **Use least privilege** access

## <strong>📞 Support</strong>

### OpenAI Support
- **Help Center**: [help.openai.com](https://help.openai.com/)
- **Email Support**: Available for paid users
- **Community Forum**: [community.openai.com](https://community.openai.com/)

### MCP for WP Support
- **Documentation**: This guide and related pages
- **GitHub Issues**: Report bugs or request features
- **Community**: Join our Discord for help

---

**Ready to get started?** [Configure your OpenAI integration](../guides/setup-openai) or [explore other providers](./index)! 