# ts-express-sequelize

### get all data

```
$ curl http://localhost:3000/nodes
```

### get node by id

```
# status code 200
$ curl http://localhost:3000/nodes/1

# status code 404
$ curl http://localhost:3000/nodes/9999

# status code 500
$ curl http://localhost:3000/nodes/abcdefg
```

### create data

```
# status code 201
$ curl -X POST --data "name=first" http://localhost:3000/nodes/

# status code 500
$ curl -X POST http://localhost:3000/nodes/
```
