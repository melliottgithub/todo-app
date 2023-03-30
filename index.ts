// src/index.ts
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

// import todoRoutes from './application/routes/todoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

// app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
