"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center">
        {/* Background YouTube Video */}
        <iframe
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="https://www.youtube.com/embed/10hpgt2HDAQ?autoplay=1&mute=1&loop=1&playlist=10hpgt2HDAQ"
          title="KayyEll Hero Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center px-4">
          {/* Hero Circular Photo */}
          <div className="mb-6">
            <Image
              src="/hero.jpg"
              alt="KayyEll"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">KayyEll</h1>
          <p className="text-lg md:text-2xl">Artist • Producer • Hair Stylist</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-4">About KayyEll</h2>
        <p className="max-w-2xl mx-auto leading-relaxed">
          KayyEll is a rising Liberian artist, producer, and creative visionary.
          Known for blending Afrobeat rhythms with unique sounds, she brings a
          fresh voice to the global stage. Beyond music, she is also a talented
          hair stylist and creative entrepreneur, using her artistry to inspire
          and empower others.
        </p>
      </section>

      {/* MUSIC SECTION */}
      <section className="py-16 px-6 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Tracks</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/0GOVfe39HQ9bXx27VG6gDi?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/52Ms6sGwYsrDxpUVmFjzqR?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/076hpHyF1KM5Z7dus4YcRB?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/0AfOOgo8H6WpHX38YEjHKm?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-16 px-6 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-8">Videos</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/10hpgt2HDAQ"
            title="Video 1"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gUATU2ea04E"
            title="Video 2"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/aYKz-wUjD6c"
            title="Video 3"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 px-6 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div
              key={num}
              className="relative w-full h-48 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/gallery${num}.jpg`}
                alt={`Gallery ${num}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          Email:{" "}
          <a href="mailto:kayyellmusic@gmail.com" className="text-blue-600">
            kayyellmusic@gmail.com
          </a>
        </p>
        <p className="mb-8">Follow KayyEll on Instagram for updates.</p>
        <a
          href="https://www.instagram.com/kortoooo?igsh=eW81eDIwOHN5NGZs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          Instagram
        </a>
      </section>
    </main>
  );
}









