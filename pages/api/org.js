import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'POST'){
        return await fetchOrgDetails(req, res);
    }else{
        res.status(405).send({
            message: 'Method not allowed',
            success: false
        });
    }
}

async function fetchOrgDetails(req, res){
    // get the userId from the params
    const userId = req.body.userId;
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