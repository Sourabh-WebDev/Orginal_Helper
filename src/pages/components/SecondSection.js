import React from 'react';
import Card from 'react-bootstrap/Card';
import WomenSalon from '../../assets/img/BeautySalon.png';
import LeftSideShowGirl from '../../assets/img/leftsideGirl.png'
import { Col, Row } from 'reactstrap';

const SecondSection = () => {
    const PrimaryServices = [
        {
            id: 1,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 2,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 3,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 4,
            image: WomenSalon,
            title: 'Women Salon'
        },
        {
            id: 5,
            image: WomenSalon,
            title: 'Women Salon'
        }
    ];

    return (
        <div className='bgColour'>
            <div className="text-center"><h1 style={{ color: '#142572' }} >Our Prime Services</h1></div>

            <div className="bgSecondSectionImg">
                {PrimaryServices.map((item, index) => (
                    <Card className=' cardHover' key={item.id}>
                        <Card.Img className='img-fluid' src={item.image} />
                        <Card.Text>
                            {item.title}
                        </Card.Text>
                    </Card>
                ))}
                <img className='img-fluid' src={LeftSideShowGirl} alt="ADIMG" />
            </div>
        </div>
    );
};

export default SecondSection;
