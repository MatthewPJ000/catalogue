import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, FreeMode } from 'swiper/modules';

const commentsData = [
  {
    title: "FANTASTIC RESOURCE",
    content: "One of our top priorities is maintaining our business with precision, and we are constantly looking for affiliates that can help us achieve our goal. With the aid of GID Industrial, our obsolete product management has never been more efficient. They have been a great resource to our company, and have quickly become a go-to supplier on our list!",
    author: "Bucher Emhart Glass"
  },
  {
    title: "EXCELLENT SERVICE",
    content: "With our strict fundamentals and high expectations, we were surprised when we came across GID Industrial and their competitive pricing. When we approached them with our issue, they were incredibly confident in being able to provide us with a seamless solution at the best price for us. GID Industrial quickly understood our needs and provided us with excellent service, as well as fully tested product to ensure what we received would be the right fit for our company.",
    author: "Fuji"
  },
  {
    title: "HARD TO FIND A BETTER PROVIDER",
    content: "Our company provides services to aid in the manufacture of technological products, such as semiconductors and flat panel displays, and often searching for distributors of obsolete product we require can waste time and money. Finding GID Industrial proved to be a great asset to our company, with cost effective solutions and superior knowledge on all of their materials, it’d be hard to find a better provider of obsolete or hard to find products.",
    author: "Applied Materials"
  },
  {
    title: "CONSISTENTLY DELIVERS QUALITY SOLUTIONS",
    content: "Over the years, the equipment used in our company becomes discontinued, but they’re still of great use to us and our customers. Once these products are no longer available through the manufacturer, finding a reliable, quick supplier is a necessity, and luckily for us, GID Industrial has provided the most trustworthy, quality solutions to our obsolete component needs.",
    author: "Nidec Vamco"
  },
  {
    title: "TERRIFIC RESOURCE",
    content: "This company has been a terrific help to us (I work for Trican Well Service) in sourcing the Micron Ram Memory we needed for our Siemens computers. Great service! And great pricing! I know when the product is shipping and when it will arrive, all the way through the ordering process.",
    author: "Trican Well Service"
  },
  {
    title: "GO TO SOURCE",
    content: "When I can't find an obsolete part, I first call GID and they'll come up with my parts every time. Great customer service and follow up as well. Scott emails me from time to time to touch base and see if we're having trouble finding something.....which is often with our 25 yr old equipment.",
    author: "ConAgra Foods"
  },
];

const Comments: React.FC = () => {
  return (
    <section className="comments">
       <Swiper  
         slidesPerView={3}
         spaceBetween={30}
         freeMode={true}
         pagination={{
           clickable: true,
         }}
         modules={[FreeMode, Pagination, Keyboard, Scrollbar, Navigation]}
         className="mySwiper"
      >
        {commentsData.map((comment, index) => (
          <SwiperSlide key={index}>
            <div className="comments-item p-6 border rounded-lg shadow-lg space-y-4 bg-white w-[500px] min-w-[500px] gap-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">{comment.title}</p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Image key={starIndex} src="/images/star.png" alt="star" width={20} height={20} />
                  ))}
                </div>
              </div>
              <p>{comment.content}</p>
              <p className="font-medium text-gray-500">{comment.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Comments;