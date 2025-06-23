---
title: Security
---

# 🛡️ Security

MCP for WP is built with security as a top priority. We follow WordPress best practices to ensure that your site remains secure while using our powerful features. This document outlines the key security measures implemented within the plugin.

## <strong>Custom Capabilities</strong>

To provide fine-grained access control, MCP for WP does not rely solely on the generic `administrator` role. Instead, it introduces several custom capabilities that are added to the Administrator role upon plugin activation. This allows site owners to use third-party role management plugins to create custom roles with specific permissions for the plugin.

The custom capabilities are:

-   `wpmcp_manage_tools`: Allows users to add, edit, and delete tools. This capability is required to access the main tool dashboard and the tool editor.
-   `wpmcp_view_logs`: Allows users to view the execution logs for all tools.
-   `wpmcp_execute_tools`: Allows users to execute tools via the REST API. This is the key that grants permission to interact with the AI providers.

By default, only users with the `administrator` role are granted these capabilities.

## <strong>REST API Security</strong>

All REST API endpoints related to managing tools and settings are protected by the `wpmcp_manage_tools` capability check. The sensitive `/execute` endpoint is protected by the `wpmcp_execute_tools` capability.

### Rate Limiting

To prevent abuse and protect against denial-of-service attacks on the tool execution endpoint, MCP for WP includes a rate limiter. By default, it allows a single user to make up to **30 execution requests per minute**.

If a user exceeds this limit, the API will return a `429 Too Many Requests` error, and they will need to wait before making another request. This is a crucial feature to ensure the stability of your site and to prevent runaway costs with your AI provider.

## <strong>🔒 Core Security Features</strong>

### Admin Interface Security

-   **Nonce Protection**: Every action performed within the admin UI (creating, editing, or deleting tools and settings) is protected by WordPress nonces. This prevents Cross-Site Request Forgery (CSRF) attacks, ensuring that actions are only performed by authenticated users with a valid session.
-   **Strict Capability Checks**: Access to the plugin's settings, tools, and logs is restricted to users with the `manage_options` capability by default. This ensures that only administrators can manage the plugin's configuration.
-   **Data Sanitization and Escaping**: We follow a strict "sanitize input, escape output" policy. All data submitted by users is thoroughly sanitized and validated, and all data displayed in the browser is escaped to prevent Cross-Site Scripting (XSS) vulnerabilities.

### REST API Security

-   **Authentication Required**: All REST API endpoints provided by MCP for WP require proper authentication. Unauthenticated requests will be rejected, preventing unauthorized access to your tools.
-   **Permission Callbacks**: Each API endpoint has a permission callback that checks if the authenticated user has the required capabilities to perform the requested action.
-   **Secure Error Handling**: In the event of an error, our API is designed to never expose sensitive information, such as file paths or database queries.

### API Key Protection

-   **Secure Storage**: Your sensitive AI provider API keys are stored in the WordPress options table with the `autoload` parameter set to `false`. This is a crucial optimization that prevents your keys from being loaded into memory on every page load, reducing the potential attack surface.
-   **No Frontend Exposure**: API keys are never exposed in the frontend HTML, JavaScript, or in the execution logs.

## <strong>🛡️ Security Model</strong>

Here's a visual representation of the security layers and protection mechanisms:

<MermaidDiagram 
  title="Security Architecture"
  chart={`
graph TB
    subgraph "Security Layers"
        A[WordPress Nonces]
        B[Capability Checks]
        C[Input Sanitization]
        D[API Authentication]
    end
    
    subgraph "Protected Resources"
        E[Tool Configuration]
        F[API Keys]
        G[Execution Logs]
    end
    
    A --> E
    B --> E
    C --> E
    D --> F
    A --> G
    B --> G
  `}
/>

## <strong>⚠️ Common Threats and Our Mitigations</strong>

| Threat                   | Mitigation                                                              |
| ------------------------ | ----------------------------------------------------------------------- |
| **CSRF**                 | Nonce verification on all admin actions.                                |
| **XSS**                  | Strict escaping of all data rendered in the browser.                    |
| **Privilege Escalation** | Robust capability checks on all admin and API functionality.            |
| **API Abuse**            | Authentication and permission checks required for all REST API endpoints. |

## <strong>✅ Security Best Practices for Users</strong>

While MCP for WP is designed to be secure out of the box, there are several steps you can take to further harden your site's security.

-   **Use HTTPS**: Always ensure your WordPress site is running over HTTPS. This encrypts the communication between your browser and the server, as well as between your server and the AI providers.
-   **Rotate API Keys Regularly**: It is a good security practice to periodically rotate your AI provider API keys.
-   **Monitor Logs**: Regularly review the execution logs for any suspicious or unexpected activity.
-   **Strong User Passwords**: Enforce the use of strong passwords for all administrator accounts on your WordPress site.
-   **Keep Everything Updated**: Always keep WordPress core, your themes, and all your plugins (including MCP for WP) up to date to ensure you have the latest security patches. 