"use server";
import { db } from "@/lib/firebase";
import { redirect } from "next/navigation";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

const SaveSnippet = async (id: string, code: string) => {
  const snippetRef = doc(db, "snippets", id);
  await updateDoc(snippetRef, { code });
  redirect(`/snippet/${id}`);
};

export default SaveSnippet;

export const deleteSnippet = async (id: string) => {
  const snippetRef = doc(db, "snippets", id);
  await deleteDoc(snippetRef);
  redirect('/');
};

export async function createSnippet(prevState: { message: string }, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if (typeof title !== "string" || title.length < 4) {
      return {
        message: "Title is required and should be at least 4 characters"
      };
    }

    if (typeof code !== "string" || code.length < 8) {
      return {
        message: "Code is required and should be at least 8 characters"
      };
    }

    await addDoc(collection(db, "snippets"), { title, code });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message || "Failed to create snippet"
      };
    }
    return {
      message: "An unknown error occurred"
    };
  }
  redirect('/');
}