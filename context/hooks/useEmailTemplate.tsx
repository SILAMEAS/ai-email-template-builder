"use client";
import { useContext } from "react";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";

const useEmailTemplateContext = () => {
  return useContext(EmailTemplateContext);
};
export const useEmailTemplate = () => {
  const { emailTemplate, setEmailTemplate } = useEmailTemplateContext();
  return { emailTemplate, setEmailTemplate };
};
