import React from 'react'

const Demo = () => {
  return (
    <div  className='bg-black '>
    <div className='container-25 w-container'>
      <h1 className='heading-19'> Ready to Grow?</h1>
      <p className='paragraph-19'>
        See why 100,000+ business trust us. Book a personalized demo to see
        <br></br>
        how salesCaptain provides you the right tools to grow your business
      </p>
      <div className='form-block w-form'>
      <form className='form' id='email-form'>
      <input type="email" class="text-field w-input" maxlength="256" name="Email-4" data-name="Email 4" placeholder="ENTER YOUR EMAIL" id="Email-4" required=""/>
      <input type="submit" value="GET DEMO" data-wait="" class=" bg-blue-500 submit saas w-button"></input>
      </form>
      <div className='div-block-184'>
        <div className='div-block-182'>
          <img   className='' src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp'/>
          <div className='text-block-8'>500+ reviews</div>
        </div>
      </div>
      <div className='div-block-183'>
        <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp' className='w-20 image-178'/>
        <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp' className=' w-36 image-178'/>
        <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp' className=' w-52 image-178'/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Demo
