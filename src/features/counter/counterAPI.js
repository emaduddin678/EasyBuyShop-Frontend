// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1) => {
  return new Promise(async (resolve) =>
    setTimeout(() => {
      resolve({ data: amount });
    }, 500)
  );
};
