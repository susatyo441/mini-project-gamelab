import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PrestasiSection = () => {
  const achievementsGroups = [
    [
      {
        id: 1,
        title: 'Achievement 1',
        image: './images/piala-1.png',
      },
      {
        id: 2,
        title: 'Achievement 2',
        image: './images/piala-2.png',
      },
      {
        id: 3,
        title: 'Achievement 3',
        image: './images/piala-3.png',
      },
    ],
    [
      {
        id: 4,
        title: 'Achievement 4',
        image: './images/piala-4.png',
      },
    ],
  ];

  const customDot = (dot, { isActive }) => {
    let className = 'custom-dot';
    if (isActive) {
      className += ' bg-red-500';
    }
    return <span className={className}>{dot}</span>;
  };

  return (
    <section className="w-full pt-20 pb-10 mb-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[Licorice] font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-8">
          Our Achievements
        </h1>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          className="w-full mt-4"
          slidesToSlide={3}
          renderIndicator={customDot}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 left-4 z-10"
              >
                Previous
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 right-4 z-10"
              >
                Next
              </button>
            )
          }
        >
          {achievementsGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 lg:space-x-16 space-y-4"
            >
              {group.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex flex-col items-center justify-center w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-contain mb-2"
                  />
                  <h2 className="text-sm text-center">{achievement.title}</h2>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PrestasiSection;
