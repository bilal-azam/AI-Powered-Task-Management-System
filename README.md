## API Endpoints
- **GET /api/products** - Retrieve a list of products
- **POST /api/products** - Create a new product
- **GET /api/products/:id** - Retrieve a product by ID
- **PUT /api/products/:id** - Update a product
- **DELETE /api/products/:id** - Delete a product
- **POST /api/reviews** - Add a review to a product
- **GET /api/reviews/:productId** - Retrieve reviews for a product
- **POST /api/orders** - Place a new order
- **GET /api/orders/:userId** - Retrieve orders for a user

## Data Models
- **Product**
  - `id`: string
  - `name`: string
  - `price`: number
  - `description`: string
  - `category`: string
  - `rating`: number

- **Review**
  - `id`: string
  - `productId`: string
  - `userId`: string
  - `rating`: number
  - `comment`: string

- **Order**
  - `id`: string
  - `userId`: string
  - `products`: array of product IDs
  - `totalAmount`: number
  - `status`: string