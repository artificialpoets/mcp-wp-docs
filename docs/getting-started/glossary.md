---
title: Glossary of Terms
---

# 📚 Glossary of Terms

Welcome to the MCP for WP Glossary! Here you'll find definitions for common terms used throughout this documentation and within the plugin itself.

---

### Core Concepts

**MCP (Model Context Protocol)**
: MCP stands for Model Context Protocol. It is a protocol designed to connect to AI models, enabling applications to communicate with a wide variety of AI providers.

**Tool** 🤖
: A specific function or capability that you define within MCP for WP. Each tool connects to an AI provider and is designed to perform a particular task, like generating text, analyzing data, or more.

**Provider** ☁️
: The third-party AI service that powers your tools. Examples include OpenAI, Google AI, Anthropic, or a self-hosted model via a compatible API.

---

### Technical Terms

**Schema (JSON Schema)** 📜
: A JSON-based format used to define the structure of the input parameters your tool accepts and the output it is expected to produce. This ensures data is sent and received in a consistent and predictable way.

**LLM (Large Language Model)** 🧠
: A type of artificial intelligence model that is trained on vast amounts of text data to understand and generate human-like language. These are the engines behind many of the available AI providers.

**REST API** 🌐
: A standardized way for different software applications to communicate with each other over the web. MCP for WP provides a REST API to allow programmatic access to your tools.

**Shortcode** `[mcp_tool]`
: A small, reusable piece of code in WordPress that allows you to embed dynamic content, like the output of an AI tool, directly into your posts, pages, or widgets.

---

### WordPress Integration

**Hook / Filter** 🎣
: Mechanisms provided by WordPress that allow plugins and themes to interact with or modify the core functionality without changing the original code. MCP for WP uses these to allow for deep customization and extensibility.

**Execution Log** 📝
: A detailed record of every time a tool is run. The log includes the inputs provided, the raw output from the AI provider, and the final status (success or failure). This is invaluable for debugging and monitoring usage.

**Nonce (Number used once)** 🔑
: A security token used in WordPress to protect against Cross-Site Request Forgery (CSRF) attacks. It ensures that actions are initiated by a verified user from a legitimate source.

**Capability** 🛡️
: A specific permission within the WordPress roles and permissions system (e.g., `manage_options`). Capabilities are used to control which users can access and manage the features of MCP for WP. 