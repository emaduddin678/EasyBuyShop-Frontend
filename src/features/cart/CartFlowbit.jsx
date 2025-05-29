import React from "react";
import { Link } from "react-router";
import DeleteButton from "../../components/buttons/DeleteButton";
import FavoriteButton from "../../components/buttons/FavoriteButton";

const CartFlowbit = (props) => {
  const { page } = props;
  console.log(page);
  return (
    <section className="py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-2xl bg-white px-4 2xl:px-6 py-2 md:py-4">
        <h2 className=" text-xl font-bold text-gray-900 sm:text-3xl">
          Shopping Cart
        </h2>

        <div
          className={`mt-2 sm:mt-4 md:gap-6 lg:flex lg:items-start xl:gap-8 ${
            page === "checkoutPage" ? "flex-col" : "flex-row"
          }`}
        >
          {` ${page === "checkoutPage" ? "checkout" : "CART "}`}
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div class="relative overflow-x-auto shadow-md sm:rounded-xs">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="hidden md:table-header-group text-xs text-gray-700 uppercase bg-gray-100 ">
                  <tr>
                    <th
                      scope="col"
                      class={` text-center ${
                        page === "checkoutPage"
                          ? "px-5 py-3 text-center"
                          : "xl:px-16 py-3"
                      }`}
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      class={` text-center ${
                        page === "checkoutPage"
                          ? "px-5 py-3 text-center"
                          : "xl:px-16 py-3"
                      }`}
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      class={` text-center ${
                        page === "checkoutPage"
                          ? "px-5 py-3 text-center"
                          : "xl:px-16 py-3"
                      }`}
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      class={` text-center ${
                        page === "checkoutPage"
                          ? "px-5 py-3 text-center"
                          : "xl:px-16 py-3"
                      }`}
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class={` text-center ${
                        page === "checkoutPage" ? "px-5 py-3" : "xl:px-16 py-3"
                      }`}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr class="bg-white border-b border-gray-200 hover:bg-gray-50">
                    <td
                      class={`font-semibold text-gray-900 text-center  ${
                        page === "checkoutPage" ? "p-2" : "p-4 "
                      }`}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        class={` ${
                          page === "checkoutPage"
                            ? "w-16 max-w-full max-h-full"
                            : "w-16 md:w-32 max-w-full max-h-full"
                        }`}
                        alt="Apple Watch"
                      />
                    </td>
                    <td
                      class={`font-semibold text-gray-900 text-center ${
                        page === "checkoutPage" ? "" : "xl:px-6 py-4"
                      }`}
                    >
                      Apple Watch
                    </td>
                    <td
                      class={` font-semibold text-gray-900 text-center ${
                        page === "checkoutPage" ? "" : "xl:px-6 py-4"
                      }`}
                    >
                      <div class="flex justify-center items-center">
                        <button
                          class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div className="flex justify-center">
                          <input
                            type="number"
                            id="first_product"
                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                            placeholder="1"
                            required
                          />
                        </div>
                        <button
                          class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td
                      class={` font-semibold text-gray-900 text-center ${
                        page === "checkoutPage" ? "" : "xl:px-6 py-4"
                      }`}
                    >
                      $599
                    </td>
                    <td
                      class={` font-semibold text-gray-900 text-center ${
                        page === "checkoutPage" ? "" : "xl:px-6 py-4"
                      }`}
                    >
                      <div class="font-medium flex items-center justify-center">
                        <FavoriteButton />
                        <DeleteButton />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-xla space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6">
              <p className="text-xl font-semibold text-gray-900 ">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      $7,592.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$299.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      $99
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 ">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                  <dt className="text-base font-bold text-gray-900 ">Total</dt>
                  <dd className="text-base font-bold text-gray-900 ">
                    $8,191.00
                  </dd>
                </dl>
              </div>

              <Link
                to="/checkout"
                className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 "> or </span>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline "
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hidden sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartFlowbit;
