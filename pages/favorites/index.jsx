import ArtPiecesList from "@/components/ArtPiecesList/ArtPiecesList";

const dummyArray = [
  {
    slug: "madame-roulin-and-her-baby",
    artist: "Vincent van Gogh",
    name: "Madame Roulin and Her Baby",
    imageSource:
      "https://example-apis.vercel.app/assets/art/madame-roulin-and-her-baby.jpg",
    year: "1888",
    genre: "Portrait Painting",
    colors: ["#424C17", "#8F7422", "#B09731", "#D5A906", "#C8CBAC"],
    dimensions: { height: 2392, width: 1920, type: "jpg" },
  },

  {
    slug: "circus-sideshow",
    artist: "Georges Seurat",
    name: "Circus Sideshow (Parade de cirque)",
    imageSource:
      "https://example-apis.vercel.app/assets/art/circus-sideshow.jpg",
    year: "1887–88",
    genre: "Pointillist Painting",
    colors: ["#2D2A33", "#4B383A", "#484041", "#5E5151", "#906D5A"],
    dimensions: { height: 1283, width: 1920, type: "jpg" },
  },

  {
    slug: "the-great-wave-off-kanagawa",
    artist: "Katsushika Hokusai",
    name: "Under the Wave off Kanagawa (The Great Wave)",
    imageSource:
      "https://example-apis.vercel.app/assets/art/the-great-wave-off-kanagawa.jpg",
    year: "ca. 1830–32",
    genre: "Ukiyo-e Print",
    colors: ["#405266", "#617986", "#ADADA0", "#E2D0B1", "#F0E0C6"],
    dimensions: { height: 1313, width: 1920, type: "jpg" },
  },
];

export default function Favorites({ favoriteArts, onToggle }) {
  return (
    <main>
      <h1>Favorites</h1>
      {favoriteArts.length === 0 && <p>No favorites...</p>}
      <ArtPiecesList
        fetchedPieces={favoriteArts}
        favoriteArts={favoriteArts}
        onToggle={onToggle}
      />
    </main>
  );
}
