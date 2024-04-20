// // components/BirthdayBook.js
// 'use client'
// import React from 'react';
// import HTMLFlipBook from 'react-pageflip';

// const wishes = [
//   { name: "Alice", videoUrl: "/videos/sample1.mp4", text: "test 1" },
//   { name: "Bob", videoUrl: "/videos/sample2.mp4", text: "test 2" },
//   { name: "Charlie", videoUrl: "/videos/sample3.mp4", text: "test 3" },
//   { name: "Charlie", videoUrl: "/videos/sample4.mp4", text: "test 4" }
// ];




//   const Page = React.forwardRef((props, ref) => {
//     return (
//         <div  ref={ref} className=" demoPage flex flex-col items-center justify-center h-full bg-white shadow-xl rounded-lg p-4">
//            <div className="page">
//       <div className="page-content">{props.children}</div>
//     </div>
//         </div>
//     );
// });  

// const BirthdayBook = () => {
//   return (
//     <div style={{ maxWidth: 640, margin: "auto" }} className="flex justify-center items-center h-screen bg-gray-100">
//      <HTMLFlipBook width={300} height={400} minWidth={200} maxWidth={500} minHeight={300} maxHeight={600} showCover={true}>
//       {wishes.map((wish, index) => (
//         <Page key={index}>
//           <h2 className="text-lg font-bold text-gray-700 mb-2">{wish.name}'s Wish</h2>
//           {/* <video controls style={{ width: "100%" }} className="w-full rounded">
//             <source src={wish.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video> */}
//           <div>{wish.text}</div>
//         </Page>
//       ))}
//     </HTMLFlipBook>
//     </div>
//   );
// };

// export default BirthdayBook;
