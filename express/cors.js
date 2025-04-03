const cors = require("cors");
const app = express();

app.use(cors());

const options = {
    origin: "https://naver.com",
    Credential: true,
    optionSuceessStatus:200,
};

app.use(cors(options));

app.get("/users/:id", cors(), function(req, res, next){
    res.json({msg: "example"});
});