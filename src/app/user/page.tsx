import { Button } from '@/components/ui/button'
import { fetchGithubUser } from '@/lib/fetchers/fetchGithubUser'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import React from 'react'

async function UserPage() {
  const userData = fetchGithubUser({ username: 'mteusgsouza' })
  const user = await userData

  return (
    <div className="container pt-36">
      <div className="flex">
        <div className="mx-auto">
          <div className="mb-10">
            <h1 className="mb-3 text-4xl">
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
  )
}

export default UserPage
