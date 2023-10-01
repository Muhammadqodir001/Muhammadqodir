import React from 'react';
import {motion} from "framer-motion"  


const Skills = () => {
    return (
       <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
           <div className=" py-20 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
              <motion.div
               initial={{opacity:0, scale:0, x: 500}}
               whileInView={{opacity: 1, scale: 1, x: 0}}
               animate={{x: 0}}
               transition={{ delay: 0.5, type: 'spring', stiffness: 120}}>
                  <p className='ml-[130px] mr-36  md:ml-[440px] text-4xl font-bold inline border-b-4 border-orange-500 '>Skills</p>
                   <p className='ml-[70px]  md:ml-[370px] py-4'>//I work with these technologies:</p>
               </motion.div>
                   
               <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-cyan-300'>
                    <motion.div 
                     className='shadow-md shadow-[#69a5ee] hover:scale-110 duration-100'
                     initial={{opacity:0, scale:0, x: 500}}
                     whileInView={{opacity: 1, scale: 1, x: 0}}
                     animate={{x: 0}}
                     transition={{ delay: 0.5, type: 'spring', stiffness: 120}}
                     variants={{
                        hover: {
                            scale: 1.2
                            
                        }
                     }}
                     whileHover="hover">
                     
                    <img className='w-20 mx-auto' src="src/assets/html.png" alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </motion.div>
            
                <motion.div
                  className='shadow-md shadow-[#69a5ee] hover:scale-110 duration-100'
                  initial={{opacity:0, scale:0, x: 500}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  animate={{x: 0}}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 120}}
                  variants={{
                     hover: {
                         scale: 1.2
                         
                     }
                  }}
                  whileHover="hover">
                     
                     <img className='w-20 mx-auto' src='src/assets/css.png' alt="HTML icon" />
                      <p className='my-4'>CSS</p>
                </motion.div>  

                <motion.div
                   className='shadow-md shadow-[#69a5ee] hover:scale-110 duration-100'
                   initial={{opacity:0, scale:0, x: 500}}
                   whileInView={{opacity: 1, scale: 1, x: 0}}
                   animate={{x: 0}}
                   transition={{ delay: 0.5, type: 'spring', stiffness: 120}}
                   variants={{
                     hover: {
                         scale: 1.2
                         
                     }
                  }}
                  whileHover="hover">
                    <img  className='w-20 mx-auto' src='src/assets/javascript.png'/>
                    <p className='my-4'>JavaScript</p>
                </motion.div>
                 
                 <motion.div 
                  className='shadow-md shadow-[#69a5ee] hover:scale-110 duration-100'
                  initial={{opacity:0, scale:0, x: 500}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  animate={{x: 0}}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 120}}
                  variants={{
                     hover: {
                         scale: 1.2
                         
                     }
                  }}
                  whileHover="hover">
                  
                    <img className='w-20 mx-auto' src='src/assets/react.png'></img>
                    <p className='my-4 mx-auto'>React</p>
                 </motion.div>
                
                 <motion.div
                  className='shadow-md shadow-sm:3px shadow-[#69a5ee] transform hover:scale-110 duration-100'
                  initial={{opacity:0, scale:0, x: 500}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  animate={{x: 0}}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 120}}
                  variants={{
                     hover: {
                         scale: 1.2
                         
                     }
                  }}
                  whileHover="hover">
                    <img className='w-20 mx-auto' src='src/assets/tailwind.png'></img>
                    <p className='my-4 mx-auto'>Tailwind Css</p>
                 </motion.div>

                 <motion.div
                   className='transform duration-[-500] shadow-md shadow-[#69a5ee]'
                   initial={{ opacity: 0, scale: 0, x: 500 }}
                   whileInView={{ opacity: 1, scale: 1, x: 0 }}
                   animate={{ x: 0 }}
                   transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                   variants={{
                           hover: {
                               scale: 1.2
                               
                           }
                      }}
                    whileHover="hover">
                   <img className='w-20 mx-auto transform duration-300' src='src/assets/github.png'></img>
                   <p className='my-4 mx-auto'>GitHub</p>
                </motion.div>
              
              </div>
           </div>
       </div>
    );
};
export default Skills;



