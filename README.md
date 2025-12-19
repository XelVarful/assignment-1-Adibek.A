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
## Part 1 create demo route 
### hello
<img width="856" height="336" alt="Снимок экрана 2025-12-19 в 16 37 59" src="https://github.com/user-attachments/assets/1579b28b-09bf-48bc-b65d-e25020b394cc" />

### time 
<img width="861" height="342" alt="Снимок экрана 2025-12-19 в 16 39 02" src="https://github.com/user-attachments/assets/683f0bdd-5a16-4d8c-9a19-52616f42fe52" />

### Status
<img width="856" height="368" alt="Снимок экрана 2025-12-19 в 16 41 03" src="https://github.com/user-attachments/assets/f0798b44-15e2-4571-81b9-3b0bfa634137" />

## Part 2 API Routes
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
<img width="1275" height="738" alt="Снимок экрана 2025-12-19 в 16 25 28" src="https://github.com/user-attachments/assets/9b0ba254-363f-4ef3-84e5-e7447c0e9fb0" />


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
<img width="1287" height="795" alt="Снимок экрана 2025-12-19 в 16 26 24" src="https://github.com/user-attachments/assets/85b4aa20-8077-4582-8987-30c27f5de756" />

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
<img width="1281" height="802" alt="Снимок экрана 2025-12-19 в 16 27 05" src="https://github.com/user-attachments/assets/ae50c3d6-cffe-4e82-ad5f-5ed6a2ebf1c9" />

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
<img width="1281" height="801" alt="Снимок экрана 2025-12-19 в 16 27 51" src="https://github.com/user-attachments/assets/b6e50ef2-d941-4254-bd1b-3a2434ddef61" />













