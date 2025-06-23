---
title: Admin UI
---

# 🖥️ Admin UI

The MCP for WP admin interface is designed to be intuitive and powerful, providing a central hub for managing your AI-powered tools. The UI is built using the standard WordPress admin components for a familiar experience.

## <strong>Tool Dashboard</strong>

The main dashboard, found under the "MCP for WP" menu item, provides a list of all the tools you have created. You can see each tool's name, type, AI provider, and status at a glance. From here, you can edit or delete existing tools.

## <strong>Tool Editor</strong>

The tool editor is where you create and configure your tools. We've designed this to be a smooth, modern experience.

### AJAX-Powered Savings

The form saves your tool's configuration without requiring a full page reload. When you click "Add Tool" or "Update Tool", the data is sent to the server in the background. You'll receive instant feedback on whether the operation was successful.

### Input & Output Schemas

These fields expect valid JSON Schema definitions. This schema is used to:
1.  Validate the data sent to the tool's execution endpoint.
2.  (In the future) Dynamically generate a user interface for the tool on the frontend.

## <strong>Settings Page</strong>

The settings page is where you configure the global settings for the plugin.

### API Keys

You must enter your API keys for any AI providers you wish to use. For example, to use OpenAI, you must provide your OpenAI API key.

#### Testing Your Connection

To ensure your API key is entered correctly, you can use the "Test Connection" button. This will make a simple, low-cost call to the provider's API to verify that the key is valid and the connection is working. You will see a success or failure notice immediately.

---

## <strong>📊 The Dashboard</strong>

The Dashboard is the central hub for all your AI tools. It provides an at-a-glance overview of every tool you've created.

![Dashboard Screenshot](https://i.imgur.com/your-dashboard-image.png) <!-- Replace with a real screenshot -->

-   **Tool List**: A comprehensive list of all your tools, showing their name, the AI provider they use, their current status (active or inactive), and the date they were created.
-   **Quick Actions**: From the dashboard, you can quickly edit, delete, or duplicate any tool.
-   **Add New Tool**: A prominent button allows you to jump directly to the tool creation screen.

---

## <strong>➕ Add/Edit Tool Screen</strong>

This is where the magic happens! The Add/Edit screen is a powerful form that gives you full control over your tool's configuration.

![Add/Edit Tool Screenshot](https://i.imgur.com/your-add-edit-image.png) <!-- Replace with a real screenshot -->

-   **Core Details**: Define the tool's name, give it a clear description, and select its type and AI provider.
-   **Schema Definition**: Use the built-in editor to define the JSON schemas for your tool's inputs and outputs. This is crucial for ensuring data is handled correctly.
-   **UI Mapping**: Map your input schema to user-friendly form fields that will be displayed to the user.
-   **Validation and Security**: All fields are automatically validated and sanitized to ensure data integrity and security. When editing an existing tool, the form will be pre-filled with its current values.

## <strong>📊 Tool Execution Process</strong>

Here's a detailed view of how tools are executed from request to response:

<MermaidDiagram 
  title="Tool Execution Flow"
  chart={`
sequenceDiagram
    participant U as User
    participant UI as Admin UI
    participant API as REST API
    participant TM as Tool Manager
    participant AI as AI Provider
    participant L as Logger
    
    U->>UI: Submit Tool Request
    UI->>API: POST /execute/{tool_id}
    API->>TM: Load & Validate Tool
    TM->>AI: Send API Request
    AI-->>TM: Return Response
    TM->>L: Log Execution
    TM-->>API: Process Response
    API-->>UI: Return Result
    UI-->>U: Display Output
  `}
/>

---

## <strong>📝 Execution Logs</strong>

The Logs screen is your window into the activity of your tools. It's an essential resource for debugging and monitoring.

![Logs Screenshot](https://i.imgur.com/your-logs-image.png) <!-- Replace with a real screenshot -->

-   **Recent Executions**: View a list of the 100 most recent tool executions.
-   **Detailed Information**: Each log entry includes the timestamp, the tool that was run, the final status (success or failure), and the full request and response data.
-   **Debugging Aid**: If a tool fails, the detailed response from the AI provider is invaluable for diagnosing the issue.

---

## <strong>⚙️ Settings</strong>

The Settings screen is where you manage the global configuration for MCP for WP.

-   **API Key Management**: This is where you'll enter and save the API keys for the AI providers you want to use. Keys are stored securely and are never displayed in the UI after being saved.
-   **Future-Ready**: We are planning to add more global settings here in future updates to give you even more control over the plugin's behavior.

> **Security Tip:** Every action within the MCP for WP admin interface is protected by WordPress nonces and capability checks, ensuring that only authorized users can make changes. 