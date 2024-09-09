import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  isLoginVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showLogin: (state) => {
      state.isLoginVisible = true;
    },
    hideLogin: (state) => {
      state.isLoginVisible = false;
    },
  },
});

const initialProductState = {
  products: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 120.99,
      description: "Your perfect pack for everyday use...",
      category: "Men's Clothing",
      image:
        "https://img.freepik.com/free-photo/image-blue-school-bag-white-background_125540-3456.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 80.5,
      description: "Slim-fitting style, comfortable wear...",
      category: "Men's Clothing",
      image:
        "https://i.pinimg.com/originals/00/80/fd/0080fd5e3d8dd3b9bdf5d96f890a9f65.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 150,
      description: "Great outerwear jackets for Spring...",
      category: "Men's Clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "Satisfaction guaranteed, beautiful design...",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 5,
      title: "White Gold Plated Princess",
      price: 999,
      description: "Classic created wedding engagement ring...",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
  ],
  cart: [],
  selectedCategory: "All",
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { showLogin, hideLogin } = uiSlice.actions;
export const { filterByCategory, addToCart } = productSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    products: productSlice.reducer,
  },
});
