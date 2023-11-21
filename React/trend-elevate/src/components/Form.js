import React from 'react'
import img from '../assets/img1.jpg';
import apple from '../assets/apple.jpg';

export default function Form(){
    return(
        <section>
            <div className="register">

                <div className="col-1">
                    <h2>Sign up or login with</h2>

                    <div className='apple-div'> <img src={apple} alt='applelogo'/> </div>
                    <div className='box'>  <span>Sign in to your account</span></div>

                    <form id='form' className='flex flex-col'>
                        <input type='text' placeholder='Alex Sterling'></input>

                        <input type='text' placeholder='name@host.com'></input>

                        <input type='text' placeholder='Password'></input>

                        <button className='btn'>Sign up</button>
                    </form>
                </div>

                <div className="col-2">
                    <img src={img} alt='background'/>
                </div>
            </div>
        </section>
    )
}