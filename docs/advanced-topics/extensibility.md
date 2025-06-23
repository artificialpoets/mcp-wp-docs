---
title: Extensibility
---

# Extensibility

MCP for WP is built with developers in mind. It's designed to be highly extensible, allowing you to add new functionality, integrate with other systems, and tailor the plugin to your exact needs.

## <strong>🔌 Adding a Custom AI Provider</strong>

Don't see your favorite AI provider on our supported list? You can build your own integration!

1.  **Create a Provider Class**: Create a new PHP class that extends our base provider class. This class will handle the logic for communicating with the custom AI service.

    ```php
    // in /wp-content/plugins/my-mcp-extensions/providers/class-my-custom-provider.php
    
    class My_Custom_Provider extends WPMCP_Provider_Base {
        public function execute( $request_data, $tool_config ) {
            // Logic to call your custom AI API
            $api_url = 'https://api.mycustom.ai/v1/generate';
            $api_key = '...'; // Securely retrieve your API key
    
            $response = wp_remote_post( $api_url, [
                'headers' => [ 'Authorization' => 'Bearer ' . $api_key ],
                'body'    => json_encode( $request_data ),
            ] );
    
            if ( is_wp_error( $response ) ) {
                return $response;
            }
    
            return json_decode( wp_remote_retrieve_body( $response ), true );
        }
    }
    ```

2.  **Register Your Provider**: Use the `wpmcp_register_providers` filter to add your new provider to the list of available options in the tool editor.

    ```php
    // in /wp-content/plugins/my-mcp-extensions/my-mcp-extensions.php
    
    add_filter( 'wpmcp_register_providers', 'my_register_custom_provider' );
    
    function my_register_custom_provider( $providers ) {
        require_once __DIR__ . '/providers/class-my-custom-provider.php';
        $providers['my_custom_provider'] = new My_Custom_Provider();
        return $providers;
    }
    ```

## <strong>🧰 Adding Custom UI Field Types</strong>

Need a special type of input field for your tools, like a color picker or a map selector? You can extend the UI renderer to support new field types.

This typically involves using a combination of hooks to add the field type to the list of options and JavaScript to render the custom field itself.

> **Note**: This is an advanced feature. For detailed instructions and examples, please see our full [Developer Reference](../reference/developer-reference).

## <strong>🎣 Key Hooks & Filters</strong>

We've placed hooks and filters at all the key execution points, giving you ample opportunity to interact with and modify the plugin's behavior.

-   `wpmcp_before_tool_execute` (Action)
    : Fires just before a tool is executed. Useful for modifying the request data or performing a pre-execution check.
    
    *`do_action( 'wpmcp_before_tool_execute', $tool_id, &$request_data );`*

-   `wpmcp_after_tool_execute` (Action)
    : Fires immediately after a tool has been executed. Useful for logging results to a separate system or triggering a chained tool.
    
    *`do_action( 'wpmcp_after_tool_execute', $tool_id, $response, $request_data, $status );`*

-   `wpmcp_tool_schema` (Filter)
    : Allows you to programmatically filter or modify the JSON schema for a tool before it is used.
    
    *`apply_filters( 'wpmcp_tool_schema', $schema, $tool_id, $context );`* // context is 'input' or 'output'

## <strong>✅ Best Practices for Developers</strong>

-   **Create a Custom Plugin**: Keep all of your custom extensions and code in a separate, dedicated plugin. This ensures that your customizations won't be lost when you update MCP for WP.
-   **Follow WordPress Standards**: Adhere to the official [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/) for all your custom code.
-   **Internationalization**: If you are adding any user-facing strings, make sure to use the proper WordPress internationalization functions (e.g., `__()`, `_e()`) so they can be translated. 