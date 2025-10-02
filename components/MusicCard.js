// components/MusicCard.js
import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";

export default function MusicCard({ cover, title, spotifyEmbed, youtubeLink, itunesLink }) {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
      <img src={cover} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="mt-3">
          {spotifyEmbed ? (
            <iframe
              src={spotifyEmbed}
              width="100%"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          ) : (
            <div className="h-20 bg-black/30 flex items-center justify-center">Spotify embed</div>
          )}
        </div>
        <div className="mt-4 flex gap-3">
          {itunesLink && (
            <a href={itunesLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 border rounded">
              <FaApple /> iTunes
            </a>
          )}
          {youtubeLink && (
            <a href={youtubeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 border rounded">
              <FaYoutube /> YouTube
            </a>
          )}
          <a href={spotifyEmbed || '#'} target="_blank" rel="noreferrer" className="ml-auto flex items-center gap-2 px-3 py-2 bg-green-600 rounded text-black">
            <FaSpotify /> Play
          </a>
        </div>
      </div>
    </div>
  );
}
