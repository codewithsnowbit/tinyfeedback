import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'POST'){
        return await createApp(req, res);
    }else{
        res.status(405).json({
            message: 'Method not allowed',
            success: false
        })
    }
}

async function createApp(req, res){
    const body = req.body;
    try{
        const newAppEntry = await prisma.application.create({
            data: {
                appName: body.appName,
                appDescription: body.appDescription,
                organizationId: body.organizationId,
                organizationName: body.organizationName,
                appEndpoint: body.appEndpoint,
            }
        })
        return res.status(200).json(newAppEntry, {success: true});
    }catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error creating app", success:false });
    }
}
