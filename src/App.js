import { useState, React } from 'react';
import './App.css';
import Form from './components/Form/Form'

function App() {
  const [card, setCard] = useState({
    name: "",
    cardNumber: '0000 0000 0000 0000',
    exMonth: "",
    exYear: "",
    cvc: ""
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-xsm-12 col-sm-6 left'>
          <h1 className='text-white'>hello</h1>
        </div>
        <div className='col-xsm-12 col-sm-6 right'>
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
            value={card.name}
            />
            <div className='card-bottom'>
                <Form
                label="Exp. Date"
                type="text"
                name="exMonth"
                placeholder="MM"
                value={card.name}
                />
                <Form
                label="(MM/YY)"
                type="text"
                name="exYear"
                placeholder="YY"
                value={card.name}
                />
                <Form
                label="CVC"
                type="text"
                name="cvc"
                placeholder="e.g. 123"
                value={card.name}
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
