CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(25),
    price INT, 
    img TEXT
);

INSERT INTO products (name, price, img)
VALUES 
('shirt', 25, 'https://cdn.shopify.com/s/files/1/0069/7692/products/Ron_Swanson_Parks_and_Rec_RSVLTS_Shirt_-_005.jpg?v=1558298391'),
('button up', 35, 'https://cdn.shopify.com/s/files/1/0069/7692/products/Ron_Swanson_Parks_and_Rec_RSVLTS_Shirt_-_005.jpg?v=1558298391'),
('collared shirt', 50, 'https://cdn.shopify.com/s/files/1/0069/7692/products/Ron_Swanson_Parks_and_Rec_RSVLTS_Shirt_-_005.jpg?v=1558298391');