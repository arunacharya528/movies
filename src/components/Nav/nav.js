import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark py-4 title-font">
            <div class="container">
                <a class="navbar-brand" href="#">movie</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Popular</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Films</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Serials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cartoons</a>
                        </li>

                    </ul>
                    <div class="d-flex">
                        <a class="btn btn-primary">Log in</a>
                        <div class="m-auto px-3">
                            <a class="px-2">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Nav;
