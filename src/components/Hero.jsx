// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Adeosun</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I build stunning user <br className='sm:block hidden' />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// // export default Hero;
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// // Import icons from react-icons
// import { FaWhatsapp, FaGithub } from 'react-icons/fa'; // For WhatsApp and GitHub
// import { MdEmail } from 'react-icons/md'; // For Email (Gmail)

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`} // <-- Add z-10 here!
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Adeosun</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I build stunning user <br className='sm:block hidden' />
//             interfaces and web applications
//           </p>

//           {/* Contact Links with React Icons */}
//           <div className="mt-8 flex gap-4">
//             <a
//               href="https://wa.me/+2347040877605"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2"
//             >
//               <FaWhatsapp className="text-2xl" /> {/* WhatsApp Icon */}
//               WhatsApp
//             </a>
//             <a
//               href="mailto:adeosun01pluto@gmail.com"
//               className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2"
//             >
//               <MdEmail className="text-2xl" /> {/* Email Icon */}
//               Gmail
//             </a>
//             <a
//               href="https://github.com/Adeosun01pluto/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2"
//             >
//               <FaGithub className="text-2xl" /> {/* GitHub Icon */}
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>

//       <ComputersCanvas />

//       {/* Also ensure the scroll indicator is clickable */}
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'> {/* <-- Add z-10 here too! */}
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Import icons from react-icons
import { FaWhatsapp, FaGithub } from 'react-icons/fa'; // For WhatsApp and GitHub
import { MdEmail } from 'react-icons/md'; // For Email (Gmail)

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* This div contains your text, social icons, and the vertical line */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Adeosun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build stunning user <br className='sm:block hidden' />
            interfaces and web applications
          </p>

          {/* Contact Links with React Icons */}
          <div className="mt-8 flex gap-6"> {/* Increased gap for better spacing with icons */}
            <a
              href="https://wa.me/+2347040877605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="text-2xl" /> {/* WhatsApp Icon */}
              WhatsApp
            </a>
            <a
              href="mailto:adeosun01pluto@gmail.com"
              className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2"
            >
              <MdEmail className="text-2xl" /> {/* Email Icon */}
              Gmail
            </a>
            <a
              href="https://github.com/Adeosun01pluto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2"
            >
              <FaGithub className="text-2xl" /> {/* GitHub Icon */}
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ComputersCanvas should be rendered directly, ideally without extra z-index,
          as it's meant to be the background. Its default stacking context should be
          lower than z-10. */}
      <ComputersCanvas />

      {/* This div contains the scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;