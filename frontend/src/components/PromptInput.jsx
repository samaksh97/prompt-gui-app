import React from 'react';

export default function PromptInput({ prompt, setPrompt, handleSubmit }) {
  return (
    <div className="prompt-input">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
      />
      <button onClick={handleSubmit}>Submit Prompt</button>
    </div>
  );
}
