---
sidebar_position: 4
title: Provider Configuration
---

# Provider-Specific Configuration

As MCP for WP evolves, so does the need for more granular control over how each AI Provider operates. While global settings offer a baseline configuration, many use cases benefit from tailoring settings on a per-tool basis. This guide explains how to configure these provider-specific settings.

## <strong>❓ Why Per-Tool Configuration?</strong>

Different tools have different needs.
-   A simple text-summarization tool might work perfectly with a fast, cost-effective model like OpenAI's `gpt-3.5-turbo`.
-   A complex tool for generating detailed technical reports might require a more powerful model like `gpt-4` to achieve the desired quality.
-   You might want to experiment with different models for the same tool to find the optimal balance of cost, speed, and accuracy.

Per-tool configuration gives you the flexibility to make these choices for each individual tool you create.

## <strong>⚙️ How It Works</strong>

When you create or edit a tool, the form will display additional configuration fields based on the selected AI Provider. These fields are hidden by default and only appear when they are relevant.

### OpenAI Example: `model`

For tools using the **OpenAI** provider, you can specify which model to use.



When you select "OpenAI" from the "AI Provider" dropdown, a new field named "OpenAI Model" will appear. Here, you can enter the ID of any model available to your OpenAI API key.

-   **Default Value:** If you leave this field blank, the tool will use the default model, which is currently `gpt-3.5-turbo`.
-   **Custom Value:** You can enter another model ID, such as `gpt-4`, `gpt-4-turbo-preview`, or any other compatible model.

This setting is saved along with the tool's other configuration and is used every time the tool is executed.

## <strong>🔮 Future Providers</strong>

As support for more AI providers (like Anthropic Claude or Google Gemini) is added to MCP for WP, they will also have their own specific settings that can be configured on this screen. This ensures the plugin remains extensible and can adapt to the unique features of different AI platforms. 