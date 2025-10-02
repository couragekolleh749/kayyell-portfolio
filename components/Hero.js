// components/Hero.js
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/kayyell-video.mp4" type="video/mp4" />
        {/* fallback */}
      </video>

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">KayyEll</h1>
        <p className="text-lg md:text-xl">Producer • Hair Artist • Singer</p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#music"
            className="px-6 py-3 border border-white rounded-md hover:bg-white/10"
          >
            Listen
          </a>
          <a
            href="#video"
            className="px-6 py-3 bg-yellow-400 text-black rounded-md"
          >
            Watch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/80">
        Latest release • 2025
      </div>
    </section>
  );
}
