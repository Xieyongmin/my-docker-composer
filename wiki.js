version: '3'

services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: wiki
      MYSQL_ROOT_PASSWORD: password
      MYSQL_USER: wikijs
      MYSQL_PASSWORD: password
    volumes:
      - db-data:/var/lib/mysql

  wiki:
    image: requarks/wiki:2
    environment:
      DB_TYPE: mysql
      DB_HOST: db
      DB_PORT: 3306
      DB_USER: wikijs
      DB_PASS: password
      DB_NAME: wiki
    ports:
      - 3000:3000
    volumes:
      - ./wiki:/app

volumes:
  db-data:
