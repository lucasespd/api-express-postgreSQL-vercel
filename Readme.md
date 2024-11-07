1. Crear una cuenta en vercel.
2. Crear una carpeta api y colocar nuestro index.js en esa carpeta.
3. Crear un archivo vercel.json como el de este proyecto.
4. Importante, utilizar el paquete dotenv (npm i dotenv) y no el incluído con node, ya que no está soportado aún (index.js línea 17).
5. _Importante_ instalar el paquete de postgreSQL.

`npm install --save pg pg-hstore`

CREATE TABLE autos (
id SERIAL PRIMARY KEY NOT NULL,
nombre varchar(255) NOT NULL,
patente varchar(255) NOT NULL,
precio float NOT NULL,
eliminado BOOL NOT NULL DEFAULT false,
creado_en DATE NOT NULL,
updatedAt DATE NOT NULL
)

CREATE TABLE garages (
id SERIAL PRIMARY KEY NOT NULL,
nombre varchar(255) NOT NULL,
eliminado BOOL NOT NULL DEFAULT false,
creado_en DATE NOT NULL,
updatedAt DATE NOT NULL
)
