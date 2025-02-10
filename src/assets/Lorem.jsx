import React, { useEffect, useRef, useState } from 'react'
import '../styles/App.css'

export default function Lorem() {
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref1.current) observer.observe(ref1.current)
    if (ref2.current) observer.observe(ref2.current)
    if (ref3.current) observer.observe(ref3.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <p ref={ref1} className="fade-inabout">
        Hi, <span className="primarycolor">D</span>aran{' '}
        <span className="secondarycolor">H</span>ub nació en <b>2021</b> con
        una visión clara: ayudar a otros a construir soluciones tecnológicas. Al
        principio, éramos un pequeño grupo de amigos,{' '}
        <span className="primarycolor">Adolfo Rosa</span> y{' '}
        <span className="secondarycolor">Ricardo Rivera</span>, quienes se
        conocían y trabajaban como <b>freelancers</b>. En esos primeros días,
        nos enfocamos en <b>proyectos</b> pequeños pero significativos,
        principalmente ayudando a empresas con <b>APIs</b> y tareas de <b>backend</b>.
      </p>
      <br />
      <p ref={ref2} className="fade-inabout">
        La necesidad de ayudar a más personas y empresas creció rápidamente, y
        decidimos unir fuerzas, creando un equipo más <b>sólido</b>. A medida
        que tomábamos más proyectos, incluimos no solo desarrollo web y{' '}
        <b>backend</b>, sino también soluciones más completas como{' '}
        <b>aplicaciones multiplataforma</b>, para el área de finanzas. Todo esto
        lo hicimos mientras manteníamos nuestra pasión por crear{' '}
        <b>aplicaciones</b> que realmente ayudaran a nuestros clientes a
        optimizar sus procesos.
      </p>
      <br />
      <p ref={ref3} className="fade-inabout">
        Hoy, <span className="primarycolor">D</span>aran{' '}
        <span className="secondarycolor">H</span>ub es un equipo de desarrollo
        especializado en proyectos de software completos, desde páginas web
        hasta bases de datos, y seguimos comprometidos con la excelencia.
        Nuestra experiencia abarca una variedad de tecnologías como{' '}
        <b>
          C#, .NET, Node.js, Python, React, SQL, PostgreSQL, Linux,
          React-Native, MongoDB y NestJS.
        </b>{' '}
        También nos especializamos en brindar apoyo a proyectos existentes,
        agregando nuestro toque y conocimiento a lo que sea necesario. Hablamos
        español e inglés, facilitando la colaboración con clientes
        internacionales.
      </p>
    </>
  )
}
