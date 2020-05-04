# SOS-Users
The API is for user database,  in which provides the user endpoint and also connected with CICD through Travis and Heroku.

## List of Requirements:
* Create user account 
* Get accounts
* Get account by id
* Update account
* Delete account

## Table of contents
* [General info](#general-info)
  * [Hello World](#hello-world)
  * [Authentication](#authentication) 
* [User](#User)
  * [User Overview](#user-overview)
  * [User Object](#user-object)
* [API](#API)
  * [Requests and Responses](#requests-and-responses)
    * [GET users](#get-users)
    * [GET user by id](#get-user-by-id)
    * [POST update user](#post-update-user)
    * [Delete user](#delete-user)

## General info
 ### Hello World
 Our sos user endpoint is located at:
 
  `https://sos-userapi.herokuapp.com/`
 
 You can try send `GET` request to the endpoint. You should see the following JSON message:
 
 `Welcome to the default userAPI route`
 
 If you look at the header, you should see that the content-type is json:
 
 `Content-Type: application/json`
 
 ### Authentication
 
 To be upload
 
 ## User
 
 ### User Overview
 
User api has the following endpoints:

Method  | Endpoint | Description
--------| ------------- | -------------
GET     | /api/user/getUsers  | Get all users 
GET     | /api/user/gerUser/:id  | Get a user with a paticular `id`
POST     | /api/user/updateUser/:id  | Update a user with a paticular `id`
DELETE    | /api/user/deleteUser/:id | Delete a user with a paticular `id`  

### User Object

#### Attributes

Attribuute  | Type | Description
--------| ------------- | -------------
id     |  integer | ID of the user
firstname     | string  | Firstname of the user 
lastname     | string  | Lastname of the user 
username    | string | Username of the user
email    | string | Email of the user
password    | string | Password of the user
address    | string | Address of the user
phone    | string | Phone number of the user
role    | string | Role of the user
createdAt    | datetime | Datetime when first created
updatedAt    | datetime | Datetime when last updated

## API

### Requests and Responses

Example of requests and responses are given for each endpoints:

#### GET users

Fetch all the user accounts

__Endpoint:__

`/api/user/getUsers`

__Returns__ all user accounts:

``` 
{ "message": true,
    "user": [
        {
            "id": 4,
            "firstname": "Meow",
            
            "lastname": "Meowmeow",
            "username": "meow123",
            "role": "admin",
            "email": "m@gmail.com",
            "address": "111 foody st.",
            "phone": "0987654321"
        },
        {
            "id": 5,
            "firstname": "Tungm",
            "lastname": "May",
            "username": "tung111",
            "role": "customer",
            "email": "tm@gmail.com",
            "address": "111 foody st.",
            "phone": "0987654321"
        },
        {
            "id": 6,
            "firstname": "natttt",
            "lastname": "Sut",
            "username": "nsamita",
            "role": "customer",
            "email": "natte@gmail.com",
            "address": "111 high st.",
            "phone": "0987654321"
        }
    ]
}
```
#### GET user by id

Fetch the user account with the particular id

__Endpoint:__

`/api/user/getUser/:id` 

Returns a user witht given id (e.g. id = 4):
```
{
    "message": true,
    "user": [
        {
            "id": 4,
            "firstname": "Meow",
            "lastname": "Meowmeow",
            "username": "meow123",
            "role": "admin",
            "email": "m@gmail.com",
            "address": "111 foody st.",
            "phone": "0987654321"
        }
    ]
}
```
#### POST update user
Update the user account with the particular id

__Endpoint:__

`/api/user/updateUser/:id` 

Example: id = 6:

```
{"firstname":"natttt",
"lastname":"Sut", 
"username":"nsamita", 
"role":"customer",
"email":"natte@gmail.com",
"phone":"0987654321",
"address":"111 high st.",
"password": "123456789"
}
```
Returns a message if succeeded:
```
{
    "success": true,
    "message": "User account updated successfully."
}
```

#### Delete user

Delete the user account with the particular id

__Endpoint:__

`/api/user/deleteUser/:id` 

Example: id = 3

Returns a message if succeeded:
```
{
    "success": true,
    "message": "User account deleted successfully"
}
```



    

