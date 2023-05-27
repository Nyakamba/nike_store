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
        <div className="">
          <Splide>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 ">
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt="stories"
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg "
                    />{" "}
                  </div>

                  <div className="">
                    <div className="">
                      <HeartIcon className="icon-style" />
                      <span>{val.like}</span>
                    </div>
                    <div className="">
                      <ClockIcon className="icon-style" />
                      <span>{val.time}</span>
                    </div>
                    <div className="">
                      <HashtagIcon className="icon-style" />
                      <span>{val.by}</span>
                    </div>
                  </div>
                  <div className="">
                    <h1>{val.title}</h1>
                    <p>{val.text}</p>
                  </div>
                  <div className="">
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
