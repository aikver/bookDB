const mysql = require("mysql2");
const dotenv = require ("dotenv");

const  app = express();
dotenv.config() ;

const PORT = process.env.NODE_PORT || 3071;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const writeRead = require ('./reutes/writeRead.js');
const writeRead = require ('./reutes/updateDelete.js');

app.use('/wr',writeRead);
app.use('/ud',updateDelete);


app.use((req,res,next) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log('Server running on port: ${PORT}');
});