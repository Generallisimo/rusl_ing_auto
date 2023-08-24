import React, { useEffect} from "react";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Brands() {
    useEffect(() => {
        new Splide(".splide", {
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 3,
          arrows: false,
          autoWidth: true,
          pagination: false,
          gap: 40,
          autoplay: true, // Включить автопрокрутку
          interval: 3000, // Интервал автопрокрутки в миллисекундах
        }).mount();
        
      }, []);
    return(
        <>
        <section
        className="parthers"
        id="parthers"
        style={{ backgroundColor: "#ECECEC" }}
      >
        <div className="container">
          <h2 className="parthers__title title">
            <span>Наши</span> партнеры
          </h2>
        </div>
        <div className="splide" aria-label="Splide Basic HTML Example">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <img
                  src="images/parther-1.png"
                  alt="icon"
                  className="splide__slide__logo parther-1"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/manheim.webp"
                  alt="icon"
                  className="splide__slide__logo parther-2"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/copart.webp"
                  alt="icon"
                  className="splide__slide__logo parther-6"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/iaa.webp"
                  alt="icon"
                  className="splide__slide__logo parther-3"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/parther-5.png"
                  alt="icon"
                  className="splide__slide__logo parther-4"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/parther-6.png"
                  alt="icon"
                  className="splide__slide__logo parther-5"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/parther-7.png"
                  alt="icon"
                  className="splide__slide__logo parther-7"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/parther-8.png"
                  alt="icon"
                  className="splide__slide__logo parther-8"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/parther-9.png"
                  alt="icon"
                  className="splide__slide__logo parther-9"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/parther-10.png"
                  alt="icon"
                  className="splide__slide__logo parther-10"
                />
              </li>
              <li className="splide__slide">
                <img
                  src="images/parther-11.png"
                  alt="icon"
                  className="splide__slide__logo parther-11"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
        </>
    )
}