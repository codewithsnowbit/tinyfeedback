import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'POST'){
        return await createUser(req, res);
    }else{
        res.status(405).json({
            message: 'Method not allowed',
            success: false
        })
    }
}

async function createUser(req, res){
    const body = req.body;
    try{
        const newUserEntry = await prisma.user.create({
            data: {
                organizationName: body.orgName,
                clerkId: body.clerkId,
            }
        })
    }catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error creating user", success:false });
    }
}