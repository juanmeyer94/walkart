import React, { useState } from "react";
import NavDash from "./NavDash";
import NavBar from "../NavBar/navbar";

const PostDash = ({ addNewModel }) => {
  const initialFormData = {
    name: "",
    image: "",
    description: "",
    category: "",
    price: "",
    state: "Pendiente",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewModel(formData);
    setFormData(initialFormData);
  };

  return (
    <div>
      <NavDash />
    <div className="p-4 bg-blue-200 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium">
              URL de la Imagen
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-[150px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div>
  <label htmlFor="category" className="block text-sm font-medium">
    Categoría
  </label>
  <select
    id="category"
    name="category"
    value={formData.category}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">--Selecciona una categoría--</option>
    <option value="Running">Running</option>
    <option value="Formal">Formal</option>
    <option value="Casual">Casual</option>
    <option value="Outdoor">Outdoor</option>
  </select>
</div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Agregar Zapatilla
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default PostDash;
