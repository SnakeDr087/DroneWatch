# Supabase Connection Troubleshooting Guide

## Visual Indicator
When experiencing connection issues, you'll see:
- A "circle with a line through it" icon in the Supabase connection status
- The connection indicator will be red instead of green
- Possible error toast notifications in your application

## Common Causes & Solutions

### 1. Environment Variables
**Symptoms:**
- `Missing Supabase environment variables` error in console
- Connection fails immediately

**Verification:**
```bash
# Check if environment variables are loaded
echo $VITE_SUPABASE_URL
echo $VITE_SUPABASE_ANON_KEY
```

**Solution:**
1. Verify `.env` file exists in project root
2. Ensure it contains:
```env
VITE_SUPABASE_URL=https://your-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
3. Restart development server

### 2. API Configuration
**Symptoms:**
- `FetchError: Failed to fetch` in console
- Timeout errors

**Verification:**
1. Check Supabase URL format:
```typescript
// Should match this pattern
https://[project-ref].supabase.co
```

2. Test API endpoint:
```bash
curl -i https://[your-project].supabase.co/rest/v1/
```

**Solution:**
1. Verify project URL in Supabase dashboard
2. Check API settings in Project Settings > API
3. Ensure anon key has correct permissions

### 3. Network Connectivity
**Symptoms:**
- Intermittent connection drops
- Timeout errors

**Verification:**
```bash
# Test connection to Supabase
ping [your-project].supabase.co

# Check for SSL issues
curl -vI https://[your-project].supabase.co
```

**Solution:**
1. Check network connectivity
2. Verify firewall rules
3. Check SSL certificate validity

### 4. Authentication Issues
**Symptoms:**
- `AuthApiError: Invalid JWT`
- `AuthApiError: Invalid login credentials`

**Verification:**
```typescript
// Test auth state
const { data: { session }, error } = await supabase.auth.getSession()
console.log('Auth Error:', error)
console.log('Session:', session)
```

**Solution:**
1. Clear browser storage:
```javascript
localStorage.clear()
```
2. Verify JWT expiration
3. Check auth settings in Supabase dashboard

### 5. Database Access
**Symptoms:**
- `PostgresError: permission denied`
- RLS policy errors

**Verification:**
```sql
-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies;
```

**Solution:**
1. Verify RLS policies are enabled
2. Check table permissions
3. Validate user roles and claims

## Verification Steps

### 1. Connection Test
```typescript
const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('count(*)')
      .single();
      
    if (error) throw error;
    console.log('Connection successful');
    return true;
  } catch (error) {
    console.error('Connection failed:', error);
    return false;
  }
};
```

### 2. Auth State Check
```typescript
const checkAuth = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Auth error:', error);
    return false;
  }
  console.log('Auth state valid:', !!session);
  return !!session;
};
```

### 3. Database Query Test
```typescript
const testQuery = async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1);
      
    if (error) throw error;
    console.log('Query successful');
    return true;
  } catch (error) {
    console.error('Query failed:', error);
    return false;
  }
};
```

## Common Error Messages

| Error Message | Likely Cause | Solution |
|--------------|--------------|----------|
| `Missing Supabase environment variables` | Environment setup | Check `.env` file |
| `FetchError: Failed to fetch` | Network/API issue | Verify URL and network |
| `AuthApiError: Invalid JWT` | Auth token expired | Clear storage, re-login |
| `PostgresError: permission denied` | RLS/permissions | Check policies |
| `TypeError: Failed to fetch` | CORS/Network | Check API settings |

## After Fixing

1. Clear browser storage
2. Restart development server
3. Run connection tests
4. Verify auth state
5. Test database queries
6. Monitor error logs

If issues persist, check Supabase status page and contact support with:
- Error messages
- Network logs
- Auth state
- Database logs