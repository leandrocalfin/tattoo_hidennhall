"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  embedCode: string;
}

export default function InstagramEmbed({ embedCode }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = embedCode;

    const loadScript = () => {
      if (processedRef.current) return;
      processedRef.current = true;

      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadScript();

    return () => {
      processedRef.current = false;
    };
  }, [embedCode]);

  return (
    <div
      ref={containerRef}
      className="instagram-embed-wrapper [&_.instagram-media]:!border-0 [&_.instagram-media]:!shadow-none [&_.instagram-media]:!rounded-md [&_.instagram-media]:!overflow-hidden [&_.instagram-media]:!bg-transparent [&_.instagram-media]:!p-0 [&_.instagram-media]:!m-0 [&_.instagram-media]:!w-full [&_.instagram-media]:!max-w-none [&_.instagram-media]:!min-w-0 [&_.instagram-media]:!h-auto [&_.instagram-media]:!flex [&_.instagram-media]:!flex-col [&_.instagram-media]:!items-center [&_.instagram-media]:!justify-center [&_.instagram-media]:!text-center [&_.instagram-media]:!font-sans [&_.instagram-media]:!text-sm [&_.instagram-media]:!leading-5 [&_.instagram-media]:!text-gray-500 [&_.instagram-media]:!bg-white [&_.instagram-media]:!border [&_.instagram-media]:!border-gray-200 [&_.instagram-media]:!rounded-lg [&_.instagram-media]:!shadow-sm [&_.instagram-media]:!p-4 [&_.instagram-media]:!mb-4 [&_.instagram-media]:!w-full [&_.instagram-media]:!max-w-[540px] [&_.instagram-media]:!min-w-[326px] [&_.instagram-media]:!h-auto [&_.instagram-media]:!flex [&_.instagram-media]:!flex-col [&_.instagram-media]:!items-center [&_.instagram-media]:!justify-center [&_.instagram-media]:!text-center [&_.instagram-media]:!font-sans [&_.instagram-media]:!text-sm [&_.instagram-media]:!leading-5 [&_.instagram-media]:!text-gray-500 [&_.instagram-media]:!bg-white [&_.instagram-media]:!border [&_.instagram-media]:!border-gray-200 [&_.instagram-media]:!rounded-lg [&_.instagram-media]:!shadow-sm [&_.instagram-media]:!p-4 [&_.instagram-media]:!mb-4 [&_.instagram-media]:!hidden"
    />
  );
}
