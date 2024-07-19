const url = "https://jsonplaceholder.typicode.com/posts";

//async await is used with try and catch for errors
const consultAPI = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("ERROR");
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

consultAPI();
