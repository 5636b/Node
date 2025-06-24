const express = require("express");
const server = express();

server.get("/hello", (req, res) => {

    return res.json({

        title: "Hello World 🇮🇷",
        msg: "Olá, Tudo bem?"

    });

});

server.listen(3000);
