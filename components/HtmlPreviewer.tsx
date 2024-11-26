"use client";

import { useState, ChangeEvent } from 'react'
import { PredefinedHtml } from './PredefinedHtml'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

function HtmlPreviewer() {

  const [htmlCode, setHtmlCode] = useState<string>("")
  const [previewHtml, setPreviewHtml] = useState<string>("")

  const handlePreview = (): void => {
    setPreviewHtml(htmlCode);
  };

  const handlePasteHtml = (): void => {
    setHtmlCode(PredefinedHtml);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-2xl p-6 rounded-lg shadow-xl bg-card">
        <h1 className="text-2xl font-bold mb-2 text-center">HTML Previewer</h1>
        <p className="text-muted-foreground mb-4 text-center">
          Enter your HTML code and see the preview.
        </p>
        <div className="grid gap-4">
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4 rounded-lg border border-input bg-white text-black"
            rows={8}
          />
          <div className="flex justify-center">
            <div className="flex gap-2">
              <Button onClick={handlePreview}>Generate Preview</Button>
              <Button onClick={handlePasteHtml}>Paste HTML</Button>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-gray-500 bg-background text-foreground">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HtmlPreviewer