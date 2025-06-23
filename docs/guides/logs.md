---
title: Execution Logs
---

# 📝 Execution Logs

Every time a tool is run, MCP for WP records a detailed log of the event. These logs are an invaluable resource for debugging issues, auditing usage, and monitoring the performance of your AI tools.

## <strong>🔍 What Information is Logged?</strong>

For each execution, the following details are captured and stored:

-   **Tool ID and Name**: Identifies which tool was executed.
-   **Timestamp**: The exact date and time the tool was run.
-   **Status**: The final outcome of the execution (`Success` or `Error`).
-   **Request Payload**: The full input data (JSON) that was sent to the AI provider.
-   **Response Payload**: The full raw output (JSON) that was received from the AI provider.
-   **User Information**: The WordPress user who initiated the execution (if applicable).

## <strong>🖥️ How to View the Logs</strong>

You can easily access the execution logs from your WordPress admin dashboard.

1.  **Navigate to Logs**: Go to **MCP for WP > Logs**.
2.  **Review the List**: The screen displays the 100 most recent executions in a clear, table-based format.

![Logs Screen Screenshot](https://i.imgur.com/your-logs-image.png) <!-- Replace with a real screenshot -->

The log viewer includes columns for the time, the tool that was run, the status, and the request/response payloads.

## <strong>🛠️ Common Use Cases for Logs</strong>

### Debugging Failed Executions
This is the most common use for the logs. If a tool fails, the **Response Payload** will contain the exact error message returned by the AI provider's API. This could be anything from an invalid API key to a problem with the prompt itself. This detailed feedback is crucial for diagnosing and fixing the issue.

### Auditing Tool Usage
The logs provide a complete audit trail of all tool activity. This can be useful for understanding which tools are being used most frequently, who is using them, and when they are being run.

### Monitoring API Performance
By reviewing the timestamps and status of your logs, you can get a sense of how quickly the AI provider is responding and whether there are any intermittent performance issues.

## <strong>✅ Best Practices</strong>

-   **Check Logs First**: If you encounter an issue with a tool, the execution logs should always be the first place you look.
-   **Regularly Review**: It's a good practice to periodically review the logs to check for any unexpected errors or patterns.
-   **Understand the Payloads**: Familiarize yourself with the structure of the request and response payloads for your tools. This will make it much easier to debug issues when they arise. 