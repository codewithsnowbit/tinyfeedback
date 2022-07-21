import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'GET'){
        return await getAppInfo(req, res);
    }else{
        res.status(405).json({
            message: 'Method not allowed',
            success: false
        })
    }
}

async function getAppInfo(req, res){
    // get the userId from the params
    const orgId = req.query.orgId;
    try{
        const checkAppEntry = await prisma.application.findMany({
            where: {
                organizationId: orgId,
            }
        })
        if(checkAppEntry.length > 0){
            return res.status(200).json({
                checkAppEntry,
                success: true
            })
        }else{
            return res.status(405).json({
                message: 'App does not exist',
                success: false
            })
        }
    }catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error getting details", success:false });
    }
}