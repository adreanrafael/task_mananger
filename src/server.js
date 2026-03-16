const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor principal rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});