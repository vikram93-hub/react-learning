import Vikram from './portfolio.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={Vikram} alt="Vikram"></img>
            <h2 className="card-title">Vikram edits</h2>
            <p className="card-text">hello i am vikram from vizag of 28 years old</p>
        </div>
    );
}

export default Card