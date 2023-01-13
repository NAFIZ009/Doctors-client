import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div className='lg:mr-12 lg:text-left text-center'>
                    <h1 className="text-5xl font-bold">Doctors For All</h1>
                    <p className="py-6">If You Want To Take Releaf From The Herrisment Of getting Appointment Of Any Doctor?Then Get Start With Us.  </p>
                    <PrimaryButton path='/login'>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;