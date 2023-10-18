CREATE TABLE products ( id SERIAL PRIMARY KEY,
                                          sku TEXT, name TEXT, price INT, images JSONB,
                                                                          category TEXT);


CREATE TABLE users ( id SERIAL PRIMARY KEY NOT NULL,
                                           user_id uuid DEFAULT uuid_generate_v4(),
                                                                username TEXT, password TEXT, first_name TEXT, last_name TEXT, phone BIGINT, created_on timestamp default DATE_TRUNC('SECOND', CURRENT_TIMESTAMP) NOT NULL,
                                                                                                                                                                                                                  updated_on timestamp default DATE_TRUNC('SECOND', CURRENT_TIMESTAMP) NOT NULL);


CREATE TABLE carts ( id SERIAL PRIMARY KEY NOT NULL,
                                           user_id INT REFERENCES users (id),
                                                                  products JSONB[], created_on timestamp default DATE_TRUNC('SECOND', CURRENT_TIMESTAMP) NOT NULL,
                                                                                                                                                         updated_on timestamp default DATE_TRUNC('SECOND', CURRENT_TIMESTAMP) NOT NULL)
CREATE TABLE orders ( id SERIAL PRIMARY KEY NOT NULL,
                                            cart_id INT REFERENCES carts (id),
                                                                   user_id INT REFERENCES users (id),
                                                                                          total_price INT, shipping_info JSONB,
                                                                                                           order_status TEXT, created_on timestamp default DATE_TRUNC('SECOND', CURRENT_TIMESTAMP) NOT NULL,
                                                                                                                                                                                                   updated_on timestamp default DATE_TRUNC('SECOND', CURRENT_TIMESTAMP) NOT NULL);

carts.products = [
  {
    sku: "dd1391-100",
    sizes: {
      size: quantity
    }
  }
]
INSERT INTO carts (user_id, products)
VALUES (3, ARRAY[ '{"sku": "DD1391-100","size": 8,"quantity": 1}'::jsonb,
                  '{"sku": "CU1726-100","size": 9.5,"quantity": 1}'::jsonb,
                  '{"size": 10,"quantity": 1}'::jsonb ]::jsonb[]);

