import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de Guitarras, Blog de Musica y mas...'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia elementum ex quis aliquet. Donec venenatis, tortor et tristique mollis, dolor libero maximus leo, quis luctus diam lorem mollis leo. Nulla fringilla euismod nulla non ultricies. Sed placerat erat vitae finibus lacinia. Cras in blandit velit, eget tincidunt justo. Etiam luctus orci quis arcu elementum, et gravida mi efficitur.</p>

            <p>Praesent mattis et quam vitae pretium. Etiam sagittis ante vitae nisi finibus convallis. Morbi ipsum metus, rhoncus a facilisis ac, vestibulum quis turpis. Vivamus id facilisis libero. Curabitur viverra, quam non molestie scelerisque, quam ipsum accumsan lorem, eget vestibulum lacus mauris vel justo. In ac nunc id ligula laoreet convallis. Morbi a lacus congue, pellentesque mauris quis, viverra massa.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros