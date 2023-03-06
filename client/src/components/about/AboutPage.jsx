import React from 'react'
import { ComponentContainer, Title, TecnologiesContainer, ContactContainer, Description, ContactInfo, ContactIcon, ContactText, TecnologieInfo, TecnologieIcon, TecnologieText } from './StylesAboutPage'
import { SiGithub } from 'react-icons/si'
import { SiReact, SiRedux, SiReactrouter, SiStyledcomponents, SiNodedotjs, SiExpress, SiPostgresql, SiSequelize } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedinIn } from 'react-icons/fa'

export const AboutPage = () => {
  return (
    <ComponentContainer>

      <Title>
        <h1 data-text='Ivan Bilvinas'>Ivan Bilvinas</h1>
      </Title>

      <Description>
        <span>This is my individual project for SoyHenry's Bootcamp using the rawg.io videogames API. You will be able to search, create, filter and sort videogames.</span>
      </Description>

      <div>
        <div className='tecnologiesTitle'>
          <h3>Technologies:</h3>
        </div>
        <TecnologiesContainer>
          <TecnologieInfo className='react'>
            <TecnologieIcon><SiReact className='icon' /></TecnologieIcon>
            <TecnologieText><span>React</span></TecnologieText>
          </TecnologieInfo>
          <TecnologieInfo className='redux'>
            <TecnologieIcon><SiRedux className='icon' /></TecnologieIcon>
            <TecnologieText><span>Redux</span></TecnologieText>
          </TecnologieInfo>
          <TecnologieInfo className='reactRouter'>
            <TecnologieIcon><SiReactrouter className='icon' /></TecnologieIcon>
            <TecnologieText><span>React Router</span></TecnologieText>
          </TecnologieInfo>
          <TecnologieInfo className='styledComponents'>
            <TecnologieIcon><SiStyledcomponents className='icon' /></TecnologieIcon>
            <TecnologieText><span>styled components</span></TecnologieText>
          </TecnologieInfo>
          <TecnologieInfo className='node'>
            <TecnologieIcon><SiNodedotjs className='icon' /></TecnologieIcon>
            <TecnologieText><span>Node.js</span></TecnologieText>
          </TecnologieInfo>
          <TecnologieInfo className='express'>
            <TecnologieIcon><SiExpress className='icon' /></TecnologieIcon>
            <TecnologieText><span>Express.js</span></TecnologieText>
          </TecnologieInfo>
          <TecnologieInfo className='postgresql'>
            <TecnologieIcon><SiPostgresql className='icon' /></TecnologieIcon>
            <TecnologieText><span>PostgreSQL</span></TecnologieText>
          </TecnologieInfo>
          <TecnologieInfo className='sequelize'>
            <TecnologieIcon><SiSequelize className='icon' /></TecnologieIcon>
            <TecnologieText><span>Sequelize</span></TecnologieText>
          </TecnologieInfo>
        </TecnologiesContainer>
      </div>

      <div>
        <div className='contactTitle'>
          <h3>Contact:</h3>
        </div>
        <ContactContainer>
          <a href="https://www.linkedin.com/in/ivan-bilvinas-5897331b7/">
            <ContactInfo className='linkedinContact'>
              <ContactIcon><SiGithub className='icon githubIcon' /></ContactIcon>
              <ContactText><span>Ivan Bilvinas</span></ContactText>
            </ContactInfo>
          </a>
          <a href="https://github.com/ivanbvn">
            <ContactInfo className='githubContact'>
              <ContactIcon><FaLinkedinIn className='icon linkedinIcon' /></ContactIcon>
              <ContactText><span>ivanbvn</span></ContactText>
            </ContactInfo>
          </a>
          <ContactInfo className='gmailContact'>
            <ContactIcon><FcGoogle className='icon gmailIcon' /></ContactIcon>
            <ContactText><span>bilvinas.ivan@gmail.com</span></ContactText>
          </ContactInfo>
        </ContactContainer>
      </div>

    </ComponentContainer>
  )
}
