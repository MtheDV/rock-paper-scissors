const express = require("express");
const app = express();
const port = 3001;

const merchant_model = require("./routes/merchant_model");

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
});

app.get("/", ((req, res) => {
    merchant_model.getMerchants()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
}));

app.post("/merchants", ((req, res) => {
    merchant_model.createMerchant(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
}));

app.delete("/merchants/:id", ((req, res) => {
    merchant_model.deleteMerchant(parseInt(req.params.id))
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
}));

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

/*const [merchants, setMerchants] = useState(false);
    useEffect(() => {
        getMerchant();
    }, []);

    function getMerchant() {
        fetch("http://localhost:3001")
            .then(response => {
                return response.text();
            })
            .then(data => {
                setMerchants(data);
            });
    }

    function createMerchant() {
        let name = prompt("Enter merchant name");
        let email = prompt("Enter merchant email");
        fetch("http://localhost:3001/merchants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    function deleteMerchant() {
        let id = prompt("Enter merchant id");
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: "DELETE",
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            })
    }*/