// import React, { useRef, useEffect } from 'react';
// import Image from 'next/image'
// import alweena from '../../../public/clients/brands/logo1.png'
// import Alkhattiya from '../../../public/clients/brands/logo2.png'
// import Alwaaha from '../../../public/clients/brands/logo3.png'
// import AlinasChoice from '../../../public/clients/brands/logo4.png'
// import Beacon from '../../../public/clients/brands/logo5.png'
// import ecpik from '../../../public/clients/brands/logo6.png'
// import gazaal from '../../../public/clients/brands/logo7.png'
// import intercool from '../../../public/clients/brands/logo8.png'
// import nexWave from '../../../public/clients/brands/logo9.png'

// function ScrollableRow() {
//   const containerRef = useRef();

//   useEffect(() => {
//     const container = containerRef.current;
//     let requestId;

//     function scroll() {
//       container.scrollLeft += 1;
//       if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
//         container.scrollLeft = 0;
//       }
//       requestId = requestAnimationFrame(scroll);
//     }
//     scroll();
//     return () => cancelAnimationFrame(requestId);
//   }, []);

  
//   return (
//     <div className='logoRow'
//       ref={containerRef}
//     >
//       {[...partners, ...partners, ...partners].map((e, index) => (
//         <div key={index} style={{ margin: '0 0px', }}>
//           <Image src={e} width={0}
//             height={0} alt={`logo${index}`}
//             className='images'
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ScrollableRow;


// const partners = [
//   alweena,
//   Alkhattiya,
//   Alwaaha,
//   AlinasChoice,
//   intercool,
//   Beacon,
//   ecpik,
//   gazaal,
//   nexWave
// ]