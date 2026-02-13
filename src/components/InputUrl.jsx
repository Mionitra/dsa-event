import React, { useState } from 'react';
import { Copy, ExternalLink, Check } from 'lucide-react';

const InputUrl = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (url) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpen = () => {
    if (url) {
      const urlToOpen =
        url.startsWith('http://') || url.startsWith('https://')
          ? url
          : `https://${url}`;

      window.open(urlToOpen, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white/50 rounded-lg shadow-lg mb-5">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-950 mb-2">
          {title}
        </label>

        {/* Display URL (not editable) */}
        <div className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg break-all">
          {url}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleCopy}
          disabled={!url}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition"
        >
          {copied ? (
            <>
              <Check size={18} />
              Copié !
            </>
          ) : (
            <>
              <Copy size={18} />
              Copier
            </>
          )}
        </button>

        <button
          onClick={handleOpen}
          disabled={!url}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-300 transition"
        >
          <ExternalLink size={18} />
          Ouvrir
        </button>
      </div>
    </div>
  );
};

export default InputUrl;
