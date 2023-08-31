import Image from 'next/image'
import {BsFillMoonStarsFill, BsInstagram, BsLinkedin,} from 'react-icons/bs';
import deved from '../public/Linkedin-headshot.jpg';
import {AiFillHtml5,} from 'react-icons/ai';
import {BiLogoCss3, BiLogoNodejs, BiLogoReact, BiLogoMongodb, BiLogoGraphql, } from 'react-icons/bi';

export default function Home() {
  return (
<div>
  <header>
    <title>Alexis Bocanegra Portfolio</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&display=swap"/>
  </header>
    <main className='bg-white px-10'>
      <section >
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-archivo'>developedby</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://www.linkedin.com/in/alexis-bocanegra-267040203/">Resume</a>
              </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-500 font-medium font-archivo'>Alexis Bocanegra</h2>
          <h3 className='text-2xl py-2 font-archivo'>Full-Stack Web Developer</h3>
          <p className='font-mono font-medium py-5 leading-8 text-gray-800'>
            Growing web developer seeking a career to further ones expertise in the coding industry and be a viable asset to the company. 
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-4 text-gray-600'>
          <BsInstagram />
          <BsLinkedin />
        </div>
        <div className='flex'>
          <Image className='h-80 w-80 rounded-full mt-20 mx-auto' alt="Headshot of developer" src={deved} />
        </div>
      </section>
      
      {/* This portion of my portfolio contains all the computer languages I have experience in */}

      <section className='my-10 flex-col justify-center font-mono text-xl text-center py-5 leading-8 text-gray-800'>
        <h3 className=''>
          Below are listed the current languages and querys I have experience in 
        </h3>
        <ul className=''>
          <li>
            <AiFillHtml5 />
            <BiLogoCss3 />
            <BiLogoNodejs />
            <BiLogoReact />
          </li>
        </ul>
      </section>

    </main>
  </div>
  )
}
