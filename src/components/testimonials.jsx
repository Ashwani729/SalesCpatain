import React from 'react';

const data = [
    {
        name: 'Simon Page',
        role: 'Owner, Mamagato Restaurant',
        quote: '“In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn"',
        rating: '40%',
        img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp",
        products: ['Messaging', 'Webchat', 'Reviews', 'Listings', 'Referrals'],
    },
    {
        name: 'Daniel Wilson',
        role: 'Marketing head, The Air Conditioning Company',
        quote: '“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”',
        rating: '200%',
        img: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp',
        products: ['Reviews', 'Listings', 'Messaging', 'Webchat', 'Customer Manager'],
    },
    {
        name: 'Debbie Rose',
        role: 'Owner, Jiva luxury Spa',
        img: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp',
        quote: '“Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks”',
        rating: '$150k',
        products: ['Marketing', 'Webchat', 'Review', 'Messaging', 'Competition & Insights'],
    },
];

const Testinomials = (props) => {
    const { name, image, designation, testimonial, metric, metricDesc, productsUsed } = props;
    return (
        <div className="section-2 wf-section">
            <div className="container-21 w-container">
                <div className="w-layout-grid grid-4">
                    {data.map((item) => <div key={item.name} id="w-node-_52833f80-f415-95d7-95df-c430deb6865a-8dc347e6" className="test-card">
                        <div className="content">
                            <div className="columns-9 w-row">
                                <div className="column-13 w-clearfix w-col w-col-4">
                                    <img src={item.img} loading="lazy" width="76" alt="" className="image-27" />
                                </div>
                                <div className="column-14 w-col w-col-8">
                                    <h4 className="tes-name">{item.name}</h4>
                                    <p className="paragraph-10">{item.role}</p>
                                </div>
                            </div>
                            <p className="paragraph-11">{item.quote}</p>
                            <h1 className="rating">{item.rating}</h1>
                            <p className="paragraph-12">Average net profit <br />increase</p>
                            <div className="products">
                                <h5 className="products">Products used:</h5>
                                {item.products.map((product) => (
                                    <a key={product} href="#" className="product-used">{product}</a>
                                ))}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
};

export default Testinomials