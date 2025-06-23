---
title: Technical Considerations
---

# 🛠️ Technical Considerations

MCP for WP is engineered with performance, security, and scalability in mind. Here is a deeper look at some of the key technical aspects of the plugin.

## <strong>⚡ Performance</strong>

We understand that website performance is critical. MCP for WP is designed to be lean and efficient, ensuring it doesn't slow down your site.

-   **Custom Database Tables**: All plugin data, including tools and execution logs, is stored in its own custom database tables (`wp_mcp_tools` and `wp_mcp_logs`). This prevents bloating the core WordPress tables like `wp_options` or `wp_posts`.
-   **Efficient Queries**: We have optimized all database queries and implemented proper indexing and pagination to ensure that even with a large number of tools or logs, the admin interface remains fast and responsive.
-   **Asynchronous Execution**: For tasks that may take longer to complete, such as complex API calls, we recommend leveraging asynchronous execution patterns to avoid blocking the user interface.

## <strong>🛡️ Security</strong>

Security is a top priority for us. We have implemented multiple layers of protection to keep your site and data safe.

-   **WordPress Best Practices**: We strictly adhere to WordPress security standards, including the use of nonces for all form submissions and robust capability checks to ensure that only authorized users can access the plugin's settings.
-   **Data Sanitization**: All user inputs are carefully sanitized, and all outputs are properly escaped to prevent common vulnerabilities like Cross-Site Scripting (XSS).
-   **Secure API Key Storage**: Your sensitive API keys are stored securely in the database with the `autoload` option set to `false`, meaning they are only loaded into memory when they are explicitly needed.
-   **Authenticated API**: The REST API endpoints require proper authentication, ensuring that only authorized applications can interact with your tools.

## <strong>🗃️ Database Schema</strong>

MCP for WP creates two primary tables in your WordPress database to store its data.

-   `wp_mcp_tools`: This table stores the configuration for each tool you create.
-   `wp_mcp_logs`: This table contains a detailed record of every execution for each tool, which is invaluable for auditing and debugging.

Here is a simplified visualization of the database schema:

<MermaidDiagram
  title="Database Schema"
  chart={`
erDiagram
    wp_mcp_tools {
        int tool_id PK
        varchar name
        text description
        varchar type
        varchar ai_provider
        varchar json_rpc_method
        longtext input_schema
        longtext output_schema
        longtext ui_fields_map
        varchar status
        text provider_settings
        int created_by
        datetime created_at
        datetime updated_at
    }

    wp_mcp_logs {
        int log_id PK
        int tool_id FK
        longtext request_payload
        longtext response_payload
        varchar status
        datetime timestamp
    }

    wp_mcp_tools ||--o{ wp_mcp_logs : "has many"

    %% Layout direction to place tables side by side
    direction LR
  `}
/>

> **Note**: The plugin automatically handles schema updates during upgrades, so you don't have to worry about manual database migrations.

## <strong>🧩 Extensibility</strong>

We've designed MCP for WP to be highly extensible, allowing developers to build on top of its core functionality.

-   **Hooks and Filters**: We provide a rich set of WordPress hooks (actions and filters) for all major operations, allowing you to modify or extend the plugin's behavior without touching the core code.
-   **Custom Components**: You can create your own custom providers, new tool types, or even add custom fields to the tool builder UI to tailor the plugin to your specific needs.

## <strong>✅ Best Practices</strong>

To get the most out of MCP for WP and ensure a smooth experience, we recommend following these best practices:

-   **Test in Staging**: Always create and test new tools on a staging or development environment before deploying them to your live site.
-   **Monitor Logs**: Regularly check the execution logs for any failed or unexpected operations to catch potential issues early.
-   **Use HTTPS**: Ensure that your site is using HTTPS to encrypt all communication, especially when making API calls to external services.

## <strong>API Limits & Providers</strong>
- Each provider (e.g., OpenAI) may have rate limits
- Handle errors gracefully and log failures 