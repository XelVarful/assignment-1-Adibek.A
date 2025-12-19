# Assignment 1 WEB Technologies 2

## Project Description
This project is an API for managing books, implemented using **Node.js** and **Express**. The API supports CRUD operations (Create, Read, Update, Delete) for working with books. This project is for educational purposes, and it is my first project using server-side technologies with Node.js.

## Technologies Used:
- **Node.js**: JavaScript runtime environment.
- **Express**: Framework for building web applications on Node.js.
- **UUID**: Library for generating unique identifiers for books.

## Running the Server

To start the server, run the following command:

```node server.js```

The server will be available at http://localhost:3000

## API Routes
### 1. GET /books

Retrieve all books. On a successful request, it will return a list of all the books in JSON format.

Request Example:

Method: ```GET```

URL: http://localhost:3000/books

Response Example:
```
{
    "id": "846e767d-9e7a-401f-8843-9e24766f299e",
    "name": "1984",
    "author": "George Orwell",
    "published": 1949,
    "genre": "Dystopian"
  }
```
![Uploading Снимок экрана 2025-12-19 в 16.13.57.png…]()

### 2. POST /books

Add a new book to the system. The request body should contain the book's data, including the title, author, and year of publication. After adding, the book will be returned with a unique ID.

#### Request Example:

Method: ```POST```

URL: http://localhost:3000/books

Body:
```
{
  "name": "1984",
  "author": "George Orwell",
  "published": 1949,
  "genre": "Dystopian"
}
```
Response Example:
```
{
  "id": "846e767d-9e7a-401f-8843-9e24766f299e",
  "name": "1984",
  "author": "George Orwell",
  "published": 1949,
  "genre": "Dystopian"
}
```
### 3. PUT /books/:id

Update the data of a book by its ID. The request body should contain the updated book data.

Request Example:

Method: ```PUT ```

URL: http://localhost:3000/books/846e767d-9e7a-401f-8843-9e24766f299e

Body:
```
{
  "name": "Animal Farm",
  "author": "George Orwell",
  "published": 1945,
  "genre": "Political satire"
}

```
Response Example:
```
{
  "id": "846e767d-9e7a-401f-8843-9e24766f299e",
  "name": "Animal Farm",
  "author": "George Orwell",
  "published": 1945,
  "genre": "Political satire"
}

```
### 4. DELETE /books/:id

Delete a book by its ID. After deletion, a success confirmation will be returned.

Request Example:

Method: ```DELETE```

URL: http://localhost:3000/books/846e767d-9e7a-401f-8843-9e24766f299e

Response Example:
```
{
  "success": true
}
```













