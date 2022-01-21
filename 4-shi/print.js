printPoem(7);
function printPoem(id) {
    const axios = require("axios");

    const data = {
        id: id
    };

    axios.post('https://www.anxyser.top/server10005/poem/read', data)
        .then((res) => {
            console.log(res.data.data.content);
        }).catch((err) => {
            console.error(err);
        });
}