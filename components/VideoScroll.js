// components/VideoScroll.js
"use client"
// import React, { useState } from 'react';
// import { useSwipeable } from 'react-swipeable';

// const wishes = [
//   { name: "Alice", videoUrl: "/videos/sample1.mp4" },
//   { name: "Bob", videoUrl: "/videos/sample2.mp4" },
//   { name: "Charlie", videoUrl: "/videos/sample3.mp4" }
// ];

// const VideoCard = ({ wish, isActive }) => (
//   <div className={`flex flex-col justify-center items-center h-screen ${isActive ? 'block' : 'hidden'}`}>
//     <video key={wish.name} controls className="h-full w-full object-cover">
//       <source src={wish.videoUrl} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     <div className="absolute bottom-10 text-white text-xl font-bold p-4">
//       {wish.name}'s Wish
//     </div>
//   </div>
// );

// const VideoScroll = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => setCurrentIndex(currentIndex + 1 < wishes.length ? currentIndex + 1 : currentIndex),
//     onSwipedRight: () => setCurrentIndex(currentIndex - 1 >= 0 ? currentIndex - 1 : currentIndex),
//     trackMouse: true,
//     preventDefaultTouchmoveEvent: true
//   });

//   return (
//     <div {...handlers} className="flex flex-col h-screen overflow-hidden">
//       {wishes.map((wish, index) => (
//         <VideoCard key={index} wish={wish} isActive={index === currentIndex} />
//       ))}
//     </div>
//   );
// };

// export default VideoScroll;

// components/VideoScroll.js
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const wishes = [
  { name: "Alice", videoUrl: "/videos/sample1.mp4" },
  { name: "Bob", videoUrl: "/videos/sample2.mp4" },
  { name: "Charlie", videoUrl: "/videos/sample3.mp4" }
];

const VideoCard = ({ wish, isActive }) => (
  <div className={`flex flex-col justify-center items-center h-screen ${isActive ? 'block' : 'hidden'}`}>
    <video key={wish.name} controls className="h-full w-full object-cover" autoPlay autoplay>
      <source src={wish.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute bottom-10 text-white text-xl font-bold p-4">
      {wish.name}'s Wish
    </div>
  </div>
);

const VideoScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedUp: () => setCurrentIndex(currentIndex + 1 < wishes.length ? currentIndex + 1 : currentIndex),
    onSwipedDown: () => setCurrentIndex(currentIndex - 1 >= 0 ? currentIndex - 1 : currentIndex),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
    delta: 10 // Minimum distance (in pixels) before a swipe is triggered
  });

  return (
    <div {...handlers} className="flex flex-col h-screen overflow-hidden">
      {wishes.map((wish, index) => (
        <VideoCard key={index} wish={wish} isActive={index === currentIndex} />
      ))}
    </div>
  );
};

export default VideoScroll;
