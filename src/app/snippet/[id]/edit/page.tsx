import EditSnippetForm from '@/components/EditSnippetForm'
import { db } from '@/lib/firebase';
import React from 'react'
import { doc, getDoc } from 'firebase/firestore';

type Snippet = {
  id: string;
  title: string;
  code: string;
};

const EditPageSnippets = async({params}:{params:Promise<{id:string}>}) => {
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

    if(!snippet){
        return <h1>Snippet not found</h1>
    }

    return (
      <EditSnippetForm snippet={snippet}/>
    )
}

export default EditPageSnippets
