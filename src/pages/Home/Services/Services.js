import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Teeth can be filled with gold, silver amalgam (mercury mixed with silver, tin, zinc and copper), porcelain, glass ionomer, or tooth-colored plastic materials called resin composite fillings',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'dentist can whiten teeth as long as theyre registered with the General Dental Council. Registered dental therapists and dental hygienists can also carry out teeth whitening on the prescription of a dentist.',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;