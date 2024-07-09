import Kathan from '../assets/Kathan.png';
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
});

function Hero() {
    return (
        <div className="border-b ☐ border-neutral-900 pb-4 h-screen lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 pl-4">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-20 lg:text-8xl relative text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 animate-text-shimmer">
                            Kathan Thakkar
                        </motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent bg-200% animate-gradient-x">
                            Full Stack Developer
                        </motion.span>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-auto">
                    <div className="flex justify-center">
                        <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} src={Kathan} alt="Kathan Thakkar" className='h-4/5 w-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
