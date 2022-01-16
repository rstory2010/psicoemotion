import Header from './components/header'
import Footer from './components/footer'
import img01 from './assets/img01.jpg'
import img03 from './assets/img03.png'
import { Icon } from '@iconify/react';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='h-90 bg-gray-100 w-full p-3 flex flex-col items-center'>
        <h1 className='text-morado text-4xl font-bold mt-16'>Psicoemotion</h1>
        <p className='font-bold italic mb-16'>Psic. Alejandra Rodríguez</p>
        <div className='flex justify-center mb-4'>
          <img src={img01} alt='Imagen' className='w-80 h-48 p-1 ml-9 md:ml-0 text-center bg-white shadow-lg shadow-gray-500/50 outline outline-offset-4 outline-4 outline-gray-500 origin-bottom -rotate-12' />
        </div>
        <div className="mt-10 prose prose-slate mx-auto lg:prose-lg">
            <h1><small>Señales de que necesitas trabajar </small>en tu Amor Propio</h1>
            <p>Si constantemente dejas de hacer cosas, porque otros no están de acuerdo con tus ideas, cuando sucede algo solo te enfocas en lo negativo, generándote malestar, incluso temes dar tu opinión porque temes que sea rechazada o ignorada, es momento de trabajar para <strong>AUMENTAR tu amor propio</strong>.</p>
            
            <p>He diseñado un método sencillo y práctico con el que podrás empezar a desarrollar y potenciar tu amor propio, para que te permitas hacer lo que quieras, sin esperar aprobación de nadie, para que puedas mirar tus debilidades como una oportunidad de mejorar y no como lo único que tienes, para que te sientas seguridad en ti al momento de emitir tu opinión, porque no importa si están de acuerdo contigo o no, tus ideas y opiniones son válidas e importantes. </p>

            <p className='lead'>Te invito a participar en mi <strong>master class gratuita</strong> de <strong>COMO DESARROLLAR AMOR PROPIO EN 3 PASOS</strong>, donde te mostraré como trabajar en tu #AmorPropio </p>

            <div className='flex justify-center'>
              <div className='relative'>
              <a href='https://wa.me/584244088235?text=Estoy%20interesado%20en%20el%20curso' 
                className='bg-whatsappBase rounded-md border-2 border-gray-300 m-1 flex flew-row items-center justify-center w-72 p-3 shadow-lg relative'>
                  <Icon icon="logos:whatsapp" className='h-16 w-16 mr-2' />
                  <span className='font-extrabold text-3xl text-whatsapp'>Regístrate</span>
              </a>
              <div className='absolute top-0 right-0 -mr-1 -mt w-4 h-4 rounded-full bg-whatsapp animate-ping'></div>
              <div className='absolute top-0 right-0 -mr-1 -mt w-4 h-4 rounded-full bg-whatsapp'></div>
              </div>
            </div>
           
            <h2>Información General:</h2>
            <ol>
              <li>
                <div className='inline-flex items-center'>
                  <span>Plataforma:</span>
                  <Icon icon="grommet-icons:zoom" className='h-10 w-10 mx-2'/>
                  <span className='text-zoom font-bold text-2xl' >Zoom</span>
                </div>
              
              </li>
              <li><p>Día: <strong>Lunes 10 de Enero de 2022</strong></p></li>
              <li><p>Hora: <strong>07:00pm (HLV <small>Hora Local Venezuela</small>)</strong></p></li>
            </ol>

            <p>El link de nuestra reunión lo estaré compartiendo a través de mi canal de <strong>Telegram</strong>, así que únete para que no te pierdas ningún detalle.</p>

            <div className='flex justify-center'>
              <div className='relative'>
              <a href='https://t.me/psicoemotion7' 
                className='bg-gray-200 rounded-md border-2 border-gray-300 m-1 flex flew-row items-center justify-center p-3 shadow-lg relative w-72'>
                  <Icon icon="logos:telegram" className='h-16 w-16 mr-2' />
                  <span className='font-extrabold text-3xl'>Únete</span>
              </a>
              <div className='absolute top-0 right-0 -mr-1 -mt w-4 h-4 rounded-full bg-telegram animate-ping'></div>
              <div className='absolute top-0 right-0 -mr-1 -mt w-4 h-4 rounded-full bg-telegram'></div>
              </div>
            </div>

            <h2>¿Preparad@ para arrancar el 2022 con el amor propio por las nubes?</h2>
            
            <div className="flex justify-center">
              <img src={img03} alt='Imagen' className='w-72 h-48 p-1 mr-5 md:ml-0 text-center bg-white shadow-lg shadow-gray-500/50 outline outline-offset-4 outline-4 outline-gray-500 origin-bottom rotate-12' />
            </div>

        </div>
        </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
