# Simple CRUD

Simple CRUD microservices 

## Getting Started

### Prerequisites

In order to run this project you should have installed Docker and Docker compose

### Installing

Steps to run project:

1) update db connection string in `config/development`
2) run `docker-compose up -d`

Docker will star several microservices whith entry point on `localhost:3000`
available endpoints `/users` and `books`, each support basic CRUD.
Example: GET on `localhost:3000/books/` will return list of all saved books

Example: GET on `localhost:3000/books/5a12e90364b4cb000163abdb` will return book with specified ID, book id is mongo _id field

Both entities book and user have only one field `name`