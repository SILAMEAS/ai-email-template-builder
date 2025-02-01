import {mutation, query} from "@/convex/_generated/server";
import {v} from "convex/values";

export interface SaveTemplateReq{
    tid:string,
    design:any,
    email:string
}

export const SaveTemplate=mutation({
    args:{
        tid:v.string(),
        design:v.any(),
        email:v.string()
    },
    handler:async (ctx,args)=>{
     try {
         return await  ctx.db.insert('emailTemplate',{
             tid: args.tid,
             design: args.design,
             email: args.email
         });
     }catch (e){
     console.error("SaveTemplate",e)
     }
    }
});
export const GetTemplateById=query({
    args:{
        email:v.string(),
        tid:v.string(),
    },
    handler:async (ctx,args)=>{
        try {
          const res=  await ctx.db.query('emailTemplate').filter((q)=>q.and(q.eq(q.field('email'),args.email),q.eq(q.field('tid'),args.tid))).collect();
        return res[0];
        }catch (e){
            console.error("GetTemplateById",e)
        }
    }

});
export const GetAllTemplate=query({
    args:{
        email:v.string()
    },
    handler:async (ctx,args)=>{
        try {
            return await ctx.db.query('emailTemplate').filter((q)=>q.eq(q.field('email'),args.email)).collect();
        }catch (e){
            console.error("GetAllTemplate",e)
        }
    }

})