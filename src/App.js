import { useState, React } from 'react';
import './App.css';
import Form from './components/Form/Form'
import Cardfront from './images/bg-card-front.png'
import Cardback from './images/bg-card-back.png'

function App() {
  const cardIntials = {
    name: "Your name",
    cardNumber: "0000 0000 0000 0000",
    exMonth: "01",
    exYear: "01",
    cvc: "000"
  }
  const [card, setCard] = useState(cardIntials)
  const [showCard, setShowCard] = useState(cardIntials)

  function handleChange(e) {
    const {name, value} = e.target;

    setCard({
      ...card,
      [name]: value
    })

  }

  function handleSubmit(e) {
    setShowCard({
      ...card
    })

    setCard(cardIntials)
    e.preventDefault()
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-sm-12 col-md-6 left'>
          <div className='row card-front'>
              <img src={Cardfront} width="100%" />
              <div className='on-image1'>
                <p>{showCard.cardNumber}</p>
              </div>
              <div className='on-image2'>
                <p>{showCard.name}</p>
                {showCard.exMonth && <p>{showCard.exMonth}/{showCard.exYear}</p>}
              </div>

          </div>
          <div className='row card-back'>
              <img src={Cardback} />
               
          </div>
        </div>
        <div className='col-sm-12 col-md-6 right'>
          <form className='card-form'
          onSubmit={handleSubmit}
          >
            <Form
            label="Cardholder Name"
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
            value={card.name}
            handleChange={handleChange}
            />
            <Form
            label="Card Number"
            type="text"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={card.cardNumber}
            handleChange={handleChange}
            />
            <div className='card-bottom'>
                <Form
                label="Exp. Date"
                type="text"
                name="exMonth"
                placeholder="MM"
                value={card.exMonth}
                handleChange={handleChange}
                />
                <Form
                label="(MM/YY)"
                type="text"
                name="exYear"
                placeholder="YY"
                value={card.exYear}
                handleChange={handleChange}
                />
                <Form
                label="CVC"
                type="text"
                name="cvc"
                placeholder="e.g. 123"
                value={card.cvc}
                handleChange={handleChange}
                />
            </div>
            <button className='submit'
            onClick={handleSubmit}
            >Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
