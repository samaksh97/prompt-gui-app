import axios from 'axios';

export const sendPrompt = (prompt, settings) => {
  return axios.post('http://localhost:8000/run_prompt', {
    prompt, settings
  });
};
