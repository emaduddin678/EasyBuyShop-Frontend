import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.js";
import {
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
  selectStatus,
} from "../productSlice.js";
import axios from "axios";

const aproducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Classic Hoodie",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Classic Hoodie in navy.",
    price: "$60",
    color: "Navy",
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Pair of slim fit jeans in indigo wash.",
    price: "$75",
    color: "Indigo",
  },
  {
    id: 4,
    name: "Running Shoes",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Black and white running shoes.",
    price: "$90",
    color: "Black/White",
  },
  {
    id: 5,
    name: "Canvas Backpack",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-related-product-01.jpg",
    imageAlt: "Durable canvas backpack in olive.",
    price: "$48",
    color: "Olive",
  },
  {
    id: 6,
    name: "Cotton Cap",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-related-product-02.jpg",
    imageAlt: "Adjustable cotton cap in khaki.",
    price: "$22",
    color: "Khaki",
  },
  {
    id: 7,
    name: "Leather Belt",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-related-product-03.jpg",
    imageAlt: "Brown leather belt with silver buckle.",
    price: "$30",
    color: "Brown",
  },
  {
    id: 8,
    name: "Polo Shirt",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-related-product-04.jpg",
    imageAlt: "Classic polo shirt in light blue.",
    price: "$40",
    color: "Light Blue",
  },
];

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router";
import RatingStars from "../../../components/rating/RatingStars.jsx";
import RatingField from "../../../components/rating/RatingStars.jsx";
import TakaSign from "../../../components/icons/TakaSign.jsx";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <section className="w-full lg:col-span-3">
                {" "}
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-2 lg:px-8">
                  <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      Laptop Collection
                    </h2>

                    <p className="mt-1 max-w-2xl text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Itaque praesentium cumque iure dicta incidunt est ipsam,
                      officia dolor fugit natus?
                    </p>
                  </header>

                  {/* product list start  */}
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                      <Link
                        // to={`/product-detail/${product.id}`}
                        key={product.id}
                        className="h-full bg-indigo-100"
                      >
                        <div className="group relative flex flex-col h-full">
                          <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                            <img
                              alt={product.title}
                              src={product.thumbnail}
                              className="aspect-square rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-auto h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                          <div className="mt-2 px-1 flex justify-between flex-1">
                            <div className="flex flex-col">
                              <h3 className="text-sm text-gray-700">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                {product.title}
                              </h3>
                              <div className="flex-1 flex items-end gap-1 mt-1 text-sm font-medium text-gray-500">
                                {product.rating}
                                <RatingField
                                  currentRating={2.6}
                                  className="text-yellow-400 w-5 h-5"
                                  icon={<StarIcon />}
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                <TakaSign />
                                {product.price}
                              </p>
                              <p className="text-sm font-medium text-gray-900">
                                <TakaSign />
                                {(
                                  product.price *
                                  (1 - product.discountPercentage / 100)
                                ).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* product list end  */}
                  {/* pagination start  */}
                  <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Next
                      </a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to{" "}
                          <span className="font-medium">10</span> of{" "}
                          <span className="font-medium">97</span> results
                        </p>
                      </div>
                      <div>
                        <nav
                          aria-label="Pagination"
                          className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                        >
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                              aria-hidden="true"
                              className="size-5"
                            />
                          </a>
                          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                          <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            1
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            2
                          </a>
                          <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                          >
                            3
                          </a>
                          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                            ...
                          </span>
                          <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                          >
                            8
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            9
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            10
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                              aria-hidden="true"
                              className="size-5"
                            />
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* pagination end  */}
                </div>
                {isModalOpen && (
                  <div
                    className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modalTitle"
                  >
                    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                      <div className="flex items-start justify-between">
                        <h2
                          id="modalTitle"
                          className="text-xl font-bold text-gray-900 sm:text-2xl"
                        >
                          Modal Title
                        </h2>

                        <button
                          type="button"
                          onClick={() => setIsModalOpen(!true)}
                          className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
                          aria-label="Close"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-4">
                        <div className="relative">
                          <label
                            htmlFor="SortBy"
                            className="block text-base font-bold text-gray-700"
                          >
                            Sort By
                          </label>

                          <select
                            id="SortBy"
                            className="mt-1 w-full appearance-none rounded-sm border border-gray-300 text-sm pl-4 pr-8 py-2 text-gray-900 transition focusStyle"
                          >
                            <option>Sort By</option>
                            <option value="Title, DESC">Title, DESC</option>
                            <option value="Title, ASC">Title, ASC</option>
                            <option value="Price, DESC">Price, DESC</option>
                            <option value="Price, ASC">Price, ASC</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 top-[43%] a-translate-y-1/2 right-2 flex items-center text-gray-600">
                            ▼
                          </div>
                        </div>

                        <div>
                          <p className="block  text-base font-bold text-gray-700">
                            Filters
                          </p>

                          <div className="mt-1 space-y-2">
                            <details className="group overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden focusStyle">
                              <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                <span className="text-sm font-medium">
                                  {" "}
                                  Availability{" "}
                                </span>

                                <span className="transition group-open:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </span>
                              </summary>

                              <div className="border-t border-gray-200 bg-white">
                                <header className="flex items-center justify-between p-4">
                                  <span className="text-sm text-gray-700">
                                    {" "}
                                    0 Selected{" "}
                                  </span>

                                  <button
                                    type="button"
                                    className="text-sm text-gray-900 underline underline-offset-4"
                                  >
                                    Reset
                                  </button>
                                </header>

                                <ul className="space-y-1 border-t border-gray-200 p-4">
                                  <li>
                                    <label
                                      htmlFor="FilterInStock"
                                      className="inline-flex items-center gap-2"
                                    >
                                      <input
                                        type="checkbox"
                                        id="FilterInStock"
                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                      />

                                      <span className="text-sm font-medium text-gray-700">
                                        {" "}
                                        In Stock (5+){" "}
                                      </span>
                                    </label>
                                  </li>

                                  <li>
                                    <label
                                      htmlFor="FilterPreOrder"
                                      className="inline-flex items-center gap-2"
                                    >
                                      <input
                                        type="checkbox"
                                        id="FilterPreOrder"
                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                      />

                                      <span className="text-sm font-medium text-gray-700">
                                        {" "}
                                        Pre Order (3+){" "}
                                      </span>
                                    </label>
                                  </li>

                                  <li>
                                    <label
                                      htmlFor="FilterOutOfStock"
                                      className="inline-flex items-center gap-2"
                                    >
                                      <input
                                        type="checkbox"
                                        id="FilterOutOfStock"
                                        className="size-5 rounded-sm border-gray-300 shadow-sm"
                                      />

                                      <span className="text-sm font-medium text-gray-700">
                                        {" "}
                                        Out of Stock (10+){" "}
                                      </span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </details>

                            <details className="group overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden focusStyle">
                              <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                <span className="text-sm font-medium">
                                  {" "}
                                  Price{" "}
                                </span>

                                <span className="transition group-open:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </span>
                              </summary>

                              <div className="border-t border-gray-200 bg-white">
                                <header className="flex items-center justify-between p-4">
                                  <span className="text-sm text-gray-700">
                                    {" "}
                                    The highest price is $600{" "}
                                  </span>

                                  <button
                                    type="button"
                                    className="text-sm text-gray-900 underline underline-offset-4"
                                  >
                                    Reset
                                  </button>
                                </header>

                                <div className="border-t border-gray-200 p-4">
                                  <div className="flex justify-between gap-4">
                                    <label
                                      htmlFor="FilterPriceFrom"
                                      className="flex items-center gap-2"
                                    >
                                      <span className="text-sm text-gray-600">
                                        $
                                      </span>

                                      <input
                                        type="number"
                                        id="FilterPriceFrom"
                                        placeholder="From"
                                        className="w-full rounded-sm px-0.5 border-gray-200 shadow-xs sm:text-sm focusStyle"
                                      />
                                    </label>

                                    <label
                                      htmlFor="FilterPriceTo"
                                      className="flex items-center gap-2"
                                    >
                                      <span className="text-sm text-gray-600">
                                        $
                                      </span>

                                      <input
                                        type="number"
                                        id="FilterPriceTo"
                                        placeholder="To"
                                        className="w-full rounded-sm px-0.5 border-gray-200 shadow-xs sm:text-sm focusStyle"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>

                      <footer className="mt-6 flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(!true)}
                          className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                        >
                          Cancel
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsModalOpen(!true)}
                          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                          Done
                        </button>
                      </footer>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
