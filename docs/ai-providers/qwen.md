---
title: Qwen Models
description: Complete guide to using Alibaba Cloud Qwen models with MCP for WP
---

# 🔴 Qwen Models

Qwen (通义千问) is Alibaba Cloud's family of large language models, offering excellent performance in both Chinese and English, with strong capabilities in reasoning, coding, and creative tasks. Qwen models are known for their efficiency and multilingual support.

## <strong>🌟 Why Choose Qwen?</strong>

<MermaidDiagram
  title="Qwen Advantages"
  chart={`
graph LR
    A[Qwen Advantages] --> B[Strong Performance]
    A --> C[Multilingual Support]
    A --> D[Cost Effective]
    A --> E[Regular Updates]
    A --> F[Open Source]
    
    B --> G[Competitive benchmarks]
    C --> H[Chinese + English]
    D --> I[Lower pricing]
    E --> J[Active development]
    F --> K[Qwen2 models]
  `}
/>

## <strong>📊 Available Models</strong>

| Model | Parameters | Context Window | Best For | Pricing |
|-------|------------|----------------|----------|---------|
| **Qwen2.5 72B** | 72B | 32K tokens | High-quality, complex tasks | $0.60/1M input, $2.40/1M output |
| **Qwen2.5 32B** | 32B | 32K tokens | Balanced performance | $0.30/1M input, $1.20/1M output |
| **Qwen2.5 14B** | 14B | 32K tokens | Fast, cost-effective | $0.15/1M input, $0.60/1M output |
| **Qwen2.5 7B** | 7B | 32K tokens | Lightweight tasks | $0.08/1M input, $0.32/1M output |
| **Qwen2.5 1.5B** | 1.5B | 32K tokens | Ultra-fast inference | $0.02/1M input, $0.08/1M output |

**Source:** [Alibaba Cloud Qwen Pricing](https://www.alibabacloud.com/product/dashscope)

## <strong>🚀 Getting Started</strong>

### Option 1: Alibaba Cloud DashScope (Recommended)

#### Step 1: Create Alibaba Cloud Account

1. **Visit [Alibaba Cloud Console](https://account.alibabacloud.com/)**
2. **Sign up** with your email
3. **Verify your account**
4. **Complete profile setup**

#### Step 2: Enable DashScope Service

1. **Go to [DashScope Console](https://dashscope.console.aliyun.com/)**
2. **Enable the service**
3. **Set up billing** (required for API access)

#### Step 3: Get API Key

1. **Go to [API Keys section](https://dashscope.console.aliyun.com/apiKey)**
2. **Click "Create API Key"**
3. **Give it a descriptive name**
4. **Copy the key and store securely**

#### Step 4: Configure in MCP for WP

1. **Go to MCP for WP > Settings**
2. **Set Provider to "Qwen"**
3. **Enter your API key**
4. **Select default model** (e.g., `qwen2.5-14b`)
5. **Click "Test Connection"**
6. **Save settings**

### Option 2: Self-Hosting Qwen2

#### Step 1: Install Ollama

```bash
# macOS/Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Windows
# Download from https://ollama.ai/download
```

#### Step 2: Pull Qwen Model

```bash
# Pull Qwen2.5 7B
ollama pull qwen2.5:7b

# Or Qwen2.5 14B
ollama pull qwen2.5:14b
```

#### Step 3: Start Ollama Server

```bash
ollama serve
```

#### Step 4: Configure in MCP for WP

1. **Set Provider to "Qwen"**
2. **Set API Endpoint**: `http://localhost:11434`
3. **Set Model**: `qwen2.5:7b`
4. **Test connection**

## <strong>⚙️ Model Configuration</strong>

### Default Settings

```json
{
  "model": "qwen2.5-14b",
  "max_tokens": 2048,
  "temperature": 0.7,
  "top_p": 0.9,
  "top_k": 40,
  "repetition_penalty": 1.1
}
```

### Parameter Guide

#### **Model Selection**
- **`qwen2.5-72b`**: Best for complex reasoning, high-quality outputs
- **`qwen2.5-32b`**: Balanced performance and cost
- **`qwen2.5-14b`**: Good for most tasks, cost-effective
- **`qwen2.5-7b`**: Fast, lightweight tasks
- **`qwen2.5-1.5b`**: Ultra-fast, simple tasks

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

#### **Top K**
- **Range**: 1 to 100
- **40**: Good balance
- **Lower**: More focused
- **Higher**: More diverse

#### **Repetition Penalty**
- **Range**: 1.0 to 2.0
- **1.0**: No penalty
- **1.1**: Slight penalty
- **Higher**: Stronger penalty

## <strong>💰 Pricing & Usage</strong>

### Alibaba Cloud DashScope Pricing

| Model | Input Cost | Output Cost | Free Tier |
|-------|------------|-------------|-----------|
| **Qwen2.5 72B** | $0.60/1M tokens | $2.40/1M tokens | $10 credit |
| **Qwen2.5 32B** | $0.30/1M tokens | $1.20/1M tokens | $10 credit |
| **Qwen2.5 14B** | $0.15/1M tokens | $0.60/1M tokens | $10 credit |
| **Qwen2.5 7B** | $0.08/1M tokens | $0.32/1M tokens | $10 credit |
| **Qwen2.5 1.5B** | $0.02/1M tokens | $0.08/1M tokens | $10 credit |

### Self-Hosting Costs

| Model | RAM Required | GPU Required | Monthly Cost |
|-------|--------------|--------------|--------------|
| **Qwen2.5 72B** | 144GB | Required | $300-800 |
| **Qwen2.5 32B** | 64GB | Recommended | $150-400 |
| **Qwen2.5 14B** | 28GB | Optional | $50-150 |
| **Qwen2.5 7B** | 14GB | Optional | $20-80 |
| **Qwen2.5 1.5B** | 3GB | No | $0-30 |

### Cost Optimization Tips

1. **Use smaller models** for simple tasks
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

### Multilingual Support

Qwen excels at Chinese and English. Configure your tool for multilingual use:

```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "text": { "type": "string", "description": "Text to process" },
      "language": { "type": "string", "enum": ["auto", "zh", "en"] }
    },
    "required": ["text"]
  }
}
```

## <strong>🛠️ Use Cases & Examples</strong>

### Chinese-English Translation

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "text": { "type": "string", "description": "Text to translate" },
      "source_language": { "type": "string", "enum": ["zh", "en"] },
      "target_language": { "type": "string", "enum": ["zh", "en"] },
      "style": { "type": "string", "enum": ["formal", "casual", "technical"] }
    },
    "required": ["text", "target_language"]
  }
}
```

**Recommended Settings:**
- **Model**: `qwen2.5-14b`
- **Temperature**: 0.3
- **Max Tokens**: 1024

### Code Generation

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "language": { "type": "string", "description": "Programming language" },
      "task": { "type": "string", "description": "What to code" },
      "complexity": { "type": "string", "enum": ["simple", "medium", "complex"] }
    },
    "required": ["language", "task"]
  }
}
```

**Recommended Settings:**
- **Model**: `qwen2.5-14b`
- **Temperature**: 0.3
- **Max Tokens**: 2048

### Content Analysis

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "content": { "type": "string", "description": "Content to analyze" },
      "analysis_type": { "type": "string", "enum": ["sentiment", "summary", "keywords"] },
      "language": { "type": "string", "enum": ["auto", "zh", "en"] }
    },
    "required": ["content", "analysis_type"]
  }
}
```

**Recommended Settings:**
- **Model**: `qwen2.5-7b`
- **Temperature**: 0.3
- **Max Tokens**: 1024

## <strong>🔍 Troubleshooting</strong>

### Common Issues

- **API Key Invalid**: Check Alibaba Cloud console
- **Rate Limit Exceeded**: Check usage limits
- **Model Not Available**: Verify model name
- **Connection Failed**: Check network connectivity

### Debugging Tips

1. **Check API key** in Alibaba Cloud console
2. **Monitor usage** and billing
3. **Review request logs** in MCP for WP
4. **Test with DashScope playground**
5. **Check quotas and limits**

### Performance Optimization

1. **Choose appropriate model size**
2. **Optimize prompt length**
3. **Use caching** when possible
4. **Implement rate limiting**

## <strong>📚 Additional Resources</strong>

- [Alibaba Cloud DashScope](https://www.alibabacloud.com/product/dashscope)
- [Qwen Documentation](https://help.aliyun.com/zh/dashscope/)
- [Qwen2 Models](https://huggingface.co/Qwen)
- [Ollama Qwen](https://ollama.ai/library/qwen2.5)
- [API Reference](https://help.aliyun.com/zh/dashscope/developer-reference/api-details)

## <strong>🔐 Security Best Practices</strong>

- Keep API keys secure
- Monitor usage for anomalies
- Use environment variables
- Implement rate limiting
- Regular security audits

## <strong>📞 Support</strong>

- [Alibaba Cloud Support](https://www.alibabacloud.com/support)
- [DashScope Community](https://github.com/QwenLM)
- [MCP for WP Docs](../SupportedModels)

---

**Ready to get started?** [Configure your Qwen integration](../guides/setup-qwen) or [explore other providers](./index)!
