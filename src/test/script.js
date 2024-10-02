// fetch("http://localhost:8000/api/Wvisit", {
//    method: "POST"
// })

async function sendUID(params) {
    const luid = {
        uid: localStorage.getItem('uid')
    }
    const jluid = JSON.stringify(luid)

    const suid = await fetch('http://localhost:8000/api/local/sudi', {
        method: "POST",
        body: jluid
    })  
}

async function checkUID(params) {
    if(!localStorage.getItem('uid')) { 

        const nudi = await fetch("http://localhost:8000/api/local/nudi")
        const jnudi = JSON.parse(nudi)
        localStorage.setItem('uid', jnudi.uid)
    } else {
        sendUID()
    }
    
}
document.addEventListener('DOMContentLoaded', function() {
    checkUID()
});