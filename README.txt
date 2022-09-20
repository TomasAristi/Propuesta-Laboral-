run npm install in terminal

run node app.js in terminal to start

3. BONUS:
	a.
		select * from VENTAS
		inner join VENDEDORES on ID_VENDEDOR = VENDEDORES.ID_VENDEDOR
		join PROVINCIA
		inner join CLIENTES on ID_PROVINCIA = 4
		where ID_VENDEDOR = 4
	b.
		select NOMBRE,sum(length) from VENDEDORES
		inner join VENTAS on ID_VENDEDOR = VENDEDOR.ID 
		where extract(year from FECHA) = 2021
		group by VENDEDORES.NOMBRE