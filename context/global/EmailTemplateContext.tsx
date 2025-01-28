import React, {createContext, useContext} from "react"

export type emailTemplateType=Array<any>|[];
export type EmailTemplateContent = {
    emailTemplate: emailTemplateType,
    setEmailTemplate: React.Dispatch<React.SetStateAction<emailTemplateType>>
}
export const EmailTemplateContext = createContext<EmailTemplateContent>({
    emailTemplate: [], // set a default value
    setEmailTemplate:(p)=>p,
})
export const useEmailTemplateContext_ = () => useContext(EmailTemplateContext)