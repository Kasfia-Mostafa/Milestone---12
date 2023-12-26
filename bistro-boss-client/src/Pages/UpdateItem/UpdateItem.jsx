import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {item, category,recipe, price,name,_id} = useLoaderData();


  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseInt(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuResponse = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuResponse.data);
      if (menuResponse.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("With img url", res.data);
  };
 
  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="Refresh Info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
              required
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>

              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>
            <textarea
             defaultValue={recipe}
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className=" w-full my-5">
            <input
           
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Update menu item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
