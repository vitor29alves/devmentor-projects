import { Link } from "react-router-dom"

export function ProjectsPage() {

    return (
        <div>
            <h1>Titulo: </h1>

            <Link to={'/nike-air-page'}>
                <button>Acessar</button>
            </Link>
        </div>
    )
}