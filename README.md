# Coscape Hackathon

## Getting Started

First, Install the dependencies

```bash
npm install
```

Secondly, create a `.local.env` file in the root of the project, you can copy the `.env.example` file and rename it to `.local.env` and fill in the required environment variables.

For MongoDB, you can use a free cluster from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), or a local MongoDB database, or use docker 

To use `docker` to run a local MongoDB database, run the following command:

```bash
npm run docker:dev
```


Lastly, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

