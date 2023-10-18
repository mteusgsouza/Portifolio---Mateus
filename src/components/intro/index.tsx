import { fetchGithubUser } from '@/lib/fetchers/fetchGithubUser'
import React from 'react'
import IntroContent from './content'

async function Intro() {
  const userData = fetchGithubUser({ username: 'mteusgsouza' })
  const user = await userData

  return (
    <section id="intro" className="flex items-center justify-center pt-36">
      <IntroContent user={user} />
    </section>
  )
}

export default Intro
