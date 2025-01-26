import {mutation} from "@/convex/_generated/server";
import {v} from "convex/values";

export  const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string(),
        credit:v.number(),
    },
    handler:async (ctx,args)=>{
        /** =========================================== */
        /**             If user already exit            */
        /** =========================================== */
        const user=await ctx.db.query("users")
            .filter((q) => q.eq(q.field("email"), args.email)).first();
        /** =========================================== */
        /**             Insert new user            */
        /** =========================================== */
        if(!user){
            return await ctx.db.insert('users', {
                name: args.name,
                email: args.email,
                picture: args.picture,
                credit: 3
            });

        }
        return user;

    }
})