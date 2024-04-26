'use client';
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const currentProfile = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }
}