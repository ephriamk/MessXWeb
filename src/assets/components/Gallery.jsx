import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://picsum.photos/200/300", width: 800, height: 600 },
  { src: "https://picsum.photos/200/300", width: 1000, height: 600 },
  { src: "https://picsum.photos/200/300", width: 800, height: 1000 },
  { src: "https://picsum.photos/200/300", width: 800, height: 600 },
  { src: "https://picsum.photos/200/300", width: 400, height: 600 },
  { src: "https://picsum.photos/200/300", width: 800, height: 400 },
  { src: "https://picsum.photos/200/300", width: 800, height: 600 },
  { src: "https://picsum.photos/200/300", width: 1000, height: 600 },
  { src: "https://picsum.photos/200/300", width: 800, height: 1000 },
  { src: "https://picsum.photos/200/300", width: 800, height: 600 },
  { src: "https://picsum.photos/200/300", width: 400, height: 600 },
  { src: "https://picsum.photos/200/300", width: 800, height: 400 },

];

export default function Gallery() {
  return <PhotoAlbum layout="masonry" photos={photos} />;
}