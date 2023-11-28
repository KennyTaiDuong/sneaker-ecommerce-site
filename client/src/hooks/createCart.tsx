
const createCart = (user_id: number | undefined) => {
  async function postCart() {

    // new cart object model
    const newCart = {
      products: [],
      user_id: user_id
    }

    // create new cart
    try {

      await fetch("http://localhost:5000/api/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCart)
      })

    } catch (error) {
      console.error(error)
    }
  }

  // create new cart if user_id exists
  if (user_id) {
    postCart()
  }
}

export default createCart