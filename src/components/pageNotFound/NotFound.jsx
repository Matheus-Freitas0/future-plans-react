import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <p>Oops! Página não encontrada</p>
                <a href="/" className="go-home-btn">Voltar para a página inicial</a>
            </div>
        </div>
    );
}

export default NotFound;
