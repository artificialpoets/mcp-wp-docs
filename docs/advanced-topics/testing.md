---
title: Testing
---

# Testing

A robust testing suite is crucial for maintaining the quality and stability of MCP for WP. We use PHPUnit for our automated tests, and we encourage all contributors to write tests for their code.

## <strong>Setting Up the Test Environment</strong>

The plugin uses the standard WordPress testing framework. To get started, you'll need a local MySQL database and `svn` and `git` installed on your machine.

### 1. Install Dependencies

First, you'll need to install PHPUnit. The recommended way to do this is via Composer. If you don't have Composer, you can install it from [getcomposer.org](https://getcomposer.org/).

```bash
composer require --dev phpunit/phpunit
```

### 2. Set Up the Test Database and WordPress Install

We provide a shell script to automate the setup of a test database and a fresh WordPress installation for testing.

From the root of the plugin directory (`wp-mcp/`), run the following commands:

```bash
# Make the script executable
chmod +x bin/install-wp-tests.sh

# Run the script
# Replace db_name, db_user, and db_pass with your test database credentials
bin/install-wp-tests.sh <db_name> <db_user> <db_pass>
```

This script will:
- Create a new database for testing.
- Download the WordPress test library from GitHub.
- Download a fresh copy of WordPress.
- Configure the test environment.

## <strong>Running the Tests</strong>

Once the setup is complete, you can run the entire test suite from the plugin's root directory with a single command:

```bash
./vendor/bin/phpunit
```

You should see output indicating that the tests are running. If everything is set up correctly, you'll see a success message with the number of tests and assertions.

## <strong>Writing Tests</strong>

When you contribute new code, please also include tests for that code.

-   **Unit Tests:** Tests for specific classes and functions should go in the `/tests` directory. See `tests/test-tool-manager.php` for an example.
-   **REST API Tests:** Tests for our REST API endpoints are in `tests/test-api-handler.php`.

All test classes should extend `WP_UnitTestCase` or a related class from the WordPress testing framework. 