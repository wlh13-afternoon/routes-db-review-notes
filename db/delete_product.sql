delete from store_products
where id = ($1)
returning *