paquShi();
function paquShi() {
    const axios = require("axios");

    const data = {
        from: 0,
        to: 100
    };

    axios.post('https://www.anxyser.top/server10005/poem/list/name', data)
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.error(err);
        });
}
