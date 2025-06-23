---
title: Mistral Models
description: Complete guide to using Mistral AI models with MCP for WP
---

# 🟣 Mistral Models

Mistral AI offers some of the most efficient and powerful language models available, known for their excellent performance-to-size ratio and multilingual capabilities. Their models excel at reasoning, coding, and creative tasks.

## <strong>🌟 Why Choose Mistral?</strong>

<MermaidDiagram
  title="Mistral Advantages"
  chart={`
graph LR
    A[Mistral Advantages] --> B[Efficient Performance]
    A --> C[Multilingual Support]
    A --> D[Strong Reasoning]
    A --> E[Cost Effective]
    A --> F[Open Source Options]
    
    B --> G[Smaller, faster models]
    C --> H[100+ languages]
    D --> I[Excellent logic]
    E --> J[Lower costs]
    F --> K[Mixtral 8x7B]
  `}
/>

## <strong>📊 Available Models</strong>

| Model | Parameters | Context Window | Best For | Pricing |
|-------|------------|----------------|----------|---------|
| **Mistral Large** | 32B | 32K tokens | Complex reasoning, enterprise | $7/1M input, $24/1M output |
| **Mistral Medium** | 7B | 32K tokens | General purpose, cost-effective | $2.5/1M input, $7.5/1M output |
| **Mistral Small** | 7B | 32K tokens | Fast inference, simple tasks | $0.14/1M input, $0.42/1M output |
| **Mixtral 8x7B** | 47B | 32K tokens | Open source, self-hostable | Free (self-host) |

**Source:** [Mistral AI Pricing](https://mistral.ai/pricing/)

## <strong>🚀 Getting Started</strong>

### Option 1: Mistral AI Cloud (Recommended)

#### Step 1: Create Mistral AI Account

1. **Visit [Mistral AI Console](https://console.mistral.ai/)**
2. **Sign up** with your email
3. **Verify your account**
4. **Complete profile setup**

#### Step 2: Get API Key

1. **Go to [API Keys section](https://console.mistral.ai/api-keys/)**
2. **Click "Create new key"**
3. **Give it a descriptive name**
4. **Copy the key and store securely**

#### Step 3: Configure in MCP for WP

1. **Go to MCP for WP > Settings**
2. **Set Provider to "Mistral"**
3. **Enter your API key**
4. **Select default model** (e.g., `mistral-medium`)
5. **Click "Test Connection"**
6. **Save settings**

### Option 2: Self-Hosting Mixtral

#### Step 1: Install Ollama

```bash
# macOS/Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Windows
# Download from https://ollama.ai/download
```

#### Step 2: Pull Mixtral Model

```bash
# Pull Mixtral 8x7B
ollama pull mixtral:8x7b

# Or Mixtral 8x7B Instruct
ollama pull mixtral:8x7b-instruct
```

#### Step 3: Start Ollama Server

```bash
ollama serve
```

#### Step 4: Configure in MCP for WP

1. **Set Provider to "Mistral"**
2. **Set API Endpoint**: `http://localhost:11434`
3. **Set Model**: `mixtral:8x7b-instruct`
4. **Test connection**

## <strong>⚙️ Model Configuration</strong>

### Default Settings

```json
{
  "model": "mistral-medium",
  "max_tokens": 2048,
  "temperature": 0.7,
  "top_p": 1.0,
  "random_seed": null
}
```

### Parameter Guide

#### **Model Selection**
- **`mistral-large`**: Best for complex reasoning, enterprise use
- **`mistral-medium`**: Balanced performance and cost
- **`mistral-small`**: Fast, cost-effective for simple tasks
- **`mixtral:8x7b-instruct`**: Self-hosted option

#### **Max Tokens**
- **Range**: 1 to 32768 (varies by model)
- **Recommendation**: Start with 2048, adjust as needed

#### **Temperature**
- **Range**: 0.0 to 1.0
- **0.0**: Deterministic
- **0.7**: Balanced
- **1.0**: Creative

#### **Top P**
- **Range**: 0.0 to 1.0
- **1.0**: All tokens
- **0.9**: Top 90% probability mass

#### **Random Seed**
- **null**: Random (default)
- **Integer**: Reproducible results

## <strong>💰 Pricing & Usage</strong>

### Mistral AI Cloud Pricing

| Model | Input Cost | Output Cost | Free Tier |
|-------|------------|-------------|-----------|
| **Mistral Large** | $7/1M tokens | $24/1M tokens | $20 credit |
| **Mistral Medium** | $2.5/1M tokens | $7.5/1M tokens | $20 credit |
| **Mistral Small** | $0.14/1M tokens | $0.42/1M tokens | $20 credit |

### Self-Hosting Costs

| Model | RAM Required | GPU Required | Monthly Cost |
|-------|--------------|--------------|--------------|
| **Mixtral 8x7B** | 48GB | Recommended | $0-200 |

### Cost Optimization Tips

1. **Use Mistral Small** for simple tasks
2. **Choose appropriate model** for task complexity
3. **Monitor token usage**
4. **Self-host** for high-volume usage

## <strong>🔧 Advanced Configuration</strong>

### System Instructions

```json
{
  "system_instruction": "You are a helpful assistant."
}
```

### Function Calling

```json
{
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get weather information",
        "parameters": {
          "type": "object",
          "properties": {
            "location": { "type": "string" }
          }
        }
      }
    }
  ]
}
```

### Streaming Responses

```json
{
  "stream": true
}
```

## <strong>🛠️ Use Cases & Examples</strong>

### Complex Reasoning

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "problem": { "type": "string", "description": "Complex problem to solve" },
      "approach": { "type": "string", "enum": ["step-by-step", "creative", "analytical"] }
    },
    "required": ["problem"]
  }
}
```

**Recommended Settings:**
- **Model**: `mistral-large`
- **Temperature**: 0.3
- **Max Tokens**: 4096

### Multilingual Content

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "text": { "type": "string", "description": "Text to process" },
      "source_language": { "type": "string", "description": "Source language" },
      "target_language": { "type": "string", "description": "Target language" },
      "task": { "type": "string", "enum": ["translate", "summarize", "analyze"] }
    },
    "required": ["text", "target_language"]
  }
}
```

**Recommended Settings:**
- **Model**: `mistral-medium`
- **Temperature**: 0.5
- **Max Tokens**: 2048

### Code Generation

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "language": { "type": "string", "description": "Programming language" },
      "task": { "type": "string", "description": "What to code" },
      "style": { "type": "string", "enum": ["clean", "commented", "optimized"] }
    },
    "required": ["language", "task"]
  }
}
```

**Recommended Settings:**
- **Model**: `mistral-medium`
- **Temperature**: 0.3
- **Max Tokens**: 2048

## <strong>🔍 Troubleshooting</strong>

### Common Issues

- **API Key Invalid**: Check Mistral AI console
- **Rate Limit Exceeded**: Check usage limits
- **Model Not Available**: Verify model name
- **Connection Failed**: Check network connectivity

### Debugging Tips

1. **Check API key** in Mistral AI console
2. **Monitor usage** and billing
3. **Review request logs** in MCP for WP
4. **Test with Mistral AI playground**
5. **Check quotas and limits**

### Performance Optimization

1. **Choose appropriate model size**
2. **Optimize prompt length**
3. **Use streaming** for long responses
4. **Cache responses** when possible

## <strong>📚 Additional Resources</strong>

- [Mistral AI Documentation](https://docs.mistral.ai/)
- [Mistral AI Console](https://console.mistral.ai/)
- [Mixtral Model](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1)
- [Ollama Mixtral](https://ollama.ai/library/mixtral)
- [API Reference](https://docs.mistral.ai/api/)

## <strong>🔐 Security Best Practices</strong>

- Keep API keys secure
- Monitor usage for anomalies
- Use environment variables
- Implement rate limiting
- Regular security audits

## <strong>📞 Support</strong>

- [Mistral AI Support](https://mistral.ai/contact/)
- [Mistral Community](https://discord.gg/mistralai)
- [MCP for WP Docs](../SupportedModels)

---

**Ready to get started?** [Configure your Mistral integration](../guides/setup-mistral) or [explore other providers](./index)!
