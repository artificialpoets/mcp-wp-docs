# Data Model

MCP for WP uses custom database tables for performance and scalability.

## <strong>📊 Database Schema</strong>

The following diagram shows the database structure and relationships:

<MermaidDiagram 
  title="Database Schema"
  chart={`
erDiagram
    wp_mcp_tools {
        int id PK
        varchar name
        text description
        varchar provider
        text input_schema
        text output_schema
        text ui_mapping
        varchar status
        datetime created_at
        datetime updated_at
    }
    
    wp_mcp_logs {
        int id PK
        int tool_id FK
        text request
        text response
        varchar status
        datetime executed_at
    }
    
    wp_mcp_tools ||--o{ wp_mcp_logs : "has many"
  `}
/>

*Diagram: Database table structure and relationships.*

## <strong>Tables</strong>
- **wp_mcp_tools:** Stores tool definitions (name, type, provider, schema, etc.)
- **wp_mcp_logs:** Stores execution logs (tool, input, output, status, timestamp)

## <strong>Relationships</strong>
- Each log entry references a tool by `tool_id`
- Tools can have many logs 