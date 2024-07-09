import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { Si1001Tracklists, SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiCplusplus, SiJavascript, SiRedux, SiEthereum, SiDocker, SiAmazonaws, SiPython, SiNginx, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

function Technologies() {
    return (
        <div className="border-b ☐ border-neutral-800 pb-24">
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-7">
                <motion.div variants={iconVariants(2.5)} initial='initial' animate = 'animate'  className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(2.75)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants(3.0)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants(3.25)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-sky-900" />
                </motion.div>
                <motion.div variants={iconVariants(3.75)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div variants={iconVariants(4.0)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiRedux className="text-7xl text-purple-500" />
                </motion.div>
                <motion.div variants={iconVariants(4.25)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiEthereum className="text-7xl text-slate-700" />
                </motion.div>
                <motion.div variants={iconVariants(4.5)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiDocker className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div variants={iconVariants(4.75)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiAmazonaws className="text-7xl text-slate-700" />
                </motion.div>
                <motion.div variants={iconVariants(5.0)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiPython className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div variants={iconVariants(5.25)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiNginx className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants(5.5)} initial='initial' animate = 'animate' className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-green-500" />
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies