import moment from 'moment'
import React from 'react'

function IntroSection() {
  return (
    <div id="intro" className="h-screen">
      <div className="container">
        <h1>Sobre Mateus</h1>
        <p>
          Sou de Belo Horizonte - MG, tenho{' '}
          {moment().diff(moment('1996-03-03'), 'years')} anos, sou bacharel em
          Sistemas de Informação e técnico em Computação Gráfica, ambas
          formações foram pela faculdade Pitágoras.
        </p>
        <p>
          Me considero alguém responsável, esforçado e sincero. Gosto de
          aprender sobre diversos assuntos, principalmente sobre as tecnologia.
        </p>
      </div>
    </div>
  )
}

export default IntroSection
