---
title: Troubleshooting
---

# 🔧 Troubleshooting Guide

When things don't work as expected, this comprehensive guide will help you diagnose and resolve issues quickly. We've organized problems by category and severity to get you back on track fast.

## <strong>🚨 Critical Issues (Plugin Won't Work)</strong>

### Plugin Activation Failures

**Problem**: "Plugin could not be activated due to a fatal error."

**Root Causes & Solutions**:

1. **PHP Version Incompatibility**
   - **Error**: "Parse error: syntax error, unexpected '?'"
   - **Solution**: Upgrade to PHP 8.0+ (MCP for WP requires modern PHP features)
   - **Check**: Go to **Tools > Site Health** in WordPress admin

2. **WordPress Version Too Old**
   - **Error**: "Plugin requires WordPress 5.8 or higher"
   - **Solution**: Update WordPress to the latest version
   - **Check**: **Dashboard > Updates**

3. **Memory Limit Exceeded**
   - **Error**: "Fatal error: Allowed memory size exhausted"
   - **Solution**: Increase PHP memory limit to 256M or higher
   - **Add to wp-config.php**:
     ```php
     define('WP_MEMORY_LIMIT', '256M');
     ```

4. **Missing Required Extensions**
   - **Error**: "Call to undefined function json_decode"
   - **Solution**: Enable JSON extension in PHP
   - **Check**: Contact your hosting provider

### Database Connection Issues

**Problem**: "Unable to create database tables"

**Solutions**:
1. **Check Database Permissions**: Ensure your database user has CREATE, ALTER, and INSERT privileges
2. **Verify Database Connection**: Test connection in **Tools > Site Health**
3. **Manual Table Creation**: If auto-creation fails, run the activation hook manually

## <strong>⚠️ Configuration Issues (Plugin Works, But Tools Don't)</strong>

### API Key Problems

**Problem**: "Invalid API key" or "Authentication failed"

**Diagnostic Steps**:
1. **Verify Key Format**: Each provider has specific key formats
   - OpenAI: `sk-...` (starts with sk-)
   - Claude: `sk-ant-...` (starts with sk-ant-)
   - Gemini: Usually a long string without prefix
2. **Check Key Validity**: Test your key directly on the provider's platform
3. **Verify Account Status**: Ensure your account isn't suspended or rate-limited
4. **Check Billing**: Some providers require active billing for API access

**Common API Key Errors**:
- **"Invalid API key"**: Key is malformed or expired
- **"Insufficient credits"**: Account needs funding
- **"Rate limit exceeded"**: Too many requests in a short period

### Provider-Specific Configuration

**OpenAI Issues**:
- **"Model not found"**: Check if you're using the correct model name (e.g., `gpt-4`, `gpt-3.5-turbo`)
- **"Organization not found"**: Verify your organization ID in settings

**Claude Issues**:
- **"Model access denied"**: Ensure you have access to the specific Claude model
- **"Invalid request"**: Check that your prompt doesn't exceed context limits

**Gemini Issues**:
- **"API key not valid"**: Verify your Google Cloud project and API key
- **"Quota exceeded"**: Check your Google Cloud quotas

## <strong>🔍 Tool Execution Problems</strong>

### Tool Creation Issues

**Problem**: "Tool saved but doesn't work"

**Checklist**:
1. **JSON Schema Validation**: Ensure your input/output schemas are valid JSON
2. **Required Fields**: Verify all required fields are properly defined
3. **Model Selection**: Confirm the selected model exists and is accessible
4. **Provider Configuration**: Ensure the provider is properly configured

### Execution Failures

**Problem**: "Tool execution failed"

**Debug Steps**:
1. **Check Logs**: Go to **MCP for WP > Logs** and examine the error details
2. **Test Provider Connection**: Use the test button in provider settings
3. **Verify Tool Configuration**: Double-check all tool settings
4. **Check Rate Limits**: Some providers have strict rate limits

**Common Execution Errors**:
- **"Request timeout"**: Increase timeout settings or check network
- **"Context too long"**: Reduce input size or use a model with larger context
- **"Invalid JSON"**: Check your input/output schema formatting

## <strong>🌐 Network & Connectivity Issues</strong>

### REST API Problems

**Problem**: "REST API not responding"

**Solutions**:
1. **Check Permalinks**: Go to **Settings > Permalinks** and save (flushes rewrite rules)
2. **Verify Endpoint**: Test `https://yoursite.com/wp-json/` in browser
3. **Check Authentication**: Ensure proper authentication headers
4. **Plugin Conflicts**: Temporarily disable other plugins to test

### SSL/HTTPS Issues

**Problem**: "SSL certificate verification failed"

**Solutions**:
1. **Update SSL Certificate**: Ensure your site has a valid SSL certificate
2. **Check cURL Settings**: Some hosts block external HTTPS requests
3. **Add to wp-config.php** (if needed):
   ```php
   define('WP_HTTP_BLOCK_EXTERNAL', false);
   ```

## <strong>📊 Performance & Resource Issues</strong>

### Memory Problems

**Problem**: "Out of memory" during tool execution

**Solutions**:
1. **Increase Memory Limit**: Set to 512M or higher
2. **Optimize Input Size**: Reduce the size of data sent to AI providers
3. **Use Streaming**: Enable streaming for large responses
4. **Check for Memory Leaks**: Monitor memory usage during execution

### Timeout Issues

**Problem**: "Request timed out"

**Solutions**:
1. **Increase Timeout**: Set longer timeout values in tool configuration
2. **Optimize Prompts**: Reduce prompt complexity
3. **Use Faster Models**: Switch to faster, less resource-intensive models
4. **Check Network**: Ensure stable internet connection

## <strong>🔐 Security & Permission Issues</strong>

### User Permission Problems

**Problem**: "You don't have permission to access this"

**Solutions**:
1. **Check User Roles**: Ensure user has appropriate WordPress capabilities
2. **Verify Nonces**: Check if nonces are properly generated and validated
3. **Review Capabilities**: Ensure `manage_options` capability for admin functions

### API Security Issues

**Problem**: "Unauthorized access"

**Solutions**:
1. **Check API Keys**: Ensure keys are properly stored and not exposed
2. **Verify IP Whitelisting**: Some providers require IP whitelisting
3. **Review Request Headers**: Ensure proper authentication headers

## <strong>🔄 Integration & Compatibility Issues</strong>

### Theme Conflicts

**Problem**: "Admin interface looks broken"

**Solutions**:
1. **Switch to Default Theme**: Temporarily activate Twenty Twenty-Four
2. **Check CSS Conflicts**: Look for conflicting styles
3. **Update Theme**: Ensure theme is compatible with WordPress version

### Plugin Conflicts

**Problem**: "Other plugins interfering with MCP for WP"

**Diagnostic Process**:
1. **Disable All Plugins**: Except MCP for WP
2. **Test Functionality**: Verify MCP for WP works
3. **Enable Plugins One by One**: Identify the conflicting plugin
4. **Check for Solutions**: Look for compatibility fixes

### Hosting Environment Issues

**Problem**: "Works locally but not on production"

**Checklist**:
1. **PHP Version**: Ensure production has PHP 8.0+
2. **Extensions**: Verify all required PHP extensions are enabled
3. **File Permissions**: Check proper file and directory permissions
4. **Server Configuration**: Ensure server allows external API calls

## <strong>📝 Debugging & Logging</strong>

### Enable Debug Mode

**Add to wp-config.php**:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

### Check Logs

**WordPress Logs**: `wp-content/debug.log`
**MCP for WP Logs**: **MCP for WP > Logs** in admin
**Server Logs**: Check hosting provider's error logs

### Common Log Messages

- **"cURL error 28"**: Request timeout
- **"cURL error 6"**: Could not resolve host
- **"cURL error 35"**: SSL connection error
- **"JSON decode error"**: Invalid JSON response

## <strong>🚀 Performance Optimization</strong>

### Slow Tool Execution

**Optimization Tips**:
1. **Use Appropriate Models**: Choose faster models for simple tasks
2. **Optimize Prompts**: Keep prompts concise and focused
3. **Enable Caching**: Use response caching where appropriate
4. **Batch Requests**: Group multiple requests when possible

### Database Optimization

**For High-Usage Sites**:
1. **Clean Old Logs**: Regularly clean execution logs
2. **Optimize Tables**: Use WordPress database optimization tools
3. **Monitor Query Performance**: Check for slow queries

## <strong>🆘 Getting Help</strong>

### Before Asking for Help

**Gather This Information**:
1. **Error Messages**: Exact error text from logs
2. **Environment Details**: WordPress version, PHP version, hosting provider
3. **Steps to Reproduce**: Detailed steps that cause the issue
4. **What You've Tried**: List of troubleshooting steps already attempted

### Support Channels

**Priority Order**:
1. **GitHub Issues**: [Create an issue](https://github.com/artificialpoets/wp-mcp-docs/issues) with detailed information
2. **Documentation**: Check this guide and other docs first
3. **Community**: Ask in WordPress forums or community groups

### Emergency Contacts

**For Critical Issues**:
- **Security Issues**: Report immediately via GitHub security advisories
- **Data Loss**: Contact support immediately with backup information
- **Production Outages**: Include server logs and error details

---

**Remember**: Most issues can be resolved by following this guide systematically. When in doubt, start with the basics and work your way up to more complex solutions. 