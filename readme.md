

## Diagram of the merchant of service
![DIAGRAM MERCHANT SERVICE](https://user-images.githubusercontent.com/99114034/169623839-e2b4601e-e9e4-466a-a2c5-f3fdabc07b0b.jpg)

## ERD oh the merchant of service
![ERD Merchant](https://user-images.githubusercontent.com/99114034/169623901-4dfa5e22-cbe1-4212-aadb-90a8cf423944.jpg)

## List Of API
#Merchant
{
  id: integer
  password: string
  name: string
  address: string
  join_date: date
  phone_number string
}

## GET/ register 
Returns all users in the system.

URL Params
None
Data Params
None
Headers
Content-Type: application/json
Success Response:
Code: 200
Content:
{
  users: [
           {<user_object>},
           {<user_object>},
           {<user_object>}
         ]
}

## GET /register
Returns the specified user.

URL Params
Required: id=[integer]
Data Params
None
Headers
Content-Type: application/json
Authorization: Bearer <Auth Token>
Success Response:
Code: 200
Content: { <user_object> }
Error Response:
Code: 400

  
 
##POST /register
Creates a new User.

URL Params
None
Headers
Content-Type: application/json
Data Params
  {
    username: string,
    email: string
  }
Success Response:
Code: 200
Content: { <user_object> }
PATCH /register
Updates fields on the specified user and returns the updated object.

URL Params
Required: id=[integer]
Data Params
  {
  	username: string,
    email: string
  }
Headers
Content-Type: application/json
Authorization: Bearer <OAuth Token>
Success Response:
Code: 200
Content: { <user_object> }
Error Response:
Code: 400

  
##DELETE /users/:id
Deletes the specified user.

URL Params
Required: id=[integer]
Data Params
None
Headers
Content-Type: application/json

Success Response:
Code: 200
Error Response:
Code: 404
Content: { "data deleted" }
OR
Code: 401
Content: { "data not found" }
  
  
##Products

Product object
{
  id: integer
  name: string
  quantity: integer
  price: integer
}
  
##GET /products
Returns all products in the system.

URL Params
None
Data Params
None
Headers
Content-Type: application/json
Success Response:
Code: 200
Content:
{
  products: [
           {<id>},
           {<name>},
           {<quantity>}
           {<price>}
         ]
}
    
##POST /products
Creates a new Product and returns the new object.

URL Params
None
Data Params
  {
    id: integer
  name: string
  quantity: integer
  price: integer
  }
  
Success Response:
Code: 200
Content: { <product_object> }
Error Response:
Code: 400
  

PATCH /products/:id
Updates fields on the specified product and returns the updated object.

URL Params
Required: id=[integer]
Data Params
  {
  	 id: integer
  name: string
  quantity: integer
  price: integer
  }

Content-Type: application/json
Success Response:
Code: 200
Content: { <product_object> }
Error Response:
Code: 400
  
  
DELETE /products
Deletes the specified product.

URL Params
Required: id=[integer]
Data Params
None
Headers
Content-Type: application/json
Success Response:
Code: 200
Error Response:
Code: 404
Content: { "product deleted" }
OR
Code: 401
Content: { "product not found" }

  
  

  
