"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import * as actions from "@/actions";

const NewSnippet = () => {
  const [formStateData, formAction] = useActionState(actions.createSnippet, {message:""});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Colorful Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center">
          <h1 className="text-4xl font-black text-white tracking-tight drop-shadow-lg">
            Create New Snippet
          </h1>
          <p className="mt-3 text-white/80 text-lg font-medium">
            Capture Your Code Magic ✨
          </p>
        </div>

        {/* Form Container */}
        <form 
          action={formAction} 
          className="p-8 space-y-6"
        >
          {/* Title Input */}
          <div>
            <Label 
              htmlFor="titleInput" 
              className="block text-xl font-semibold text-gray-700 mb-3"
            >
              Snippet Title
            </Label>
            <Input
              id="titleInput"
              name="title"
              type="text"
              placeholder="Enter a descriptive title..."
              className="w-full border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 rounded-xl"
              required
            />
          </div>

          {/* Code Textarea */}
          <div>
            <Label 
              htmlFor="codeTextarea" 
              className="block text-xl font-semibold text-gray-700 mb-3"
            >
              Your Code
            </Label>
            <Textarea
              id="codeTextarea"
              name="code"
              placeholder="Paste your code here..."
              className="w-full h-[220px] border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 rounded-xl font-mono"
              required
            />
          </div>

          {/* Error Message */}
          {formStateData.message && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-xl flex items-center space-x-3">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{formStateData.message}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            Create Snippet
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewSnippet;