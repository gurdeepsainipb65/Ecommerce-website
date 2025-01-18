import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const TestimonialSection = () => {
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });
    }

    // Cleanup the slider on component unmount
    return () => {
      if (keenSliderRef.current) {
        keenSliderRef.current.destroy();
      }
    };
  }, []);

  const handlePrevClick = () => {
    if (keenSliderRef.current) {
      keenSliderRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (keenSliderRef.current) {
      keenSliderRef.current.next();
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>
            <p className="mt-4 text-gray-700">
              Here's what our customers have to say about our delicious pizzas!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                onClick={handlePrevClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                onClick={handleNextClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {/* Testimonial 1 */}
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-400">
                      {/* Add your stars SVG here */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                        The Best Pizza in Town!
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        "I love PizzaRev! The crust is always crispy, and the
                        toppings are so fresh. It's the best pizza I've had in
                        years. Highly recommend it!"
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    — Sarah T.
                  </footer>
                </blockquote>
              </div>

              {/* Testimonial 2 */}
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-400">
                      {/* Add your stars SVG here */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                        Delicious & Fresh!
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        "Every time I order from PizzaRev, the pizza is hot,
                        fresh, and delicious. The ingredients are top-notch, and
                        I can customize it just the way I want!"
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    — John P.
                  </footer>
                </blockquote>
              </div>

              {/* Add more testimonials here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
