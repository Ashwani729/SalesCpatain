import React from 'react'

const Landing = () => {
    return (
        <div class="container-36 mobile w-container">
            <h1 class="heading-22">Best way to grow your local business</h1>
            <div class="text-block-23">
                Artificial Intelligence powered easy-to-use tools to get more
                customers &amp; give them a better experience
            </div>
            <div class="form-block w-form">
                <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    redirect="https://salescaptain.com/booking"
                    data-redirect="https://salescaptain.com/booking"
                    method="get"
                    class="form hero"
                    aria-label="Email Form"
                    data-hs-cf-bound="true"
                >
                    <input
                        type="email"
                        class="text-field w-input"
                        maxlength="256"
                        name="Email-4"
                        data-name="Email 4"
                        placeholder="ENTER YOUR EMAIL"
                        id="Email-4"
                        required=""
                    />
                    <input
                        type="submit"
                        value="GET DEMO"
                        data-wait=""
                        class="submit saas w-button   bg-blue-500"
                    />
                </form>
                <div
                    class="success-message-2 w-form-done"
                    tabindex="-1"
                    role="region"
                    aria-label="Email Form success"
                >
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                    class="w-form-fail"
                    tabindex="-1"
                    role="region"
                    aria-label="Email Form failure"
                >
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
            </div>
            <div>
                <img className='image-57' src='	https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-2000.webp'/>
            </div>
        </div>
    )
}

export default Landing