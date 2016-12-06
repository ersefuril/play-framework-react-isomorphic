# play-framework-react-isomorphic
A sample seed project to render React on the server side. It will run a small ReactJS app displaying a list of posts.
This project is based on **Play Framework**, **ReactJS** and **NodeJS**.

### First, build frontend :
- `cd frontend`
- `npm install`
- `gulp`

### Then, build and run backend :
- `cd backend`
- `activator`
- `~ run 9010`

### Finally, run node js server :
- `cd ssr`
- `npm install`
- `node index.js`

### Demo page

Just access to `http://localhost:9010/post` and pass `server`query parameter to launch the demo :
- `http://localhost:9010/post` : no server rendering
- `http://localhost:9010/post?server=nashorn` : server rendering using Nashorn
- `http://localhost:9010/post?server=node` : server rendering using Node
