## React Counter with Redux and MongoDB 

This version saves the counter as a document in a MongoDB database. 

### Setup:
- Go to cloud.mongodb.com and setup an account and a cluster, along with a database user and password. Under Security->Network Access, in IP Access List put `127.0.0.1` to access this from anywhere. 

- Once you've done that, go to the cluster, click "Connect"->"Connect your application"->"Add your connection string into your application code", copy that string.

- In the root of this project, create a `.env` file and paste in the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = putinyourconnectionstringhere
```

- Do `npm install`, then `npm run dev` in the root and you're good to go!
