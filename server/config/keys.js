module.exports = {
  app: {
    name: "Mern Social Media",
    apiEndpoint: process.env.API_URL ? `/${process.env.API_URL}` : "/api",
  },
  database: {
    url: `mongodb+srv://mxsilentwar:103117Dp!@teaching.sll1f.mongodb.net/testingTodos?retryWrites=true&w=majority`,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "jwt-secret",
    tokenLife: "7d",
  },
};
