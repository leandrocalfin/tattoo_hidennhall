"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

export default function InstagramGrid() {
  const [media, setMedia] = useState<InstagramMedia[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setMedia(data.data ?? []))
      .catch(() => setFailed(true));
  }, []);

  const items = failed || !media ? null : media.slice(0, 6);

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
      {items
        ? items.map((m) => (
            <a
              key={m.id}
              href={m.permalink}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden border border-neutral-800 bg-neutral-900"
            >
              <Image
                src={m.media_type === "VIDEO" ? m.thumbnail_url ?? m.media_url : m.media_url}
                alt={m.caption ?? "Publicación de Instagram"}
                fill
                unoptimized
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
            </a>
          ))
        : [1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="relative aspect-square overflow-hidden border border-neutral-800 bg-neutral-900">
              <Image src={`/${n}.png`} alt={`Trabajo ${n}`} fill className="object-cover hover:scale-105 transition duration-500" sizes="(min-width: 768px) 33vw, 50vw" />
            </div>
          ))}
    </div>
  );
}
