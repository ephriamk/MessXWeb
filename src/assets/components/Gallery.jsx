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

// srcset="link 1600w" put this on image, second term is actual width of image
//you can stack them ex: srcset="link 1600w, link 800w, link 400w"
//src should hold default and largest image size

