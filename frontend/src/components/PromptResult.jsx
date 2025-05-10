import React from 'react';

export default function PromptResult({ result }) {
  return (
    <div className="prompt-result">
      <h3>Result:</h3>
      <pre>{result}</pre>
    </div>
  );
}
v
