import '../styles/Form.css'

function Form() {
    return(
        <section className='mt-5'>
        <div className="content">

            <div className="left">
                <img src="/icons/gimnasio.png" alt="icon"/>
                <h1>light weight</h1>
            </div>

            <div className="right">
                <div className="title mt-5">
                    <h2>Contactanos</h2>
                </div>
                <div className="form">
                    <form>
                        <div className="inputbox mt-2">
                            <label>Tu Nombre</label>
                            <input type="text" placeholder="nombre completo" required/>
                        </div>
                        <div className="inputbox mt-4">
                            <label>Email</label>
                            <input type="email" placeholder="ejemplo@gmail.com" required/>
                        </div>
                        <div className="create mt-5">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </section>

    );
}

export default Form;