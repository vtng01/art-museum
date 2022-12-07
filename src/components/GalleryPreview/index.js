import ArtImageTile from "../ArtImageTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./GalleryPreview.css";

export default function GalleryPreview({ galleries }) {
  const [galleryIndex, setGalleryIndex] = useState();
  const [galleryId, setGalleryId] = useState();
  const [gallery, setGallery] = useState();

  useEffect(() => {
    setGalleryIndex(randomInt(galleries.length));
  }, []);

  useEffect(() => {
    setGalleryId(galleries[galleryIndex]?.galleryid);
  }, [galleryIndex]);

  useEffect(() => {
    if (galleryId) {
      setGallery(galleries.find((gal, i) => gal.galleryid == galleryId));
    }
  }, [galleryId]);

  return (
    <section className="gallery-preview">
      {/*
      {gallery?.objects.map((art, i) => {
        return (
          <ArtImageTile art={art} key={art.id} galleryId={gallery?.galleryid} />
        );
      })} */}
      <h2>Gallery Preview: {gallery?.name}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {gallery?.objects.map((art, i) => {
          return (
            <SwiperSlide>
              <ArtImageTile
                art={art}
                key={art.id}
                galleryId={gallery?.galleryid}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
