import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HeartIcon } from "@heroicons/react/24/solid";

const Stories = ({ story: { title, news } }) => {
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div>
          <Splide>
            {news.map((val, i) => (
              <SplideSlide>
                <div>
                  <div>
                    <img src={val.img} alt="stories" />{" "}
                  </div>
                </div>
                <div>
                  <div>
                    <HeartIcon className="icon-style" />
                    <span>{val.like}</span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
