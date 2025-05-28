import React from "react";
import { Link } from "react-router";
import DeleteButton from "../../components/buttons/DeleteButton";
import FavoriteButton from "../../components/buttons/FavoriteButton";

const CartFlowbit = () => {
  return (
    <section class="py-8 antialiased md:py-16">
      <div class="mx-auto max-w-screen-xl bg-white px-4 2xl:px-6 py-2 md:py-4">
        <h2 class=" text-xl font-bold text-gray-900 sm:text-3xl">
          Shopping Cart
        </h2>

        <div class="mt-2 sm:mt-4 md:gap-6 lg:flexa lg:items-starta xl:gap-8">
          <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div class="space-y-4">
              {/* single product start */}
              <div class="border-b border-gray-200 bg-white px-4 py-2 md:px-6 md:py-3">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-4 md:space-y-0">
                  {/* product image start  */}
                  <div class="flex-none md:order-1">
                    <img
                      class="w-20 mx-auto"
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt="imac image"
                    />
                  </div>
                  {/* product image end  */}

                  {/* quantity and price start  */}
                  <label for="counter-input" class="sr-only">
                    Choose quantity:
                  </label>
                  <div class="flex-none space-y-3 md:order-3 md:justify-end">
                    <div class="flex items-center gap-4 gap-y-1 justify-center">
                      <FavoriteButton />
                      <DeleteButton />
                    </div>
                    <div className=" flex flex-col items-center gap-y-1 justify-between">
                      <div class="flex order-6 gap-x-2 items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          class="cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100   "
                        >
                          <svg
                            class="h-2.5 w-2.5 text-gray-900 "
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
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter
                          class="w-10 shrink-0 border-1 rounded-xs bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                          placeholder=""
                          value="2"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          class="cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100   "
                        >
                          <svg
                            class="h-2.5 w-2.5 text-gray-900 "
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
                      <div class="text-center md:order-4 md:w-32">
                        <p class="text-base font-bold text-gray-900 ">$1,499</p>
                      </div>
                    </div>
                  </div>
                  {/* quantity and price end  */}
                  {/* product description, add to favorites and remove buttons start */}
                  <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-lg">
                    <p class="text-base font-medium text-gray-900 hover:underline ">
                      HP EliteBook 840 G9 Notebook PC
                    </p>
                  </div>
                  {/* product description, add to favorites and remove buttons start */}
                </div>
              </div>
              {/* single product end */}
              {/* single product start */}
              <div class="border-b border-gray-200 bg-white px-4 py-2 md:px-6 md:py-3">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-4 md:space-y-0">
                  {/* product image start  */}
                  <div class="flex-none md:order-1">
                    <img
                      class="w-20 mx-auto"
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt="imac image"
                    />
                  </div>
                  {/* product image end  */}

                  {/* quantity and price start  */}
                  <label for="counter-input" class="sr-only">
                    Choose quantity:
                  </label>
                  <div class="flex-none space-y-3 md:order-3 md:justify-end">
                    <div class="flex items-center gap-4 gap-y-1 justify-center">
                      <FavoriteButton />
                      <DeleteButton />
                    </div>
                    <div className=" flex flex-col items-center gap-y-1 justify-between">
                      <div class="flex order-6 gap-x-2 items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          class="cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100   "
                        >
                          <svg
                            class="h-2.5 w-2.5 text-gray-900 "
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
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter
                          class="w-10 shrink-0 border-1 rounded-xs bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                          placeholder=""
                          value="2"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          class="cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100   "
                        >
                          <svg
                            class="h-2.5 w-2.5 text-gray-900 "
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
                      <div class="text-center md:order-4 md:w-32">
                        <p class="text-base font-bold text-gray-900 ">$1,499</p>
                      </div>
                    </div>
                  </div>
                  {/* quantity and price end  */}
                  {/* product description, add to favorites and remove buttons start */}
                  <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-lg">
                    <p class="text-base font-medium text-gray-900 hover:underline ">
                      HP EliteBook 840 G9 Notebook PC
                    </p>
                  </div>
                  {/* product description, add to favorites and remove buttons start */}
                </div>
              </div>
              {/* single product end */}
            
            </div>
          </div>

          <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6">
              <p class="text-xl font-semibold text-gray-900 ">Order summary</p>

              <div class="space-y-4">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 ">
                      Original price
                    </dt>
                    <dd class="text-base font-medium text-gray-900 ">
                      $7,592.00
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 ">
                      Savings
                    </dt>
                    <dd class="text-base font-medium text-green-600">
                      -$299.00
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 ">
                      Store Pickup
                    </dt>
                    <dd class="text-base font-medium text-gray-900 ">$99</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 ">Tax</dt>
                    <dd class="text-base font-medium text-gray-900 ">$799</dd>
                  </dl>
                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                  <dt class="text-base font-bold text-gray-900 ">Total</dt>
                  <dd class="text-base font-bold text-gray-900 ">$8,191.00</dd>
                </dl>
              </div>

              <Link
                to="/checkout"
                class="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Proceed to Checkout
              </Link>

              <div class="flex items-center justify-center gap-2">
                <span class="text-sm font-normal text-gray-500 "> or </span>
                <Link
                  to="/"
                  class="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline "
                >
                  Continue Shopping
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hidden sm:p-6">
              <form class="space-y-4">
                <div>
                  <label
                    for="voucher"
                    class="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
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
