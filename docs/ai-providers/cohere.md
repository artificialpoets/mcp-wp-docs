---
title: Cohere Models
description: Complete guide to using Cohere models with MCP for WP
---

# 🟢 Cohere Models

Cohere specializes in enterprise-grade language models with a focus on retrieval-augmented generation (RAG), multilingual capabilities, and production-ready APIs. Their models excel at understanding context and generating human-like text.

## <strong>🌟 Why Choose Cohere?</strong>

<MermaidDiagram
  title="Cohere Advantages"
  chart={`
graph LR
    A[Cohere Advantages] --> B[Enterprise Focus]
    A --> C[RAG Capabilities]
    A --> D[Multilingual Support]
    A --> E[Production Ready]
    A --> F[Strong Embeddings]
    
    B --> G[Business features]
    C --> H[Retrieval augmented]
    D --> I[100+ languages]
    E --> J[High reliability]
    F --> K[Semantic search]
  `}
/>

## <strong>📊 Available Models</strong>

| Model | Context Window | Best For | Input Cost | Output Cost |
|-------|----------------|----------|------------|-------------|
| **Command R+** | 128K tokens | Enterprise, RAG, reasoning | $15/1M tokens | $60/1M tokens |
| **Command R** | 128K tokens | General purpose, RAG | $3/1M tokens | $15/1M tokens |
| **Command** | 32K tokens | General purpose | $0.5/1M tokens | $1.5/1M tokens |
| **Command Light** | 32K tokens | Fast, cost-effective | $0.1/1M tokens | $0.3/1M tokens |

**Source:** [Cohere Pricing](https://cohere.com/pricing)

## <strong>🚀 Getting Started</strong>

### Step 1: Create Cohere Account

1. **Visit [Cohere Console](https://dashboard.cohere.ai/)**
2. **Sign up** with your email
3. **Verify your account**
4. **Complete profile setup**

### Step 2: Get API Key

1. **Go to [API Keys section](https://dashboard.cohere.ai/api-keys)**
2. **Click "Create API Key"**
3. **Give it a descriptive name**
4. **Copy the key and store securely**

### Step 3: Configure in MCP for WP

1. **Go to MCP for WP > Settings**
2. **Set Provider to "Cohere"**
3. **Enter your API key**
4. **Select default model** (e.g., `command`)
5. **Click "Test Connection"**
6. **Save settings**

## <strong>⚙️ Model Configuration</strong>

### Default Settings

```json
{
  "model": "command",
  "max_tokens": 2048,
  "temperature": 0.7,
  "top_p": 0.9,
  "top_k": 0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0
}
```

### Parameter Guide

#### **Model Selection**
- **`command-r-plus`**: Best for enterprise, RAG, complex reasoning
- **`command-r`**: Good for RAG and general purpose
- **`command`**: Balanced performance and cost
- **`command-light`**: Fast, cost-effective for simple tasks

#### **Max Tokens**
- **Range**: 1 to 4096 (varies by model)
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
- **Range**: 0 to 100
- **0**: Disabled (default)
- **Higher values**: More diverse outputs

#### **Frequency Penalty**
- **Range**: 0.0 to 1.0
- **0.0**: No penalty
- **Higher values**: Reduce repetition

#### **Presence Penalty**
- **Range**: 0.0 to 1.0
- **0.0**: No penalty
- **Higher values**: Encourage new topics

## <strong>💰 Pricing & Usage</strong>

### Cost Structure

| Model | Input Cost | Output Cost | Free Tier |
|-------|------------|-------------|-----------|
| **Command R+** | $15/1M tokens | $60/1M tokens | $5 credit |
| **Command R** | $3/1M tokens | $15/1M tokens | $5 credit |
| **Command** | $0.5/1M tokens | $1.5/1M tokens | $5 credit |
| **Command Light** | $0.1/1M tokens | $0.3/1M tokens | $5 credit |

### Usage Limits

| Plan | Rate Limit | Monthly Limit |
|------|------------|---------------|
| **Free Tier** | 5 requests/second | $5 credit |
| **Pay-as-you-go** | 100 requests/second | No limit |
| **Enterprise** | Custom | Custom |

**Source:** [Cohere Quotas](https://docs.cohere.com/docs/rate-limits)

### Cost Optimization Tips

1. **Use Command Light** for simple tasks
2. **Choose appropriate model** for task complexity
3. **Monitor token usage**
4. **Use RAG** for knowledge-intensive tasks

## <strong>🔧 Advanced Configuration</strong>

### Retrieval-Augmented Generation (RAG)

Cohere excels at RAG applications. Configure your tool to use external knowledge:

```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "query": { "type": "string", "description": "User question" },
      "context": { "type": "string", "description": "Retrieved context" }
    },
    "required": ["query", "context"]
  }
}
```

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
        "name": "search_database",
        "description": "Search knowledge base",
        "parameters": {
          "type": "object",
          "properties": {
            "query": { "type": "string" }
          }
        }
      }
    }
  ]
}
```

## <strong>🛠️ Use Cases & Examples</strong>

### Knowledge Base Q&A

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "question": { "type": "string", "description": "User question" },
      "knowledge_base": { "type": "string", "description": "Relevant documents" },
      "style": { "type": "string", "enum": ["concise", "detailed", "technical"] }
    },
    "required": ["question", "knowledge_base"]
  }
}
```

**Recommended Settings:**
- **Model**: `command-r-plus`
- **Temperature**: 0.3
- **Max Tokens**: 1024

### Content Generation

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "topic": { "type": "string", "description": "Topic to write about" },
      "style": { "type": "string", "enum": ["professional", "casual", "creative"] },
      "length": { "type": "string", "enum": ["short", "medium", "long"] }
    },
    "required": ["topic"]
  }
}
```

**Recommended Settings:**
- **Model**: `command`
- **Temperature**: 0.8
- **Max Tokens**: 2048

### Multilingual Tasks

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
- **Model**: `command-r`
- **Temperature**: 0.5
- **Max Tokens**: 2048

## <strong>🔍 Troubleshooting</strong>

### Common Issues

- **API Key Invalid**: Check Cohere dashboard
- **Rate Limit Exceeded**: Check usage limits
- **Model Not Available**: Verify model name
- **Context Too Long**: Reduce input length

### Debugging Tips

1. **Check API key** in Cohere dashboard
2. **Monitor usage** and billing
3. **Review request logs** in MCP for WP
4. **Test with Cohere playground**
5. **Check quotas and limits**

### Performance Optimization

1. **Use appropriate model size**
2. **Optimize prompt length**
3. **Implement caching**
4. **Use RAG for knowledge tasks**

## <strong>📚 Additional Resources</strong>

- [Cohere Documentation](https://docs.cohere.com/)
- [Cohere Console](https://dashboard.cohere.ai/)
- [Cohere Playground](https://playground.cohere.ai/)
- [API Reference](https://docs.cohere.com/reference)
- [RAG Tutorial](https://docs.cohere.com/docs/retrieval-augmented-generation-rag)

## <strong>🔐 Security Best Practices</strong>

- Keep API keys secure
- Monitor usage for anomalies
- Use environment variables
- Implement rate limiting
- Regular security audits

## <strong>📞 Support</strong>

- [Cohere Support](https://cohere.com/support)
- [Cohere Community](https://discord.gg/cohere)
- [MCP for WP Docs](../SupportedModels)

---

**Ready to get started?** [Configure your Cohere integration](../guides/setup-cohere) or [explore other providers](./index)!
