---
title: Advanced Usage
---

# Advanced Usage

Once you've mastered the basics, MCP for WP offers a wealth of advanced features that allow you to build truly powerful and sophisticated AI-driven workflows. This guide explores some of these advanced scenarios.

## <strong>🚀 1. Automating Tool Execution via the REST API</strong>

The REST API is the key to unlocking automation. You can trigger your tools from a wide variety of external systems, including:

-   **CI/CD Pipelines**: Automate content updates as part of your deployment process.
-   **Third-Party Services**: Connect your tools to services like Zapier, Make (formerly Integromat), or custom applications.
-   **Command-Line Scripts**: Trigger tools directly from your terminal.

### Example: Triggering a Summarizer Tool with `cURL`

This example demonstrates how to execute a tool with an ID of `1` using an application password for authentication.

```bash
curl -X POST \
  -u your_admin_user:your_application_password \
  -H "Content-Type: application/json" \
  -d '{
    "text_to_summarize": "This is a long block of text that you want to send to your summarizer tool..."
  }' \
  https://your-site.com/wp-json/wpmcp/v1/execute/1
```

> **Security Note**: Always use Application Passwords for REST API authentication. They are more secure than using your main password.

## <strong>🔗 2. Chaining Multiple Tools Together</strong>

For complex workflows, you can "chain" multiple tools together, where the output of one tool becomes the input for the next. This requires a bit of custom code, but it's incredibly powerful.

### Example Workflow: Summarize, then Translate

Imagine you want to create a workflow that first summarizes an article and then translates that summary into Spanish.

<MermaidDiagram
  title="Tool Chaining Workflow"
  chart={`
graph TD;
    A[Start with a long article] --> B{Tool 1: Summarizer};
    B -- Generates a summary --> C{Tool 2: Translator};
    C -- Translates the summary --> D[Final Output: Summary in Spanish];
  `}
/>

You can achieve this by using the `wpmcp_after_tool_execute` action hook. Your custom code would listen for a successful execution of the summarizer tool, grab the output, and then immediately trigger the translator tool.

```php
// in your theme's functions.php or a custom plugin
add_action( 'wpmcp_after_tool_execute', 'my_summarize_and_translate_chain', 10, 4 );

function my_summarize_and_translate_chain( $tool_id, $response, $request_data, $status ) {
    // Check if the summarizer tool (ID 1) ran successfully
    if ( $tool_id == 1 && $status === 'success' ) {
        $summary = $response['summary'];

        // Now, trigger the translator tool (ID 2)
        // You would need to write a function to call the REST API internally
        my_execute_internal_tool( 2, [ 'text_to_translate' => $summary ] );
    }
}
```

## <strong>📝 3. Displaying Tools with Shortcodes</strong>

You can embed a user-facing form for any of your tools directly into your posts, pages, or widgets using a simple shortcode.

```html
[wpmcp_tool id="1"]
```

This will render the form that you defined in the tool's UI mapping, allowing your site visitors to interact with your AI tools directly from the frontend.

## <strong>🔌 4. Integrating with Other Plugins</strong>

The true power of MCP for WP is realized when you integrate it with other plugins. By using the provided hooks and filters, you can create seamless connections with:

-   **Form Plugins** (e.g., Gravity Forms, Fluent Forms): Trigger a tool whenever a form is submitted.
-   **Membership Plugins** (e.g., MemberPress, Restrict Content Pro): Provide special AI tools exclusively for your members.
-   **E-commerce Plugins** (e.g., WooCommerce): Automatically generate product descriptions or marketing copy.

## <strong>🕒 5. Scheduled Executions with WP-Cron</strong>

Need to run a tool on a recurring basis? You can use WP-Cron (or a server-level cron job for better reliability) to schedule tool executions.

For example, you could create a tool that generates a daily report and schedule it to run every morning. This requires custom PHP code to register your cron event and trigger the tool's execution.

## <strong>🎨 6. Custom UI Extensions</strong>
- Add custom field types or UI enhancements by extending the admin JS/CSS.

## <strong>🌐 7. Multi-site Considerations</strong>
- Each site manages its own tools/logs. Use REST API for cross-site automation. 