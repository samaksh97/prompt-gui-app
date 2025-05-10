import React from 'react';

export default function Dropdowns({ settings, setSettings }) {
  return (
    <div className="dropdowns">
      <select value={settings.model} onChange={e => setSettings({ ...settings, model: e.target.value })}>
        <option>GPT-4</option>
        <option>Llama-3</option>
        <option>Claude-3</option>
      </select>

      <select value={settings.promptType} onChange={e => setSettings({ ...settings, promptType: e.target.value })}>
        <option>Zero-Shot</option>
        <option>Few-Shot</option>
        <option>Chain-of-Thought</option>
      </select>

      <select value={settings.useCase} onChange={e => setSettings({ ...settings, useCase: e.target.value })}>
        <option>General</option>
        <option>Summarization</option>
        <option>Classification</option>
        <option>QA</option>
      </select>
    </div>
  );
}
