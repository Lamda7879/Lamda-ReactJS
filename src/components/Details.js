import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto text-center text-capitalize text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                    <p>{info}</p>
                                    <h4><span className="text-italic">Rp.</span>{price}</h4>
                                    <div>
                                        <Link to="/product">
                                            <ButtonContainer className="mr-2">Kembali Ke Paket Kursus</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled = {inCart?true:false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }} 
                                        >
                                            {inCart?"inCart":"Tambahkan"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;