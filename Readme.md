1. Crear una cuenta en vercel.
2. Crear una carpeta api y colocar nuestro index.js en esa carpeta.
3. Crear un archivo vercel.json como el de este proyecto.
4. Importante, utilizar el paquete dotenv (npm i dotenv) y no el incluído con node, ya que no está soportado aún (index.js línea 17).
5. _Importante_ instalar el paquete de postgreSQL.

`npm install --save pg pg-hstore`

CREATE TABLE IF NOT EXISTS "Garages" ("id" SERIAL , "nombre" VARCHAR(255) NOT NULL, "eliminado" BOOLEAN NOT NULL DEFAULT false, "creado_en" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

CREATE TABLE IF NOT EXISTS "Autos" ("id" SERIAL , "nombre" VARCHAR(255) NOT NULL, "patente" VARCHAR(255) NOT NULL, "precio" FLOAT NOT NULL, "eliminado" BOOLEAN NOT NULL DEFAULT false, "creado_en" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "GarageId" INTEGER REFERENCES "Garages" ("id") ON DELETE SET NULL ON UPDATE CASCADE, PRIMARY KEY ("id"));
