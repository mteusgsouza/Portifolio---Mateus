'use client'
import { IGitUser } from '@/@types/gitUser'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function IntroContent({ user }: { user: IGitUser }) {
  return (
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
      <span className="absolute bottom-0 right-0 text-4xl">👋</span>
    </div>
  )
}

export default IntroContent
