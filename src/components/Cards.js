import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from 'react-redux';
import {ADD} from "../redux/actions/action"

const Cards = () => {

  const [data, setData] = useState(cardsdata);
  // console.log(data)

  const dispatch = useDispatch();

  const send = (e)=>{
    // console.log(e)
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>  Add to Cart Projects</h2>
      <div className='row d-flex align-items-center justify-content-center'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem', border:"none" }} className='mt-4 mx-2 card_style'>
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-3'/>
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                     Price: ₹{element.price}
                    </Card.Text>
                    <div className='button_div d-flex align-items-center justify-content-center'>
                    <Button variant="primary" className='col-lg-12' onClick={()=> send(element)}>Add to cart</Button>
                    </div>
                    
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>

  )
}

export default Cards