# Changelog

All notable changes to MCP for WP are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## <strong>[2.0.4]</strong>

### 🎉 Major Features
- **Documentation Overhaul**: Migrated to Docusaurus, reorganized docs, and introduced a strategic, visual-first documentation approach.
- **Mermaid Diagram Support**: Interactive, rendered diagrams throughout the docs for architecture, workflows, and data models.
- **Advanced Code Block UX**: Copy buttons, container adaptation, and improved syntax highlighting for all code blocks.

### ✨ New Features
- **MermaidDiagram React Component**: Custom component for rendering diagrams in MDX/Markdown.
- **Sidebar Navigation Enhancements**: Emoji usage standardized for main folders, improved sidebar clarity.
- **Comprehensive Provider Docs**: Deep dives for OpenAI, Claude, Gemini, Llama, Mistral, Cohere, and Qwen.

### Improvements
- **Strategic Diagram Placement**: Diagrams now clarify user journeys, architecture, and advanced topics.
- **User Stories & ROI**: Added business-focused diagrams and case studies.
- **Accessibility**: Improved color contrast, alt text, and responsive design for diagrams and code blocks.

### 🐛 Bug Fixes
- **Mermaid Rendering**: All diagrams now render visually, not as code blocks.
- **Sidebar Emoji Consistency**: Emojis only on main folders/categories.
- **Code Block Styling**: Fixed border-radius and padding issues.

### Documentation
- **Complete Provider Guides**: Added detailed setup and configuration guides for OpenAI, Claude, Gemini, Llama, Mistral, Cohere, and Qwen
- **Strategic Diagrams**: Implemented 8 key diagrams showing architecture, workflows, and data models
- **User Stories**: Added comprehensive use case documentation with ROI analysis
- **API Reference**: Complete REST API documentation with examples and error handling

---

## <strong>[2.0.0]</strong>

### 🎉 Major Features
- **Multi-Provider Support**: Gradual expansion to 7 major AI providers, each with unique configuration and documentation.
- **Advanced Tool Management**: Enhanced creation, editing, and execution workflows.
- **Comprehensive Logging**: Execution logs with filtering, search, and export.

### ✨ New Features
- **Provider Factory Pattern**: Modular, extensible provider integration.
- **Advanced Schema Validation**: Custom error messages and validation for tool schemas.
- **Rate Limiting**: Configurable, per-user API rate limits.

### Improvements
- **Performance**: Optimized DB queries, caching, and API calls.
- **Admin UI**: Modernized, more accessible interface.
- **Security**: Strengthened authentication, authorization, and data protection.

### 🐛 Bug Fixes
- **Database Migration**: Reliable upgrade path for major versions.
- **API Endpoints**: Improved error handling and response consistency.

---

## <strong>[1.5.0]</strong>

### 🎉 Major Features
- **Provider Expansion**: Added Mistral and Cohere.
- **Tool Chaining**: Output of one tool can be input to another.
- **Extensibility**: More hooks and filters for custom integrations.

### ✨ New Features
- **Custom Provider Framework**: Easier to add new providers.
- **Advanced Tool Configuration**: Per-tool provider settings.

### Improvements
- **Error Recovery**: Automatic retries and better error messages.
- **Performance**: Faster API calls and UI.

---

## <strong>[1.2.0]</strong>

### 🎉 Major Features
- **Llama Integration**: Support for Meta's Llama models, including self-hosting via Ollama.
- **Cloud Provider Support**: Together AI and Replicate integrations.

### ✨ New Features
- **Advanced Parameters**: Support for temperature, top_p, top_k, etc.

---

## <strong>[1.0.0]</strong>

### 🎉 Major Features
- **Core Platform**: WordPress plugin with admin UI, OpenAI integration, REST API, tool management, and logging.

---

## <strong>[0.5.0]</strong>

### 🎉 Major Features
- **Claude Integration**: Anthropic Claude support.
- **Security Framework**: Rate limiting, capability checks, and API protection.

---

## <strong>[0.3.0]</strong>

### 🎉 Major Features
- **Gemini Integration**: Google Gemini support.
- **Performance Optimizations**: Faster response times and resource usage.

---

## <strong>[0.1.0]</strong>

### 🎉 Initial Release
- **Core Plugin**: Basic WordPress plugin structure, OpenAI integration, tool system, admin interface, and REST API.

---

## <strong>🔄 Migration Notes</strong>

### Upgrading from 1.x to 2.0
- **Database Migration**: Automatic script included.
- **Provider Configuration**: Enhanced settings may require reconfiguration.
- **API Changes**: Some endpoints updated.
- **Security**: Review new features.

---

## <strong>📊 Version History Summary</strong>

| Version | Major Features | Breaking Changes |
|---------|----------------|------------------|
| 2.0.4 | Docs overhaul, Mermaid diagrams | None |
| 2.0.0 | Multi-provider, security | DB schema changes |
| 1.5.0 | Mistral & Cohere, chaining | Provider API changes |
| 1.2.0 | Llama, self-hosting | Provider config changes |
| 1.0.0 | Core platform, OpenAI | Complete rewrite |
| 0.5.0 | Claude, security | API endpoint changes |
| 0.3.0 | Gemini, performance | DB schema updates |
| 0.1.0 | Initial release | N/A |

---

## <strong>🤝 Contributing</strong>

See our [Contributing Guide](../contributing) for details.

## <strong>📞 Support</strong>

- 📖 [Documentation](../getting-started)
- 🐛 [Issue Tracker](https://github.com/artificialpoets/wp-mcp-docs/issues)
- 💬 [Community Forum](https://github.com/artificialpoets/wp-mcp-docs/discussions)
- 📧 [Email Support](mailto:support@example.com)

---

*This changelog follows the [Keep a Changelog](https://keepachangelog.com/) format and adheres to [Semantic Versioning](https://semver.org/).* 