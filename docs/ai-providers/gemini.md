---
title: Gemini Models
description: Complete guide to using Google Gemini models with MCP for WP
---

# 🟡 Gemini Models

Google Gemini (formerly Bard, PaLM 2) is Google's flagship family of large language models, offering state-of-the-art performance, massive context windows, and multimodal capabilities (text, images, audio, and more).

## <strong>🌟 Why Choose Gemini?</strong>

<MermaidDiagram
  title="Gemini Advantages"
  chart={`
graph LR
    A[Gemini Advantages] --> B[Multimodal Inputs]
    A --> C[Massive Context Window]
    A --> D[Google Cloud Integration]
    A --> E[Competitive Pricing]
    A --> F[Research-Grade Performance]
    
    B --> G[Text, images, audio]
    C --> H[Up to 1M tokens]
    D --> I[Easy GCP setup]
    E --> J[Flexible plans]
    F --> K[Strong benchmarks]
  `}
/>

## <strong>📊 Available Models</strong>

| Model | Context Window | Best For | Input Cost | Output Cost |
|-------|----------------|----------|------------|-------------|
| **Gemini 1.5 Pro** | 1M tokens | Research, long docs, multimodal | $7/1M tokens | $21/1M tokens |
| **Gemini 1.5 Flash** | 128K tokens | Fast, cost-effective | $0.35/1M tokens | $1.05/1M tokens |
| **Gemini 1.0 Pro** | 32K tokens | General purpose | $0.50/1M tokens | $1.50/1M tokens |

**Source:** [Google Gemini Pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)

## <strong>🚀 Getting Started</strong>

### Step 1: Create Google Cloud Account

1. **Visit [Google Cloud Console](https://console.cloud.google.com/)**
2. **Sign up** or log in with your Google account
3. **Create a new project** for your AI usage
4. **Enable billing** (required for API access)

### Step 2: Enable Gemini API

1. **Go to [Vertex AI API page](https://console.cloud.google.com/apis/library/aiplatform.googleapis.com)**
2. **Click "Enable"**
3. **Wait for activation** (usually instant)

### Step 3: Generate API Key or Service Account

1. **Go to [APIs & Services > Credentials](https://console.cloud.google.com/apis/credentials)**
2. **Click "Create Credentials" > "API key"**
3. **Copy the key and store securely**
4. **(Optional)**: For advanced use, create a service account and download the JSON key

### Step 4: Configure in MCP for WP

1. **Go to MCP for WP > Settings**
2. **Find the "Gemini API Key" field**
3. **Paste your API key**
4. **Click "Test Connection"** to verify
5. **Save settings**

## <strong>⚙️ Model Configuration</strong>

### Default Settings

```json
{
  "model": "gemini-1.5-pro-latest",
  "max_tokens": 2048,
  "temperature": 0.7,
  "top_p": 1.0
}
```

### Parameter Guide

#### **Model Selection**
- **`gemini-1.5-pro-latest`**: Best for research, long docs, multimodal
- **`gemini-1.5-flash-latest`**: Fast, cost-effective
- **`gemini-1.0-pro-latest`**: General purpose

#### **Max Tokens**
- **Range**: 1 to 8192 (varies by model)
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

## <strong>💰 Pricing & Usage</strong>

### Cost Calculator

<MermaidDiagram
  title="Gemini Cost Calculation"
  chart={`
graph LR
    A[Input Tokens] --> B[Cost Calculation]
    C[Output Tokens] --> B
    B --> D[Total Cost]
    
    E[Gemini 1.5 Pro] --> F[$7/1M input]
    E --> G[$21/1M output]
    H[Gemini 1.5 Flash] --> I[$0.35/1M input]
    H --> J[$1.05/1M output]
  `}
/>

### Usage Limits

| Plan | Rate Limit | Monthly Limit |
|------|------------|---------------|
| **Free Tier** | 60 requests/minute | $300 credit/90 days |
| **Pay-as-you-go** | 600 requests/minute | No limit |
| **Enterprise** | Custom | Custom |

**Source:** [Vertex AI Quotas](https://cloud.google.com/vertex-ai/quotas)

### Cost Optimization Tips

1. **Use Gemini 1.5 Flash** for fast, cheap tasks
2. **Set max_tokens** to control cost
3. **Monitor usage** in Google Cloud console
4. **Batch requests** when possible

## <strong>🔧 Advanced Configuration</strong>

### Multimodal Inputs

Gemini supports text, images, and audio as input. In MCP for WP, use the input schema to allow file uploads or URLs.

**Example:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "text": { "type": "string" },
      "image_url": { "type": "string", "format": "uri" }
    },
    "required": ["text"]
  }
}
```

### System Instructions

```json
{
  "system_instruction": "You are a helpful assistant."
}
```

## <strong>🛠️ Use Cases & Examples</strong>

### Research & Summarization

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "document": { "type": "string", "description": "Text to summarize" },
      "summary_type": { "type": "string", "enum": ["brief", "detailed"] }
    },
    "required": ["document"]
  }
}
```

**Recommended Settings:**
- **Model**: `gemini-1.5-pro-latest`
- **Temperature**: 0.3
- **Max Tokens**: 1024

### Multimodal Analysis

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "text": { "type": "string" },
      "image_url": { "type": "string", "format": "uri" }
    },
    "required": ["text", "image_url"]
  }
}
```

**Recommended Settings:**
- **Model**: `gemini-1.5-pro-latest`
- **Temperature**: 0.5
- **Max Tokens**: 2048

### Long Document Processing

**Tool Configuration:**
```json
{
  "input_schema": {
    "type": "object",
    "properties": {
      "document": { "type": "string", "description": "Long document to process" },
      "task": { "type": "string", "enum": ["extract", "analyze", "summarize"] }
    },
    "required": ["document", "task"]
  }
}
```

**Recommended Settings:**
- **Model**: `gemini-1.5-pro-latest`
- **Temperature**: 0.3
- **Max Tokens**: 4096

## <strong>🔍 Troubleshooting</strong>

### Common Issues

- **API Key Invalid**: Check Google Cloud credentials
- **Quota Exceeded**: Review quotas in Vertex AI
- **Model Not Enabled**: Ensure Gemini API is enabled
- **Billing Issues**: Check billing status in Google Cloud

### Debugging Tips

1. **Check API key** in Google Cloud console
2. **Monitor usage** and billing
3. **Review request logs** in MCP for WP
4. **Test with Vertex AI Studio**
5. **Check quotas and limits**

## <strong>📚 Additional Resources</strong>

- [Gemini API Docs](https://cloud.google.com/vertex-ai/docs/generative-ai)
- [Model Reference](https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference)
- [Pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)
- [Quotas](https://cloud.google.com/vertex-ai/quotas)
- [Vertex AI Studio](https://makersuite.google.com/)

## <strong>🔐 Security Best Practices</strong>

- Never expose API keys in client-side code
- Use IAM roles for service accounts
- Monitor usage for anomalies
- Rotate keys regularly

## <strong>📞 Support</strong>

- [Google Cloud Support](https://cloud.google.com/support-hub)
- [Gemini Community](https://cloudcommunity.withgoogle.com/)
- [MCP for WP Docs](../SupportedModels)

---

**Ready to get started?** [Configure your Gemini integration](../guides/setup-gemini) or [explore other providers](./index)! 