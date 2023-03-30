import { Link } from 'react-router-dom';

export const AuthLink = ({ descripcion, ruta }) => {
  return (
    <Link className="auth-link-container-text" component={ Link } to={ ruta }>
      { descripcion }
    </Link>
  )
}
