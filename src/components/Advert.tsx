import trophy from "../assets/img/trophy.png";

const Advert = () => {
  return (
    <section className="relative bg-customGreen py-6 px-[32px]">
      <div className="flex space-x-5 items-center">
        <div>
          <img src={trophy} alt="trophy_icon" />
        </div>
        <p className="text-customBlueTwo text-[18px]">Go Pro Upgrade Now</p>
      </div>
      <div className="bg-customBlueTwo text-customYellow absolute top-0 right-5 p-4">
        $1
      </div>
    </section>
  );
};

export default Advert;
