# ts-express-sequelize

## User routes

### get all data

```
$ curl http://localhost:3000/users
```

### get user by id

```
# status code 200
$ curl http://localhost:3000/users/1

# status code 404
$ curl http://localhost:3000/users/9999

# status code 500
$ curl http://localhost:3000/users/abcdefg
```

### create data

```
# status code 201
$ curl -X POST --data "name=first" http://localhost:3000/users/

# status code 500
$ curl -X POST http://localhost:3000/users/
```

### update data

```
$ curl -X PUT --data "name=updated" http://localhost:3000/users/1
```

### delete data

```
$ curl -X DELETE  http://localhost:3000/users/1
```

### relationships

```
# status code 200
$ curl http://localhost:3000/users/book/1

# status code 404
$ curl http://localhost:3000/users/book/9999

# status code 500
$ curl http://localhost:3000/users/book/abcdefg
```

## Book routes

### get all data

```
$ curl http://localhost:3000/books
```

### get book by id

```
# status code 200
$ curl http://localhost:3000/books/1

# status code 404
$ curl http://localhost:3000/books/9999

# status code 500
$ curl http://localhost:3000/books/abcdefg
```

### create data

```
# status code 201
$ curl -X POST --data "name=book1" --data "userId=1" http://localhost:3000/books/

# status code 500
$ curl -X POST http://localhost:3000/books/
```

### update data

```
$ curl -X PUT --data "name=updated" http://localhost:3000/books/1
```

### delete data

```
$ curl -X DELETE  http://localhost:3000/books/1
```
