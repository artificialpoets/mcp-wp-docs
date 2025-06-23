---
title: Tool Management
---

# 🛠️ Tool Management

This guide covers the lifecycle of a tool, from creation to execution.

## <strong>Creating a Tool</strong>

To create a new tool, navigate to **MCP for WP > Add New** in your WordPress dashboard. You will be presented with the tool editor, where you must fill in the following fields:

-   **Name:** A human-readable name for your tool (e.g., "Haiku Generator").
-   **Description:** A brief description of what your tool does.
-   **AI Provider:** The AI provider that will power this tool (e.g., OpenAI).
-   **Input Schema:** A valid JSON schema defining the inputs your tool expects.
-   **Output Schema:** A valid JSON schema defining the output your tool will produce.
-   **Status:** The status of the tool. Only "active" tools can be executed.

## <strong>Displaying Tools on the Frontend</strong>

You can display any active tool on the frontend of your site using the `[wpmcp_tool]` shortcode. This is useful for creating pages that allow your site visitors to interact with your AI tools.

### Shortcode Usage

To use the shortcode, simply add it to the content of any post or page, providing the `id` of the tool you wish to display.

```html
[wpmcp_tool id="123"]
```

You can find the ID of a tool by going to the main **MCP for WP** dashboard, hovering over the tool you want, and looking at the URL in the status bar of your browser. The `tool_id` parameter in the URL is the ID you need.

The shortcode will render a simple form based on the tool's input schema. When a user submits the form, it will call the tool's execution endpoint and display the result directly on the page.

## <strong>✨ Anatomy of a Tool</strong>

Each tool you create has several key components that define its behavior and appearance:

-   **Name and Description**: A clear, human-readable identifier for your tool.
-   **Type**: The category of the tool (e.g., Text, Image, Moderation).
-   **AI Provider and Method**: Which AI service to use and the specific model or function to call.
-   **Input/Output JSON Schema**: The technical definition of the data the tool expects to receive and produce.
-   **UI Field Mapping**: A mapping that transforms the input schema into user-friendly form fields.
-   **Status**: The current state of the tool (Active, Inactive, or Archived).

## <strong>➕ Creating a New Tool</strong>

Creating a new tool is a straightforward process.

1.  **Navigate to Add New**: From your WordPress admin dashboard, go to **MCP for WP > Add New**.
2.  **Fill in the Details**: Carefully fill in all the required fields, paying close attention to the schemas.
3.  **Define Your Schemas**: Use the built-in editor to create the JSON schemas for your tool's input and output. See the example below for guidance.
4.  **Map to UI Fields**: Define how the input fields should appear to the end-user.
5.  **Save the Tool**: Once you're satisfied, click "Save" to create the tool.

## <strong>📊 Tool Creation Process</strong>

Here's a detailed view of the tool creation workflow:

<MermaidDiagram 
  title="Tool Creation Workflow"
  chart={`
sequenceDiagram
    participant U as User
    participant UI as Admin UI
    participant TM as Tool Manager
    participant DB as Database
    participant API as REST API
    
    U->>UI: Navigate to Add New
    UI->>U: Show Tool Editor
    U->>UI: Fill Tool Details
    U->>UI: Define Schemas
    U->>UI: Map UI Fields
    U->>UI: Click Save
    UI->>TM: Validate & Process
    TM->>DB: Store Tool Config
    DB-->>TM: Confirm Save
    TM-->>UI: Success Response
    UI-->>U: Tool Created
    U->>API: Test Tool
  `}
/>

## <strong>✍️ Editing and Deleting Tools</strong>

-   **To Edit a Tool**: From the main dashboard, simply click the "Edit" link next to the tool you wish to modify. This will take you to the same form you used to create it, pre-filled with the current values.
-   **To Delete a Tool**: Click the "Delete" link next to a tool and confirm your choice. **Warning: This action is irreversible!**

### Example: A Simple Text Summarizer

Let's walk through an example of a tool that summarizes a block of text.

#### Input Schema

This schema defines a single input field, `text_to_summarize`, which is a required string.

```json
{
  "type": "object",
  "properties": {
    "text_to_summarize": {
      "type": "string",
      "description": "The block of text that you want to summarize."
    }
  },
  "required": ["text_to_summarize"]
}
```

#### Output Schema

This schema defines a single output field, `summary`, which will contain the summarized text.

```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "string",
      "description": "The generated summary."
    }
  },
  "required": ["summary"]
}
```

#### UI Field Mapping

This mapping tells MCP for WP to render the `text_to_summarize` input as a `textarea` with a user-friendly label.

```json
{
  "text_to_summarize": {
    "label": "Enter the Text to Summarize",
    "type": "textarea"
  }
}
```

---

## <strong>🚦 Understanding Tool Statuses</strong>

-   **Active**: The tool is fully functional and available for use via the REST API or shortcodes.
-   **Inactive**: The tool is temporarily disabled and hidden from users, but its configuration is preserved.
-   **Archived**: The tool is no longer in use but is kept for reference or auditing purposes. It cannot be executed.

## <strong>✅ Best Practices for Tool Management</strong>

-   **Be Descriptive**: Use clear and descriptive names and descriptions for your tools. This will make them easier to manage as your collection grows.
-   **Validate Your Schemas**: Before saving a tool, use an online JSON schema validator to ensure that your schemas are well-formed.
-   **Test Thoroughly**: Always test a new tool with a variety of sample data to ensure it behaves as expected.

## <strong>🤔 Troubleshooting</strong>

-   **Tool Failures**: If a tool fails to execute, the first place to check is the [Execution Logs](./logs). The logs will contain detailed error messages from the AI provider.
-   **API Issues**: Ensure your API key for the selected provider is valid and has sufficient quota. 