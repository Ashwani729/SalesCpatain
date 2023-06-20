import React from 'react'



const Business = () => {
    const data = [
        {
            heading: 'Attract',
            para: 'Attract more customers',
            products: [
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg',
                    link: '/reviews',
                    name: 'Reviews',
                    description: 'Improve ratings & get chosen more.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg',
                    link: '/listings',
                    name: 'Listings',
                    description: 'Improve listings & get seen more.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg',
                    link: '/marketing',
                    name: 'Marketing',
                    description: 'Reach out to customers on text & email.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg',
                    link: '/smartpages',
                    name: 'SmartPages',
                    description: 'Engage more with our AI SEO.',
                },
            ],
        },
        {
            heading: 'Engage',
            para: 'Convert leads to customers',
            products: [
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg',
                    link: '/webchat',
                    name: 'WebChat',
                    description: 'Convert leads on website chat with our AI.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg',
                    link: '/messaging',
                    name: 'Messaging',
                    description: 'Engage with customers across all channels.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg',
                    link: '/referral',
                    name: 'Referrals',
                    description: 'Let your customers refer you.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg',
                    link: '/payments',
                    name: 'Payments',
                    description: 'Modernize your integrated payment tools',
                },
            ],
        },
        {
            heading: 'Elevate',
            para: 'Provide a delightful experience',
            products: [
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg',
                    link: '#',
                    name: 'Captain AI',
                    description: 'Your AI assistant to drive growth',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg',
                    link: '/feedback-surveys',
                    name: 'Feedback & survey',
                    description: 'Listen to your customers & delight them.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg',
                    link: '/insights-competitors',
                    name: 'Competition & Insights',
                    description: 'Learn about your competitors & insights.',
                },
                {
                    imageSrc: 'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg',
                    link: '/customer-manager',
                    name: 'Customer Manager',
                    description: 'Manage all your customer data & activity.',
                },
            ],
        },
    ];

    return (
        <div className="container-27 w-container">
            <h1 className="heading-49">Tools to take your business to the next level</h1>
            <div className="w-layout-grid grid-15">
                {data.map((item, index) => (
                    <div key={index} id={`w-node-${index}`} className="table">
                        <h3 className="heading-14 product-heading">{item.heading}</h3>
                        <p className="paragraph-14 product-para">{item.para}</p>
                        <div className="content-div">
                            {item.products.map((product, i) => (
                                <div key={i} className="grid-content table-grid">
                                    <div className="images">
                                        <img
                                            src={product.imageSrc}
                                            loading="lazy"
                                            width="45"
                                            alt=""
                                            className="image-19"
                                        />
                                    </div>
                                    <div className="grid-link table-link">
                                        <a href={product.link} className="secondary-links heading">
                                            {product.name}
                                        </a>
                                        <div className="para-text para">{product.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Business;

