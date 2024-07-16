import robotImg from '../assets/images/robot-500.png'

export const ServerError500 = () => {
  return (
    <>
      <div className='flex flex-grow font-oswald my-8 mx-4 w-full h-full justify-between '>
        <div className=' flex flex-col justify-center items-center mx-8 '>
          <h1 className='text-[135px] text-blue-800'>Error 500</h1>
          <h2 className='text-5xl text-gray-500'>Internal Server Error</h2>
          <p className='text-3xl text-gray-500'>El servidor se encuentra caído, por favor inténtelo más tarde</p>
        </div>
        <div className= 'mx-12 my-16'>
          <img src={robotImg} alt="robotImg" />
        </div>
      </div>
    </>
  )
}
