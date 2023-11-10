const CartaPresentacion = () => {
    const nombre = 'Sergio';
    const apellido = 'Velazquez';
    const habilidades = ['Python', 'Html', 'Css', 'Javascript', 'React'];
    const aspiraciones = "En busca de aprender todo lo que pueda de este mundo de la programacion para desarrollarme laboralmente";
    const lista = <div>
        <h2 className="App-titulo"> Hola, mi nombre es {nombre} {apellido} </h2>
        <h3 className="App-aspiraciones">{aspiraciones}</h3>
        <pre className="App-li-titulo"> Habilidades:</pre>
        <div>
            <ul className="App-li-detalle">
                <li>{habilidades[0]}</li>
                <li>{habilidades[1]}</li>
                <li>{habilidades[2]}</li>
                <li>{habilidades[3]}</li>
                <li>{habilidades[4]}</li>
            </ul>
        </div>
    </div>
    return (
        <div>
            {lista}
        </div>
    )
}


export default CartaPresentacion;