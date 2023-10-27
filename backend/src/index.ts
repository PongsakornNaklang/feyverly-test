import express, { Request, Response } from 'express';
import bannerRouter from './router/banner';
import shopRouter from './router/shop';
import userRouter from './router/user';
import { Sequelize } from 'sequelize';
import User from './model/user';
import Shop from './model/shop';
import Banner from './model/banner';
import cors from 'cors';

const sequelize = new Sequelize('feyverly', 'root', 'admin1234', {
    host: 'localhost',
    dialect: 'mysql'
});

User.initialize(sequelize);
Shop.initialize(sequelize);
Banner.initialize(sequelize);

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const PORT: number = 8000;

app.use(userRouter);
app.use(bannerRouter);
app.use(shopRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('Feyverly Test')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});