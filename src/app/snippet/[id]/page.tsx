import React, { act } from "react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as actions from "@/actions";
import { notFound } from "next/navigation";

const SnippetsDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

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
