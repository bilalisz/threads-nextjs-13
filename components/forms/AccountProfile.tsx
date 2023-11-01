"use client";
import { USER_DATA } from "@/types/inex";
import React from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userVaildationSchema } from "@/lib/validations/user";

interface propsType {
  user: USER_DATA;
  btnTitle: string;
}

const AccountProfile: React.FC<propsType> = ({ user, btnTitle }) => {
  const form = useForm({
    resolver: zodResolver(userVaildationSchema),
    defaultValues: {
      profile_image: "",
      name: "",
      username: "",
      bio: "",
    },
  });
  return <Form></Form>;
};

export default AccountProfile;
