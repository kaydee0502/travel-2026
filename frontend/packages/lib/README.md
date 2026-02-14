# @travel-2026/lib

Shared library utilities for the Travel 2026 application.

## Axios Interceptor

A pre-configured axios instance with request and response interceptors.

### Features

- **Authentication**: Automatically adds Bearer token from localStorage to all requests
- **Error Handling**: Centralized error handling for common HTTP status codes (401, 403, 404, 500)
- **Logging**: Development mode logging for requests and responses
- **Timeout**: 10-second default timeout
- **Base URL**: Configurable via `API_BASE_URL` environment variable

### Usage

```typescript
import { axiosInstance } from '@travel-2026/lib';

// GET request
const response = await axiosInstance.get('/users');

// POST request
const response = await axiosInstance.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// PUT request
const response = await axiosInstance.put('/users/1', {
  name: 'Jane Doe'
});

// DELETE request
const response = await axiosInstance.delete('/users/1');
```

### Configuration

Set the `API_BASE_URL` environment variable to configure the base URL:

```bash
# .env
API_BASE_URL=https://api.example.com
```

### Authentication

The interceptor automatically reads the auth token from localStorage:

```typescript
// Set token after login
localStorage.setItem('authToken', 'your-jwt-token');

// Clear token on logout
localStorage.removeItem('authToken');
```

### Error Handling

The interceptor handles common error scenarios:

- **401 Unauthorized**: Clears auth token from localStorage
- **403 Forbidden**: Logs forbidden access error
- **404 Not Found**: Logs resource not found
- **500 Server Error**: Logs internal server error
- **Network Error**: Logs when no response is received

You can add custom error handling in your components:

```typescript
try {
  const response = await axiosInstance.get('/users');
  // Handle success
} catch (error) {
  // Handle error
  console.error('Failed to fetch users:', error);
}
```
