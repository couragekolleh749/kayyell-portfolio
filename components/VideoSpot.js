// components/VideoSpot.js
export default function VideoSpot({ youtubeEmbed }) {
  return (
    <section id="video" className="py-16 max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Video</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-96"
          src={youtubeEmbed}
          title="Featured video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
