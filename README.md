# Middleware & Simple Auth

## Problem 1

Build a logging system that tracks which PATH was accessed at which time.

Example:

/logs/requests.txt
```
GET /users/mo [Sat Jan 12 2019 01:18:43 GMT+0000 (UTC)]
PUT /users/mo [Sat Jan 12 2019 01:18:43 GMT+0000 (UTC)]
```

Use the following function to help you:

```javascript
const fs = require('fs');

const appendToLogFile = (fileName, stringData) => new Promise((resolve, reject) => {
  fs.appendFile(`./logs/${fileName}.txt`, `${stringData}\r\n`, (err) => {
  if (err) reject(err);
  resolve('Saved');
});
});
```

You will always probably will need to use the following:
- `req.originalUrl` to get the current PATH
- `req.method` to get the HTTP Method for the request


## Problem 2

Build a middleware that checks if the user making the request is logged in or not. You will be using `req.header` to check the `auth-token` key in the header. 

### If user is logged off

Don't let user continue!

```
HTTP STATUS 401 // Client Not Authenticated

{
  "type": 401,
  "message": "Client Not Authenticated."
}
```

### If user is logged in

Continue to whatever request!

## Problem 3 

Build a middleware that checks if the right user is making changes to their account. So for example, user `mo` should only be able to update the information for `mo`. 

- Before coding think about which routes need to be protected.
- Think about what information do we have on the client that can help authenticate

### If correct user

Carry on and let them continue

### If user does not match

```
HTTP STATUS 403 // Access Denied

{
  "type": 403,
  "message": "Access denied at resource."
}
```

