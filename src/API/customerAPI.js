const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getCustomers = async () => {
  try {
    return fetch(proxyurl + "https://bigcustomerapi.azurewebsites.net/api/Customers", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((result) => result.json());
  } catch (error) {
    console.log(error);
  }
};