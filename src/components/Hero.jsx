import '../styles/Hero.css'

function Hero() {
    return (
        <div className="p-5 text-center bg-image rounded-3">
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3 titulo-hero">Bienvenido</h1>
                        <h4 className="mb-3 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos laudantium nesciunt sed omnis soluta reiciendis eaque deleniti velit sunt dolores inventore deserunt a ducimus fugiat minus, consectetur esse quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <br /> Impedit quibusdam aperiam, amet, iure et ad voluptas odit dignissimos numquam, alias deleniti distinctio? Asperiores quasi, aliquam veniam provident eligendi minima labore?</h4>
                        <a className="btn btn-outline-warning btn-lg mt-5" href="#!" role="button">Nuestras Clases</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;