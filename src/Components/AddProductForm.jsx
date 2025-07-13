import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../app/features/products/productSlice";

const AddProductForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-base-200 p-4 rounded shadow"
    >
      <h2 className="text-xl font-semibold">Add New Product</h2>

      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Product Name"
        className="input input-bordered w-full"
      />
      {errors.name && <p className="text-red-500">Name is required</p>}

      <input
        type="text"
        {...register("description", { required: true })}
        placeholder="Short Description"
        className="input input-bordered w-full"
      />
      {errors.description && (
        <p className="text-red-500">Description is required</p>
      )}

      <div className="form-control w-full">
        <select
          defaultValue=""
          {...register("category", { required: true })}
          className="select select-bordered w-full"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="shoes">Shoes</option>
          <option value="electronics">Electronics</option>
          <option value="camera">Camera</option>
        </select>
        {errors.category && (
          <p className="text-red-500">Category is required</p>
        )}
      </div>

      <input
        type="number"
        step="0.01"
        {...register("price", { required: true, min: 0 })}
        placeholder="Price"
        className="input input-bordered w-full"
      />
      {errors.price && <p className="text-red-500">Price is required</p>}

      <input
        type="url"
        {...register("image", { required: true })}
        placeholder="Image URL"
        className="input input-bordered w-full"
      />
      {errors.image && <p className="text-red-500">Image URL is required</p>}

      <input
        type="date"
        {...register("releaseDate", { required: true })}
        className="input input-bordered w-full"
      />
      {errors.releaseDate && (
        <p className="text-red-500">Release Date is required</p>
      )}

      <button type="submit" className="btn btn-primary w-full">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
