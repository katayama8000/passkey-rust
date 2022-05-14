import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from "swiper"; //使いたい機能をインポート
import { Image } from "@mantine/core";

SwiperCore.use([Pagination, Navigation]);

// カルーセルにする画像のソースをリストにします
const images = [
  "img/gollira.jpeg",
  "img/gollira.jpeg",
  "img/gollira.jpeg",
  "img/gollira.jpeg",
  "img/gollira.jpeg",
];

export const MainImageSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
        }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
        navigation //スライドを前後させるためのボタン、スライドの左右にある
        loop={true}
      >
        {images.map((src: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <Image src={src} alt="image" radius="md" fit="contain" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
