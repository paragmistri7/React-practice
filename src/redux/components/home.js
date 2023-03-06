import React from 'react';
import '../styleredux.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
function Homer(props) {

    console.log("props home data" , props)

    return (
        <>
            <h1>Home Component</h1>
            <div className='container mt-5 bg-warning shadow-1-strong p-4'>
                <div className='row d-flex justify-content-between'>

            <MDBCard className='card01'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage className='pt-3' src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>nature</MDBCardTitle>
                    <MDBCardText>
                      price : 15000 rupees
                    </MDBCardText>
                            <MDBBtn
                                onClick={() => 
                                    props.addtocarthandler({title : "nature1" , price : 151000} )
                                }>
                                Add to cart</MDBBtn>
                </MDBCardBody>
            </MDBCard>
                    <div className='cart p-4 bg-success shadow-1-strong'>
                        <img src={process.env.PUBLIC_URL + '/logo192.png'}></img>
            </div>
                </div>
        </div>

        </>
    );
}

export default Homer;