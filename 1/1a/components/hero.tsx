// import { siteConfig } from '@/config/site';

// export function Hero() {
//   return (
//     <div className="flex h-screen flex-col justify-between py-36">
//   <div className="flex items-center justify-between">
//   {/* Text Section */}
//   <div>
//     <h3 className="mb-2 pl-1 text-lg leading-6 text-highlight">
//       Hi all. I am
//     </h3>
//     <h6 className="text-6xl text-highlight">Shreyash</h6>
//     <h6 className="text-6xl text-highlight">Ghanekar</h6>
//     <h3 className="pl-1 text-lg font-medium text-theme-green">
//       {'>'} Software Engineer
//     </h3>
//   </div>

//   {/* Photo Section */}
//   <div className="relative group">
//     <img
//       src="/assets/shreyash.jpg"
//       alt="Shreyash Ghanekar"
//       className="w-80 h-80 rounded-full border-4 border-theme-green transition-transform duration-300 group-hover:scale-110"
//     />
//   </div>
// </div>


//       <div className="space-y-4 text-sm">
//         {/* <h3 className="text-theme-gray">{'//'} Find my profile on GitHub.</h3> */}
//         <p className="font-medium">
//         <h3 className="text-theme-gray">{'//'} Find my profile on GitHub.</h3>
//           <span className="text-sm text-theme-blue">
//             {/* constexpr std::string_view{' '} */}
//             {' '}
//           </span>
//           <span className="text-sm text-theme-green ">githubLink </span>
//           <span className="text-sm">= </span>
//           <a href={siteConfig.links.github}>
//             <span className="text-sm text-theme-red hover:text-hover">
//               {'"'}
//               {siteConfig.links.github}
//               {'"'}
//             </span>
//           </a>
//           <span className="text-sm">;</span>
//         </p>
//       </div>
//       <div className="space-y-4 text-sm">
//         {/* <h3 className="text-theme-gray">{'//'} Find my profile on Linkedin.</h3> */}
//         <p className="font-medium">
//         <h3 className="text-theme-gray">{'//'} Find my profile on Linkedin.</h3>
//           <span className="text-sm text-theme-blue">
//             {/* constexpr std::string_view{' '} */}
//             {' '}
//           </span>
//           <span className="text-sm text-theme-green ">linkedinLink </span>
//           <span className="text-sm">= </span>
//           <a href={siteConfig.links.linkedin}>
//             <span className="text-sm text-theme-red hover:text-hover">
//               {'"'}
//               {siteConfig.links.linkedin}
//               {'"'}
//             </span>
//           </a>
//           <span className="text-sm">;</span>
//         </p>
//       </div>
//     </div>
//   );
// }
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <div className="flex h-screen flex-col justify-between py-36">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      

        {/* Text Section */}
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h3 className="mb-2 pl-1 text-lg leading-6 text-highlight">
            Hi all. I am
          </h3>
          <h6 className="text-4xl sm:text-6xl text-highlight">Shreyash</h6>
          <h6 className="text-4xl sm:text-6xl text-highlight">Ghanekar</h6>
          <h3 className="pl-1 text-lg font-medium text-theme-green">
            {'>'} Software Engineer
          </h3>
        </div>
       {/* Photo Section */}
       <div className="relative group mb-6 sm:mb-0">
          <img
            src="/assets/shreyash.jpg"
            alt="Shreyash Ghanekar"
            className="w-36 h-36 sm:w-80 sm:h-80 rounded-full border-4 border-theme-green transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <p className="font-medium">
          <h3 className="text-theme-gray">{'//'} Find my profile on GitHub.</h3>
          <span className="text-sm text-theme-green ">githubLink </span>
          <span className="text-sm">= </span>
          <a href={siteConfig.links.github}>
            <span className="text-sm text-theme-red hover:text-hover">
              {'"'}
              {siteConfig.links.github}
              {'"'}
            </span>
          </a>
          <span className="text-sm">;</span>
        </p>
      </div>
      <div className="space-y-4 text-sm">
        <p className="font-medium">
          <h3 className="text-theme-gray">{'//'} Find my profile on Linkedin.</h3>
          <span className="text-sm text-theme-green ">linkedinLink </span>
          <span className="text-sm">= </span>
          <a href={siteConfig.links.linkedin}>
            <span className="text-sm text-theme-red hover:text-hover">
              {'"'}
              {siteConfig.links.linkedin}
              {'"'}
            </span>
          </a>
          <span className="text-sm">;</span>
        </p>
      </div>
    </div>
  );
}
