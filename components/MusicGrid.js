// components/MusicGrid.js
import MusicCard from './MusicCard';

export default function MusicGrid({ tracks }) {
  return (
    <section id="music" className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Tracks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((t, i) => (
          <MusicCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
