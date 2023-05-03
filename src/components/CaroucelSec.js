 
import './CaroucelSec.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                < div >
                    <img src="https://color-hex.org/colors/28377c.png"  />
                     <div><img className='caroselImg' src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> 
                     <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore eos ex architecto temporibus voluptatibus autem tenetur quae aspernatur amet. Facere laborum iste asperiores error temporibus sit at. Culpa, sapiente?</p> </div>
                </div>
                < div >
                    <img src="https://color-hex.org/colors/28377c.png"  />
                     <div><img className='caroselImg' src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> 
                     <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore eos ex architecto temporibus voluptatibus autem tenetur quae aspernatur amet. Facere laborum iste asperiores error temporibus sit at. Culpa, sapiente?</p> </div>
                </div>
                < div >
                    <img src="https://color-hex.org/colors/28377c.png"  />
                     <div><img className='caroselImg' src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> 
                     <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore eos ex architecto temporibus voluptatibus autem tenetur quae aspernatur amet. Facere laborum iste asperiores error temporibus sit at. Culpa, sapiente?</p> </div>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel