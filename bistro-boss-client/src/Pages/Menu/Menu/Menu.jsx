import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
 
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImage} title="Our Menu"></Cover>

      <SectionTitle
        heading="Don't Miss"
        subHeading="Today's offer"
      >
      </SectionTitle>
     <MenuCategory items={offered}></MenuCategory>
     <MenuCategory items={desserts} title='Desserts' img={dessertImage}></MenuCategory>
     <MenuCategory items={pizza} title='Pizza' img={pizzaImage}></MenuCategory>
     <MenuCategory items={salad} title='Salad' img={saladImage}></MenuCategory>
     <MenuCategory items={salad} title='Soup' img={soupImage}></MenuCategory>
    </div>
  );
};

export default Menu;
