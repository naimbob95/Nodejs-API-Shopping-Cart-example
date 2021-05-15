
# Shopping cart with nodejs and MongoDB

Shopping Cart API using Nodejs and MongoDb as Database


## Installation 

Install my-project with npm

```bash 
  git clone <project-url>
  npm install
  cd <project-directory>
  node src

```
The API will be running on localhost:4000 or 127.0.0.1:4000
    
## Tech Stack


**Server:** Node, Express

**Database:** MongoDB (Using Docker to host the MongoDB)

  
## API Reference

### Product

#### Create Product


```http
  POST /product
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. The name of the Product. |
| `price`      | `string` | **Required**. The price of the Product. |
| `image`      | `file` | The image of the product. |

#### Get all Products

```http
  GET /product
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | |  |


#### Get Product By ID

```http
  GET /product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|    |  |  |


#### Get item

```http
  DELETE /product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|      |  |  |

### Cart

#### Add item to cart
```http
  POST /cart
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| productId | String |**Required**. This is the product id. |
| quantity | Integer |**Required**. This is the quantity of the item. |

#### Get list of item in cart
```http
  GET /cart
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | |  |




#### Empty the cart

```http
  DELETE /cart/empty-cart
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|      |  |  |


  
## References

https://www.wrappixel.com/building-a-shopping-cart-in-nodejs/