import { useState, useEffect } from "react";
import axios from "axios";

// Define the base URL for the API
const BASE_URL = "https://fakestoreapi.com/products";

export const useProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new product
  const addProduct = async (product) => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL, product);
      setData((prevData) => [...prevData, response.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Update a product
  const updateProduct = async (id, product) => {
    setLoading(true);
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, product);
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? response.data : item))
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    data,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};
