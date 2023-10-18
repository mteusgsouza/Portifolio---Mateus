import React from 'react'

function SkillsSections() {
  const CardData = [
    {
      title: 'Photoshop e Illustrator',
      text: 'Conclui um curso de Photoshop CS6 em 2014, e desde então utilizo esta incrível ferramenta. E atualmente o Illustrator é a ferramenta que prefiro utilizar em trabalhos vetoriais.',
    },
    {
      title: 'JavaScript',
      text: 'Aprendi sobre JavaScript em meu curso técnico em Computação Gráfica em 2015, e atualmente estou estudando por conta própria alguns frameworks como React e Angular.',
    },
    {
      title: 'PHP',
      text: 'Comecei a estudar PHP por conta própria ao final de 2018, por isso meu conhecimento ainda é um tanto quanto razo, mas pretendo utilizar mais dessa linguagem.',
    },
    {
      title: 'Linux',
      text: 'Sempre utilizei sistemas da Microsoft, mas em 2018 decidi conhecer os sistemas Linux, e estou me adaptando bem. Atualmente utilizo o Linux Mint em dual boot com o Windows 10 no meu PC.',
    },
    {
      title: 'Computação Gráfica',
      text: 'Durante o curso de Computação Gráfica em 2015, aprendi sobre modelagem 3D, animação, ilustração, desenho técnico, produção gráfica, audiovisual e marketing.',
    },
    {
      title: 'Sistemas de Informação',
      text: ' Em Sistemas de Informação aprendi sobre segurança, qualidade e engenharia de software, banco de dados, algoritimos, e linguagens como Java e C#, e seus frameworks JSF e .NET.',
    },
  ]

  return (
    <div id="skills">
      <div className="container">
        <h1>Habilidades</h1>
        <p>Estas são algumas das minhas áreas de conhecimento.</p>
      </div>
    </div>
  )
}

export default SkillsSections
