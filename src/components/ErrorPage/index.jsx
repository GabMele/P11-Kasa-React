import { Link } from 'react-router-dom';
import './ErrorPage.css';  // Import the CSS file

function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oups ! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}

export default ErrorPage;
