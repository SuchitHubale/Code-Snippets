import EditSnippetForm from '@/components/EditSnippetForm'
import { db } from '@/lib/firebase';
import React from 'react'
import { doc, getDoc } from 'firebase/firestore';

const EditPageSnippets = async({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id;
    const snippetDoc = await getDoc(doc(db, "snippets", id));
    const snippet = snippetDoc.exists() ? { id: snippetDoc.id, ...snippetDoc.data() } : null;

    if(!snippet){
        return <h1>Snippet not found</h1>
    }

  return (
    <EditSnippetForm snippet = {snippet}/>
  )
}

export default EditPageSnippets
