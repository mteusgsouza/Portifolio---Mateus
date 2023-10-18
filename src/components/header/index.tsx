import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { fetchGithubUser } from '@/lib/fetchers/fetchGithubUser'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

async function HeaderSection() {
  const userData = fetchGithubUser({ username: 'mteusgsouza' })
  const user = await userData

  return (
    <header
      id="header"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="container">
        <div className="flex">
          <div className="mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl mb-3">
                Olá, eu sou Mateus,
                <br />
                Sou Desenvolvedor React
              </h1>
              <h2 className="text-lg">Seja bem-vindo ao meu portfólio!</h2>
              <p className="max-w-md">{user.bio}</p>
            </div>
            <p>Entre em contato</p>
            <Link href="#contato" passHref>
              <Button>Contactar</Button>
            </Link>
          </div>
          <div className="mr-auto">
            <Avatar className="h-60 w-60">
              <AvatarImage src={user.avatar_url} alt={user.name} />
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection
