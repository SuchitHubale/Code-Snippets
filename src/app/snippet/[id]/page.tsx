import React from "react";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as actions from "@/actions";
import { notFound } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

type Snippet = {
  id: string;
  title: string;
  code: string;
};

const SnippetsDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const snippetDoc = await getDoc(doc(db, "snippets", id));
  const data = snippetDoc.data() as Partial<Omit<Snippet, "id">> | undefined;
  const snippet: Snippet | null = snippetDoc.exists()
    ? {
        id: snippetDoc.id,
        title: data?.title ?? "(Untitled)",
        code: data?.code ?? "",
      }
    : null;

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="p-10">
      <div className="border-2 border-gray-400 p-5 rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button>Back</Button>
          </Link>
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>

      <pre className="bg-gray-200 p-5 rounded-lg mt-4">
        <code>{snippet.code}</code>
      </pre>
    </div>
    </div>
  );
};

export default SnippetsDetail;
