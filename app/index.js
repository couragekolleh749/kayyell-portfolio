// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';
import MusicGrid from '../components/MusicGrid';
import VideoSpot from '../components/VideoSpot';
import Footer from '../components/Footer';

const tracks = [
  {
    cover: '/assets/song1.jpg',
    title: 'Song One',
    spotifyEmbed: 'https://open.spotify.com/embed/track/PLACEHOLDER1',
    youtubeLink: 'https://youtu.be/PLACEHOLDER1',
    itunesLink: 'https://music.apple.com/us/album/PLACEHOLDER1',
  },
  {
    cover: '/assets/song2.jpg',
    title: 'Song Two',
    spotifyEmbed: 'https://open.spotify.com/embed/track/PLACEHOLDER2',
    youtubeLink: 'https://youtu.be/PLACEHOLDER2',
    itunesLink: 'https://music.apple.com/us/album/PLACEHOLDER2',
  },
  {
    cover: '/assets/song3.jpg',
    title: 'Song Three',
    spotifyEmbed: 'https://open.spotify.com/embed/track/PLACEHOLDER3',
    youtubeLink: 'https://youtu.be/PLACEHOLDER3',
    itunesLink: 'https://music.apple.com/us/album/PLACEHOLDER3',
  },
  {
    cover: '/assets/song4.jpg',
    title: 'Song Four',
    spotifyEmbed: 'https://open.spotify.com/embed/track/PLACEHOLDER4',
    youtubeLink: 'https://youtu.be/PLACEHOLDER4',
    itunesLink: 'https://music.apple.com/us/album/PLACEHOLDER4',
  },
  {
    cover: '/assets/song5.jpg',
    title: 'Song Five',
    spotifyEmbed: 'https://open.spotify.com/embed/track/PLACEHOLDER5',
    youtubeLink: 'https://youtu.be/PLACEHOLDER5',
    itunesLink: 'https://music.apple.com/us/album/PLACEHOLDER5',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>KayyEll — Producer • Hair Artist • Singer</title>
      </Head>

      <Hero />
      <MusicGrid tracks={tracks} />
      <VideoSpot youtubeEmbed={'https://www.youtube.com/embed/PLACEHOLDER_VIDEO'} />
      <Footer />
    </>
  );
}
<section className="py-12 text-center">
  <h3 className="text-2xl font-bold">Booking / Contact</h3>
  <p className="mt-3">Email: <a href="mailto:booking@kayhell.com" className="underline">booking@kayhell.com</a></p>
</section>
