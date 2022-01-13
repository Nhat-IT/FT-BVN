Promise.all([
    fetch("http://127.0.0.1:5500/bai29/data.json"),
    fetch("http://127.0.0.1:5500/bai29/data1.json"),
    fetch("http://127.0.0.1:5500/bai29/data2.json")
])
    .then(ketqua => {
        console.log("load thanh cong")
    })