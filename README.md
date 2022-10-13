# DEMO
(CRUD API)
#### install nodejs
#### install git

### npm init = create project
```npm
npm init -y
```

### npm i express
```install express
npm i express mongoose morgan nodemon helmet
```

### create file app.js and import all library then use function
### use listen port to run project
### test port and response 
### connect mongoDB by mongoose and create Schema and model
### create router "/api/notes"
```
| function | Method |            RelativePath              |
| -------- | ------ | ------------------------------------ |
| findall  | GET    | http://localhost:3000/api/notes/     |
| findone  | GET    | http://localhost:3000/api/notes/:id  |
| create   | POST   | http://localhost:3000/api/notes/     |
| update   | PUT    | http://localhost:3000/api/notes/:id  |
| delete   | DELETE | http://localhost:3000/api/notes/:id  |

```