---
title: Getting Started
---

# Getting Started 🚀

Welcome to MCP for WP! This guide will walk you through the essential first steps to get the plugin up and running. Let's get started!

## <strong>📦 Step 1: Installation</strong>

First things first, let's get the plugin installed and activated on your WordPress site.

1.  **Download or Clone the Plugin**:
    You can either download the plugin as a ZIP file from the repository or clone it using Git.

    ```bash
    git clone https://github.com/artificialpoets/wp-mcp-docs.git
    ```

2.  **Upload to WordPress**:
    Copy the `wp-mcp/` folder into your `wp-content/plugins/` directory.

3.  **Activate the Plugin**:
    From your WordPress admin dashboard, navigate to the **Plugins** page and click **Activate** next to "MCP for WP".

    ![Activation](https://i.imgur.com/your-activation-image.png) <!-- Replace with a real image if available -->

## <strong>⚙️ Step 2: Initial Configuration</strong>

Now that the plugin is active, let's configure it with your AI provider.

1.  **Navigate to Settings**:
    Go to **MCP for WP > Settings** in your WordPress admin menu.

2.  **Enter API Key**:
    Enter your API key from your chosen AI provider (e.g., OpenAI).

3.  **Save Changes**:
    Click the "Save Changes" button to store your configuration.

## <strong>📊 Initial Setup Process</strong>

Here's a visual overview of the complete setup process:

<MermaidDiagram 
  title="Getting Started Flow"
  chart={`
flowchart TD
    A[Download Plugin] --> B[Upload to WordPress]
    B --> C[Activate Plugin]
    C --> D[Configure API Keys]
    D --> E[Create First Tool]
    E --> F[Test Tool]
    F --> G[Go Live!]
  `}
/>

## <strong>🛠️ Step 3: Define Your First AI Tool</strong>

With the initial setup complete, it's time to create your first AI tool!

1.  **Add a New Tool**:
    Go to **MCP for WP > Add New**.

2.  **Fill in the Details**:
    Provide a name, description, select the provider and method, and define the JSON schemas for your tool.

3.  **Save the Tool**:
    Once you've filled everything in, click "Save". Your new tool will now appear in the dashboard list.

## <strong>🧪 Step 4: Test Your Tool</strong>

Let's make sure your new tool works as expected.

-   **Execute the Tool**:
    Use the provided REST API endpoint or the shortcode to run your tool.
-   **Check the Logs**:
    View the execution details and any potential errors in **MCP for WP > Logs**.

## <strong>🚀 Next Steps</strong>

Congratulations on setting up your first tool! Here are a few suggestions for what to explore next:

-   Dive into the [Admin UI Guide](admin-ui.md) for a complete tour of all plugin screens.
-   Learn about advanced configurations in the [Tool Management](tool-management.md) guide.

## <strong>🤔 Troubleshooting</strong>

Running into issues? Here are a few common solutions:

-   **Menu Not Visible?**: Try clearing your browser cache and ensure your user role has the necessary permissions.
-   **API Errors?**: Double-check that your API key is correct and that your provider's service is operational.
-   For more detailed help, check out our full [Troubleshooting Guide](troubleshooting.md). 