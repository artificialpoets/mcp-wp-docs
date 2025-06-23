---
title: Plugin Architecture
---

# Plugin Architecture

This document provides a high-level overview of the internal architecture of MCP for WP. Understanding how the different components interact is key to extending the plugin and building custom integrations.

## <strong>📊 High-Level Architecture</strong>

The following diagram illustrates the main components of the plugin and how they interact with each other and with the broader WordPress and external service ecosystems.

<MermaidDiagram 
  title="Plugin Architecture Overview"
  chart={`
graph TB
    subgraph "User Interfaces"
        A[Admin UI]
        B[REST API]
        C[Shortcodes]
    end
    
    subgraph "Core Services"
        D[Tool Manager]
        E[Execution Engine]
        F[Logging Service]
    end
    
    subgraph "Data Layer"
        G[(Tools DB)]
        H[(Logs DB)]
    end
    
    subgraph "External Services"
        I[AI Providers]
    end
    
    A --> D
    B --> D
    C --> E
    D --> G
    E --> I
    E --> F
    F --> H
  `}
/>

## <strong>🧩 Component Descriptions</strong>

-   **Interfaces**: These are the primary ways that users and external systems interact with the plugin.
    -   **Admin UI**: The user interface within the WordPress admin dashboard for managing tools, viewing logs, and configuring settings.
    -   **REST API Endpoints**: Provides programmatic access for creating, reading, updating, deleting (CRUD), and executing tools.
    -   **Shortcode Renderer**: Renders the user-facing forms for tools when the `[wpmcp_tool]` shortcode is used.

-   **Core Logic**: This is the "brain" of the plugin, handling all the main business logic.
    -   **Tool Manager**: Responsible for all CRUD operations related to tools. It handles the validation, sanitization, and database interactions.
    -   **Execution Engine**: Takes a tool and a set of inputs, communicates with the appropriate external AI Provider API, and processes the response.
    -   **Logging Service**: Responsible for writing detailed records of every tool execution to the database.

-   **Data Layer**: Where the plugin's data is stored.
    -   **`wp_mcp_tools`**: A custom database table that stores the configuration for every tool.
    -   **`wp_mcp_logs`**: A custom database table that stores a log of every execution.

-   **Extensibility Layer**: The system of hooks and filters that allows developers to extend and modify the plugin's functionality without editing the core code.

-   **External AI Services**: The third-party AI providers that power the tools. MCP for WP communicates with these services via their respective APIs. 