"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface EditorProps {
  value: string;
  onChange?: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML()); // This triggers the parent callback
    },
  });

  if (!editor) return null;

  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg border border-gray-200 resize-y overflow-auto min-h-[250px]">
      {/* Toolbar */}
      <div className="flex gap-2 px-4 py-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors duration-150 ${
            editor.isActive("bold")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-50"
          }`}
          aria-label="Bold"
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm font-semibold italic transition-colors duration-150 ${
            editor.isActive("italic")
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-50"
          }`}
          aria-label="Italic"
        >
          I
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors duration-150 ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-50"
          }`}
          aria-label="Heading 1"
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors duration-150 ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-50"
          }`}
          aria-label="Heading 2"
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors duration-150 ${
            editor.isActive("heading", { level: 3 })
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-blue-50"
          }`}
          aria-label="Heading 3"
        >
          H3
        </button>
      </div>

      {/* Editable area */}
      <EditorContent
        editor={editor}
        className="w-full min-h-[200px] p-4 outline-none focus:outline-none"
      />
    </div>
  );
}
