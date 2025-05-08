"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


const SaveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code,
        }
    })

    redirect(`/snippet/${id}`);
}

export default SaveSnippet

export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id
        }
    })

    redirect('/');
}

export async function createSnippet(prevState: { message: string }, formData: FormData) {
    try {
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        if (typeof title !== "string" || title.length < 4) {
            return {
                message: "Title is required and should be at least 4 characters"
            }
        }

        if (typeof code !== "string" || code.length < 8) {
            return {
                message: "Code is required and should be at least 8 characters"
            }
        }

        await prisma.snippet.create({
            data: { title, code }
        });

    } catch (error: any) {
        return {
            message: error.message || "Failed to create snippet"
        }
    }
    redirect('/');
}
