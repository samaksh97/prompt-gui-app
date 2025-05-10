import React, { useState } from 'react';
import PromptInput from './PromptInput';
import PromptResult from './PromptResult';
import Dropdowns from './Dropdowns';
import { sendPrompt } from '../api';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [settings, setSettings] = useState({
    model: 'GPT-4',
    promptType: 'Zero-Shot',
    useCase: 'General'
  });

  const handleSubmit = async () => {
    try {
      const response = await sendPrompt(prompt, settings);
      setResult(response.data.result);
    } catch (error) {
      setResult("Error fetching result: " + error.message);
    }
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <Dropdowns settings={settings} setSettings={setSettings} />
        <PromptInput prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} />
      </div>
      <div className="right-panel">
        <PromptResult result={result} />
      </div>
    </div>
  );
}
