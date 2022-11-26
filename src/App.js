import { useState, React } from 'react';
import './App.css';
import Form from './components/Form/Form'
import Cardfront from './images/bg-card-front.png'
import Cardback from './images/bg-card-back.png'

function App() {
  const [card, setCard] = useState({
    name: "Abebe Kebede",
    cardNumber: '0000 0000 0000 0000',
    exMonth: "00",
    exYear: "00",
    cvc: ""
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-sm-12 col-md-6 left'>
          <div className='row card-front'>
              <img src={Cardfront} width="100%" />
              <div className='on-image'>
                <p>{card.cardNumber}</p>
              </div>
          </div>
          <div className='row card-back'>
              <img src={Cardback} />
          </div>
        </div>
        <div className='col-sm-12 col-md-6 right'>
          <form className='card-form'>
            <Form
            label="Cardholder Name"
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
            value={card.name}
            />
            <Form
            label="Card Number"
            type="text"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={card.cardNumber}
            />
            <div className='card-bottom'>
                <Form
                label="Exp. Date"
                type="text"
                name="exMonth"
                placeholder="MM"
                value={card.exMonth}
                />
                <Form
                label="(MM/YY)"
                type="text"
                name="exYear"
                placeholder="YY"
                value={card.exYear}
                />
                <Form
                label="CVC"
                type="text"
                name="cvc"
                placeholder="e.g. 123"
                value={card.cvc}
                />
            </div>
            <button className='submit'>Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
