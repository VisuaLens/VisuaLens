import app from "../index"
const fornite: string = 'fornite'


export async function getEvents(req: app.Request)  {

    async function buttonEventAPI() {
        const requestBody = await req.body;
<<<<<<< HEAD


=======
        
>>>>>>> 8c76e53ef400937cea6d475f6d3608ec6e93b037
        return requestBody
    }

    return await buttonEventAPI()
}

