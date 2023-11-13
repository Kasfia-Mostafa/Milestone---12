import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import  './Featured.css'


const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center py-20 px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug 20,2029</p>
          <p className="upperCase">Where I can get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            obcaecati similique neque quod voluptates molestiae, soluta beatae
            corporis dolores expedita assumenda ratione debitis repellat labore
            ullam harum nobis totam accusamus perferendis nulla quibusdam,
            architecto libero cum. Tenetur rerum alias doloremque consectetur
            maxime itaque non sit, dolorum dolor quaerat labore blanditiis.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
