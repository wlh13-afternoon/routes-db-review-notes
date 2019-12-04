delete from store_products
where id = ($1);
select * from store_products;