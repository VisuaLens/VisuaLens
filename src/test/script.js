// fetch("http://localhost:8000/api/Wvisit", {
//    method: "POST"
// })

async function getuinfo() {
    const Juserdata = await fetch("http://localhost:8000/api/local/getuid")
    const userdata = JSON.parse(Juserdata)
    return userdata
}

const userdata = getuinfo()



console.log(userdata)