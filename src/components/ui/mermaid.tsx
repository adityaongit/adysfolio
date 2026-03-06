'use client';

import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

export function Mermaid({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      mermaid.render(id, code).then((result) => {
        if (ref.current) {
          ref.current.innerHTML = result.svg;
        }
      }).catch((error) => {
        console.error('Mermaid render error:', error);
        if (ref.current) {
          ref.current.innerHTML = `<pre class="text-red-400">Error rendering diagram</pre>`;
        }
      });
    }
  }, [code]);

  return (
    <div 
      ref={ref} 
      className="my-6 flex justify-center items-center overflow-x-auto"
      aria-label="Diagram"
    />
  );
}
