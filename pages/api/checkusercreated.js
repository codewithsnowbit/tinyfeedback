import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'GET'){
        return await checkUserCreated(req, res);
    }else{
        res.status(405).json({
            message: 'Method not allowed',
            success: false
        })
    }
}

async function checkUserCreated(req, res){
    // get the userId from the params
    const userId = req.query.userId;
    try{
        const checkUserEntry = await prisma.user.findMany({
            where: {
                clerkId: userId,
            }
        })
        if(checkUserEntry.length > 0){
            return res.status(200).json({
                message: 'User exists',
                success: true
            })
        }else{
            return res.status(200).json({
                message: 'User does not exist',
                success: false
            })
        }   
    }catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error creating user", success:false });
    }
}