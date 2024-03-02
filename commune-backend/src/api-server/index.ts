import express, { urlencoded } from "express";
import cors from "cors";
import apiRoutes from "../routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get('/dog', (req, res) => {
    res.send('wuf wuf !!')
})