import profileImage from '../assets/img/profile_head.png'
const Profile = () => {
  return (
    <section className="bg-customBlue customShadow__two flex w-full space-x-6 px-[32px] py-[16px]">
      <div>
        <img className='w-[50px]' src={profileImage} alt="John" />
      </div>
      <div>
          <h1 className='text-[1gpx] font-semibold text-white'>Hello, John</h1>
          <p className='text-[25px] font-Roboto italic font-light text-white opacity-60 w-[220px]'>What are your plans for today</p>
        </div>
    </section>
  )
}

export default Profile
