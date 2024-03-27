# Api Spec User

## Login User Api

Request Body:
```json
{
  "email": "example@gmail.com",
  "password": "kelompok2"
}
```

Response Body Success:
```json
{
  "status": true,
  "statusResponse": 200,
  "message": "Login successfully",
  "data": {
    "name": "Example",
    "email": "example@gmail.com",
    "token": "unique-token"
  }
}
```

Response Body Error:

```json
  {
    "status": false,
    "statusResponse": 401,
    "message": "Email or password wrong",
    "data": null
}

```
Response Body Error:

```json
  {
    "status": false,
    "statusResponse": 400,
    "message": {
        "email": [
            "email message error"
        ],
        "password": [
            "password message error"
        ]
    },
    "data": null
    }
```


## Logout User Api

Response Body Success:
```json
{
  "status": true,
  "statusResponse": 200,
  "message": "Logout successfully",
  "data": null
}
```
