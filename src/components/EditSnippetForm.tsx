"use client";
import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { Button } from './ui/button';
import SaveSnippet from '@/actions'

type Snippet = {
  id: string;
  title: string;
  code: string;
};

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {

    const [code, setCode] = useState(snippet.code);

    const saveSnippet = SaveSnippet.bind(null, snippet.id, code);

    const changeEventHandler = (value: string = "") => {
        setCode(value);
    }

    return (
        <div>
            <div className="border-2 border-gray-400 p-5 rounded-lg">
                <form action={saveSnippet}>
                    <div className="flex items-center justify-between">
                        <h1 className='text-xl font-bold'>Your code Editor :</h1>
                        <Button type="submit">Save</Button>
                    </div>
                    <div className="mt-8 border-2 border-gray-400 p-5 rounded-lg">
                        <h1 className='p-2 text-xl font-bold'>Code</h1>
                        <div className="rounded-lg overflow-hidden border-2 border-gray-900">
                            <Editor
                                height="60vh"
                                theme="vs-dark"
                                defaultLanguage="javascript"
                                value={code}
                                onChange={changeEventHandler}
                            />
                        </div>

                    </div>
                    <div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditSnippetForm
