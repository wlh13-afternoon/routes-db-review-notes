create table store_products (
id serial primary key not null,
product_name varchar(100) not null,
price numeric not null,
image text
)

insert into store_products (product_name, price, image)
values ('Cheetos', 3.99, 'https://images-na.ssl-images-amazon.com/images/I/91dl7O-wxhL._SX425_PIbundle-40,TopRight,0,0_AA425SH20_.jpg'),
('Slim Jim', 1.99, 'https://target.scene7.com/is/image/Target/GUEST_09c8ff9d-b838-413e-a594-ceb1e4a12f7f?wid=488&hei=488&fmt=pjpeg')

select * from store_products


drop table store_products