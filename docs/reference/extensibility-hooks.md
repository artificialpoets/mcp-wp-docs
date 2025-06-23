# Extensibility Hooks

MCP for WP provides hooks and filters for deep customization.

## <strong>Diagram: Hook Flow</strong>

<MermaidDiagram
  title="Hook Execution Flow"
  chart={`
graph TD
  A[Before Execute] -->|wpmcp_before_tool_execute| B[Tool Execution]
  B -->|wpmcp_after_tool_execute| C[After Execute]
  B -->|wpmcp_tool_schema| D[Schema Filter]
  `}
/>

## <strong>Key Hooks</strong>
- `wpmcp_before_tool_execute`: Modify input or abort execution
- `wpmcp_after_tool_execute`: Inspect/modify result, trigger follow-up actions
- `wpmcp_tool_schema`: Filter tool schema before rendering UI

## <strong>Example: Logging Extra Data</strong>
```php
add_action('wpmcp_after_tool_execute', function($tool_id, $input, $output, $status) {
    error_log("Tool $tool_id executed with status $status");
});
``` 