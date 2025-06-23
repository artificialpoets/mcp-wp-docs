---
title: Migration Guide
---

# Migration Guide

This guide provides instructions for migrating to new versions of MCP for WP and for transitioning from other plugins.

## <strong>⬆️ Upgrading MCP for WP</strong>

We strive to make all updates as seamless as possible. For minor updates (e.g., from `1.0` to `1.1`), you can typically use the standard WordPress plugin update process without any issues.

However, for major version upgrades (e.g., from `1.x` to `2.0`), there may be significant changes that require manual steps.

### Migrating from Version 1.x to 2.0

Version 2.0 of MCP for WP introduced a new database schema for improved performance and flexibility. While the plugin will attempt to automatically migrate your data, we strongly recommend following these steps to ensure a smooth transition.

**⚠️ Warning: Always back up your database before performing a major upgrade!**

1.  **Backup Your Site**: Before you do anything else, create a full backup of your WordPress site's files and database.
2.  **Test in a Staging Environment**: It is crucial that you test the upgrade on a staging or development site first, not on your live production site.
3.  **Deactivate the Old Version**: Deactivate and delete the old version of the MCP for WP plugin.
4.  **Install the New Version**: Install and activate the new version of the plugin.
5.  **Run the Migration Script**: Upon activation, the plugin should automatically detect the old database tables and prompt you to run the migration script. Follow the on-screen instructions.
6.  **Verify Your Data**: Once the migration is complete, carefully check your tools and logs to ensure that all data has been migrated correctly.
7.  **Test Functionality**: Thoroughly test all of your tools to ensure they are working as expected with the new version.

If you encounter any issues during the migration process, please restore your backup and contact our support team for assistance.

## <strong>➡️ Migrating from Other Plugins</strong>

We understand that you may be looking to switch to MCP for WP from another AI or automation plugin. While we don't have direct, one-click importers for other plugins at this time, we are committed to making the transition as easy as possible.

### General Steps

1.  **Export Your Data**: If your current plugin allows you to export your configurations or data (e.g., as JSON or CSV), do so.
2.  **Analyze the Structure**: Analyze the structure of the exported data to understand how it maps to the concepts in MCP for WP (Tools, Schemas, Providers, etc.).
3.  **Re-create in MCP for WP**: Manually re-create your configurations as new tools within the MCP for WP interface. For large amounts of data, you may consider writing a custom script that uses our [REST API](./api-reference) to automate this process.

### 🤝 Community Contributions

Have you successfully migrated from another plugin and developed a script or a process to do so? We would love to hear from you! Please consider sharing your experience and any scripts you've created by opening an issue or a pull request on our [GitHub repository](https://github.com/artificialpoets/mcp-wp-docs). Your contributions can help make the process easier for the entire community. 