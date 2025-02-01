import {NextResponse} from "next/server";
import {GenerateEmailTemplateAIModel} from "@/config/AiModel";

export async function POST(req:any){
    const {prompt}=await req.json();
    try {
        const result=await GenerateEmailTemplateAIModel.sendMessage(prompt);
        const aiRes=result.response.text();
        // Save this to DB
        return  NextResponse.json(aiRes);

    }catch (e){
        return NextResponse.json({error:e})
    }

}