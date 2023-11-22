import React from 'react'
import img from '../assets/img1.jpg';
import apple from '../assets/AppleW.png';
import google from '../assets/Google.png'
import windows from '../assets/Windows.png'


export default function Form(){
    return(
        <section>
            <div className="register">

                <div className="col-1">
                    <h2>Sign up or login with</h2>

                    <div className='btn-div'>
                    <button className='apple-btn'> <img className='appleimg' src={apple} alt='applelogo'/> 
                    <span className='AppleN'>Apple</span>
                    </button>

                    <button className='google-btn'> <img className='googleimg' src={google} alt='googlelogo'/>
                    <span className='GoogleN'>Gmail</span>
                    </button>

                    <button className='windows-btn'> <img className='windowsimg' src={windows} alt='windowslogo'/>
                    <span className='WindowsN'>Microsoft</span>
                    </button>

                    </div>

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