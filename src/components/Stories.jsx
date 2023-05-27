import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";

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

                  <div>
                    <div>
                      <HeartIcon className="icon-style" />
                      <span>{val.like}</span>
                    </div>
                    <div>
                      <ClockIcon className="icon-style" />
                      <span>{val.time}</span>
                    </div>
                    <div>
                      <HashtagIcon className="icon-style" />
                      <span>{val.by}</span>
                    </div>
                  </div>
                  <div>
                    <h1>{val.title}</h1>
                    <p>{val.text}</p>
                  </div>
                  <div>
                    <a href={val.url}>{val.btn}</a>
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
