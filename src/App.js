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
            <h1>Amor Propio: Descúbrete, Acéptate y Transfórmate</h1>
            <p className="lead">Entrenamiento de 30 días</p>
            <p>A lo largo de mi práctica profesional he podido ver como muchas personas se quedan estancadas en vidas que no quieren, en estados emocionales negativos, con personas que no quieren, con trabajos que odian y dejando que su vida pase, mientras son infelices. </p>
            
            <p className="lead">¿Por qué es tan frecuente ver cada vez más personas sumergidas en una vida que no quieren?</p>
            
            <p>Porque nos enseñaron a que debíamos estudiar, tener una familia, un buen trabajo y un plan de jubilación, pero no nos enseñaron a como estar tranquilos con nosotros mismos cada día, no nos enseñaron a identificar y ponerle nombre a eso que sentimos, no nos enseñaron a hacer pareja saludable, no nos enseñaron que es más importante hacer lo que te gusta a tener un empleo que odiamos, no nos enseñaron a reconocer y atender nuestro niño interno, es que no nos han enseñado a amarnos. </p>

            <p className="lead">Amarnos puede ser tan fácil de decir, pero ¿qué es realmente tener amor propio?, ¿de qué sé trata ese amor que todos debemos tener, que todos quieren tener pero que pocos saben desarrollar?</p>

            <p>He diseñado un entrenamiento para que puedas desarrollar tu amor propio, te acompañaré durante 30 días con técnicas y herramientas que he probado con cientos de personas que me ha permitido el privilegio de acompañarlos en sus procesos y donde he podido probar que es más eficiente y práctico para desarrollar y elevar tu amor propio.</p>

            <p><strong>Este entrenamiento es para personas que quieren transformar su vida</strong>, a través del desarrollo de su amor propio, que no tienen una idea clara por donde empezar, ni mucho menos un plan para ejecutar.</p>

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
           
            <h2>¿Qué encontrarás en este entrenamiento?</h2>
            <ol>
              <li><p>Aprendiendo de mis emociones.</p></li>
              <li><p>Conectando con mi niño interior.</p></li>
              <li><p>Sanando la relación con mamá.</p></li>
              <li><p>Sanando la relación con papá.</p></li>
              <li><p>Creencias y patrones de conducta.</p></li>
              <li><p>El espejo donde me reflejo.</p></li>
              <li><p>Cultivando mi amor propio.</p></li>
              <li><p>Construyendo la persona que quiero ser.</p></li>
              <li><p>Hábitos de una persona que se ama.</p></li>
              <li><p>Claves para lograr la vida que quiero.</p></li>
            
            </ol>

            <p><strong>Estaremos conectados en un grupo de Telegram</strong> durante todo el entrenamiento donde podrás conocer y compartir con personas que tienen tus mismos intereses, aprender de sus experiencias, recibir ayuda y apoyo.</p>

            <h2>¿Qué aprenderás en este entrenamiento?</h2>
            <ul>
                <li><p>Gestionar tus emociones.</p></li>
                <li><p>Entender que hace que actúes y te comportes como lo haces.</p></li>
                <li><p>Conocer a tu niño interior y sacarle provecho.</p></li>
                <li><p>Sanar la relación con tus padres y tener mejores relaciones interpersonales.</p></li>
                <li><p>Construir una versión de ti que te guste y te haga feliz.</p></li>
                <li><p>Tomar decisiones.</p></li>
                <li><p>Descubrir tus creencias limitantes y derribarlas.</p></li>
                <li><p>Maximizar lo que te potencia.</p></li>
                <li><p>Organizar tus proyectos y planificar para la acción.</p></li>
                <li><p>Tomar el control de tu vida.</p></li>
            </ul>

            <h2>¿Qué incluye esta oferta?</h2>
            <ol>
                <li><p>Entrenamiento de 30 días conmigo.</p></li>
                <li><p>E-book Aprende a decir NO, sin sentirte culpable.</p></li>
                <li><p>E-book Amor propio mucho más que autoestima: los 7 elementos del amor propio.</p></li>
                <li><p>E-book Conviértete en una persona asertiva.</p></li>
                <li><p>Workbook con herramientas y actividades para poner en práctica durante 30 días.</p></li>
            </ol>
            
            <div className="flex justify-center">
              <img src={img03} alt='Imagen' className='w-72 h-48 p-1 mr-5 md:ml-0 text-center bg-white shadow-lg shadow-gray-500/50 outline outline-offset-4 outline-4 outline-gray-500 origin-bottom rotate-12' />
            </div>

            <h2>¿Qué necesito para tomar este entrenamiento?</h2>
            <ul>
                <li><p>Buena conexión a internet.</p></li>
                <li><p>Par de horas a la semana para las clases. Las que podrás ver en vivo o grabadas, según tú disponibilidad.</p></li>
                <li><p>Tener ganas de aprender y compromiso contigo.</p></li>
            </ul>

            <h2>¿Por qué hacer este entrenamiento conmigo?</h2>
            <p><strong>Soy psicólogo clínico, terapeuta cognitivo conductual psicoterapeuta, coach profesional y terapeuta de parejas</strong>. Tengo más de 14 años estudiando comportamiento humano, formándome el área de la conducta humana, casi 7 años de práctica profesional con adultos, parejas y empresas y alrededor de 4 años asistiendo a terapia como paciente. Tengo el conocimiento profesional, la práctica profesional con mis pacientes/clientes y la experiencia en mi proceso personal.</p>

        </div>
        </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
