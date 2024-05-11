import { TypeAnimation } from "react-type-animation";



const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
       <div className="text-white font-bold text-3xl">
       <TypeAnimation 
            sequence={[
              'Find',
              1000,
              'Read',
              1000,
              'Write',
              1000,
            ]}
            wrapper="p"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
            className="text-light fs-3 fw-bold"
            cursor={false}
          />
       </div>
          <br />
          
        </div>
      </div>
    </div>
  )
}

export default Slide;
