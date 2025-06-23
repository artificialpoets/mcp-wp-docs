---
title: Quick Start Guide
description: Get MCP for WP up and running in 5 minutes with this comprehensive quick start guide
sidebar_position: 1
---

# Quick Start Guide

<div className="progress-indicator">
  <div className="progress-step active" data-step="1">
    <span className="step-number">1</span>
    <span className="step-label">Installation</span>
  </div>
  <div className="progress-step" data-step="2">
    <span className="step-number">2</span>
    <span className="step-label">Configuration</span>
  </div>
  <div className="progress-step" data-step="3">
    <span className="step-number">3</span>
    <span className="step-label">First Tool</span>
  </div>
  <div className="progress-step" data-step="4">
    <span className="step-number">4</span>
    <span className="step-label">Integration</span>
  </div>
</div>

## 🚀 5-Minute Setup

This guide will walk you through installing, configuring, and creating your first AI tool with MCP for WP. By the end, you'll have a working AI integration that can generate content, analyze data, or automate workflows.

---

## Step 1: Installation

### Option A: WordPress Admin (Recommended)

1. **Download the Plugin**
   - Go to your WordPress admin dashboard
   - Navigate to **Plugins > Add New**
   - Click **Upload Plugin**
   - Choose the MCP for WP plugin file
   - Click **Install Now**

2. **Activate the Plugin**
   - After installation, click **Activate Plugin**
   - You'll see a new **MCP for WP** menu item in your admin sidebar

### Option B: Manual Installation

```bash
# Download from GitHub
wget https://github.com/artificialpoets/wp-mcp-docs/archive/main.zip

# Extract to wp-content/plugins/
unzip main.zip -d wp-content/plugins/

# Rename the folder
mv wp-content/plugins/wp-mcp-docs-main wp-content/plugins/wp-mcp

# Activate via WP-CLI
wp plugin activate wp-mcp
```

### Option C: Composer (Advanced)

```bash
# Add to your composer.json
composer require artificialpoets/wp-mcp

# Or install directly
composer create-project artificialpoets/wp-mcp wp-content/plugins/wp-mcp
```

<div className="success-box">
  ✅ **Installation Complete!** You should now see "MCP for WP" in your WordPress admin menu.
</div>

---

<div className="progress-indicator">
  <div className="progress-step" data-step="1">
    <span className="step-number">1</span>
    <span className="step-label">Installation</span>
  </div>
  <div className="progress-step active" data-step="2">
    <span className="step-number">2</span>
    <span className="step-label">Configuration</span>
  </div>
  <div className="progress-step" data-step="3">
    <span className="step-number">3</span>
    <span className="step-label">First Tool</span>
  </div>
  <div className="progress-step" data-step="4">
    <span className="step-number">4</span>
    <span className="step-label">Integration</span>
  </div>
</div>

## Step 2: Configuration

### Configure Your First AI Provider

1. **Navigate to Settings**
   - Go to **MCP for WP > Settings** in your WordPress admin
   - You'll see the provider configuration page

2. **Add OpenAI API Key** (Most Common)
   ```php
   // Option A: Add to wp-config.php (Recommended for production)
   define('OPENAI_API_KEY', 'sk-your-openai-api-key-here');
   
   // Option B: Use the admin interface
   // Enter your API key in the OpenAI section
   ```

3. **Test the Connection**
   - Click **Test Connection** for your provider
   - You should see a green success message

### Alternative Providers

```php
// Anthropic Claude
define('ANTHROPIC_API_KEY', 'sk-ant-your-claude-api-key');

// Google Gemini
define('GOOGLE_API_KEY', 'your-gemini-api-key');

// Mistral AI
define('MISTRAL_API_KEY', 'your-mistral-api-key');
```

<div className="info-box">
  💡 **Pro Tip:** Store API keys in `wp-config.php` for better security. Never commit them to version control!
</div>

---

<div className="progress-indicator">
  <div className="progress-step" data-step="1">
    <span className="step-number">1</span>
    <span className="step-label">Installation</span>
  </div>
  <div className="progress-step" data-step="2">
    <span className="step-number">2</span>
    <span className="step-label">Configuration</span>
  </div>
  <div className="progress-step active" data-step="3">
    <span className="step-number">3</span>
    <span className="step-label">First Tool</span>
  </div>
  <div className="progress-step" data-step="4">
    <span className="step-number">4</span>
    <span className="step-label">Integration</span>
  </div>
</div>

## Step 3: Create Your First Tool

### Content Summarizer Tool

Let's create a tool that automatically summarizes blog posts:

1. **Go to Tool Builder**
   - Navigate to **MCP for WP > Add New**
   - You'll see the visual tool builder

2. **Configure the Tool**
   ```json
   {
     "name": "Content Summarizer",
     "description": "Automatically summarize blog posts and articles",
     "provider": "openai",
     "method": "chat/completions",
     "input_schema": {
       "type": "object",
       "properties": {
         "content": {
           "type": "string",
           "description": "Content to summarize",
           "required": true
         },
         "max_length": {
           "type": "integer",
           "description": "Maximum summary length",
           "default": 150
         }
       }
     },
     "prompt_template": "Summarize the following content in {{max_length}} words or less:\n\n{{content}}"
   }
   ```

3. **Advanced Configuration**
   ```php
   // Add to your tool configuration
   $tool_config = [
       'temperature' => 0.7,
       'max_tokens' => 200,
       'model' => 'gpt-3.5-turbo',
       'rate_limit' => 100, // requests per hour
       'cache_duration' => 3600 // cache for 1 hour
   ];
   ```

### Customer Support Assistant

```json
{
  "name": "Support Assistant",
  "description": "AI-powered customer support responses",
  "provider": "anthropic",
  "method": "messages",
  "input_schema": {
    "type": "object",
    "properties": {
      "customer_message": {
        "type": "string",
        "description": "Customer's support request"
      },
      "context": {
        "type": "string",
        "description": "Additional context about the issue"
      }
    }
  },
  "prompt_template": "You are a helpful customer support representative. Respond to this customer inquiry professionally and helpfully:\n\nCustomer: {{customer_message}}\nContext: {{context}}"
}
```

<div className="success-box">
  ✅ **Tool Created!** Your AI tool is now ready to use via the REST API or WordPress hooks.
</div>

---

<div className="progress-indicator">
  <div className="progress-step" data-step="1">
    <span className="step-number">1</span>
    <span className="step-label">Installation</span>
  </div>
  <div className="progress-step" data-step="2">
    <span className="step-number">2</span>
    <span className="step-label">Configuration</span>
  </div>
  <div className="progress-step" data-step="3">
    <span className="step-number">3</span>
    <span className="step-label">First Tool</span>
  </div>
  <div className="progress-step active" data-step="4">
    <span className="step-number">4</span>
    <span className="step-label">Integration</span>
  </div>
</div>

## Step 4: Integration

### Option A: REST API

```bash
# Execute your tool via REST API
curl -X POST "https://yoursite.com/wp-json/wp-mcp/v1/execute/content-summarizer" \
  -H "Authorization: Basic base64(username:password)" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Your long article content here...",
    "max_length": 100
  }'
```

### Option B: WordPress Hooks

```php
// In your theme's functions.php
add_action('save_post', 'auto_summarize_post', 10, 2);

function auto_summarize_post($post_id, $post) {
    // Only for published posts
    if ($post->post_status !== 'publish') {
        return;
    }
    
    // Generate summary
    $summary = wp_mcp_execute_tool('content-summarizer', [
        'content' => $post->post_content,
        'max_length' => 150
    ]);
    
    // Save summary as post meta
    if ($summary && !isset($summary['error'])) {
        update_post_meta($post_id, '_ai_summary', $summary['choices'][0]['message']['content']);
    }
}
```

### Option C: Shortcode

```php
// Add shortcode support
add_shortcode('ai_summary', 'ai_summary_shortcode');

function ai_summary_shortcode($atts) {
    $content = get_the_content();
    $summary = wp_mcp_execute_tool('content-summarizer', [
        'content' => $content,
        'max_length' => 100
    ]);
    
    if ($summary && !isset($summary['error'])) {
        return '<div class="ai-summary">' . 
               $summary['choices'][0]['message']['content'] . 
               '</div>';
    }
    
    return '';
}
```

### Option D: Gutenberg Block

```php
// Register Gutenberg block
add_action('init', 'register_ai_summary_block');

function register_ai_summary_block() {
    register_block_type('mcp-for-wp/ai-summary', [
        'editor_script' => 'mcp-ai-summary-block',
        'render_callback' => 'render_ai_summary_block'
    ]);
}

function render_ai_summary_block($attributes) {
    $content = get_the_content();
    $summary = wp_mcp_execute_tool('content-summarizer', [
        'content' => $content,
        'max_length' => $attributes['maxLength'] ?? 100
    ]);
    
    return '<div class="ai-summary-block">' . 
           $summary['choices'][0]['message']['content'] . 
           '</div>';
}
```

---

## 🎯 Next Steps

### Monitor Your Tools

1. **View Logs**
   - Go to **MCP for WP > Logs**
   - Monitor tool usage and performance
   - Check for errors or rate limit issues

2. **Analytics Dashboard**
   - Track API usage and costs
   - Monitor response times
   - Analyze tool performance

### Advanced Features

- [Multi-Provider Orchestration](/docs/advanced-topics/multi-provider-orchestration)
- [Custom Tool Development](/docs/advanced-topics/custom-tools)
- [Performance Optimization](/docs/guides/performance-best-practices)
- [Security Best Practices](/docs/guides/security-best-practices)

### Get Help

- [Troubleshooting Guide](/docs/guides/troubleshooting)
- [API Reference](/docs/reference/api-reference)
- [Community Forum](https://github.com/artificialpoets/wp-mcp-docs/discussions)

---

<div className="success-box">
  🎉 **Congratulations!** You've successfully set up MCP for WP and created your first AI tool. 
  Your WordPress site is now powered by artificial intelligence!
</div> 