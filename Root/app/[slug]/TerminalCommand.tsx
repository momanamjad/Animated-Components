'use client';
import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

export default function TerminalCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-xl text-sm font-mono group hover:border-indigo-500/50 transition-colors">
      <Terminal className="w-4 h-4 text-neutral-500" />
      <span className="text-neutral-300">{command}</span>
      <button 
        onClick={handleCopy}
        className="ml-4 p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}
