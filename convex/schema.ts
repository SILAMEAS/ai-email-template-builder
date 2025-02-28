import {defineSchema, defineTable} from 'convex/server'
import {v} from "convex/values";

export default defineSchema({
    users:defineTable({
        name:v.string(),
        email:v.string(),
        picture:v.string(),
        credit:v.number()
    }),
    emailTemplate:defineTable({
      tid:v.string(),
        design:v.any(),// Save JSON DATA
        email:v.string()
    })
})
