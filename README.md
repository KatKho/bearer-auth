# bearer-auth

This is an Express server that implements Basic Authentication and Bearer Token Authentication, using a Postgres database for storage.

## Installation

* `npm install`

Set your PORT and Database environment with an .env file

```text
PORT=3001
DATABASE_URL=postgres://localhost:5434/database_name
```

## Usage

### Authentication System (Phase 2)

#### Obtain Token (POST)

- **Route**: `/auth/token`
- **Method**: POST
- **Parameters**:
  - `username` (String)
  - `password` (String)
- **Expected Response (Success)**:
  - Status Code: 200
  - Response Body: JSON containing user data and token

## URLs

- [Main branch](https://bearer-aut.onrender.com)
- [PR](https://github.com/KatKho/bearer-auth/pull/1)
- [GitHub Actions](https://github.com/KatKho/bearer-auth/actions)

## Contributors

Ekaterina Khoroshilova