import app from "../index"

export async function getEvents(req: app.Request)  {

    async function buttonEventAPI() {
        const requestBody = await req.body;
        
        return requestBody
    }

    return await buttonEventAPI()
}

