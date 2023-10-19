'use client'
import { IGitUser } from '@/@types/gitUser'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import moment from 'moment'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

function IntroContent({ user }: { user: IGitUser }) {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={user.avatar_url}
              alt={user.name}
              quality={95}
              height={192}
              width={192}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mateus.</span> I'm a {''}
        <span className="font-bold">front-end developer</span> with{' '}
        <span className="font-bold">
          {moment().diff(moment('2019-11-19'), 'years')} years
        </span>{' '}
        of professional experience building{' '}
        <span className="italic"> sites & apps</span> with{' '}
        <span className="underline">React</span>
      </motion.p>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/cv.pdf"
          download
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mteusgsouza"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default IntroContent
