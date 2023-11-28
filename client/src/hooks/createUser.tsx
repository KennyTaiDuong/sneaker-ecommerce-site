
const createUser = (email: string | undefined) => {
  async function postUser() {
    // new user object model
    const newUser = {
      email: email,
      phone: "",
      first_name: "",
      last_name: "",
      shipping_info: {}
    }

    // create new user
    try {

      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      })

    } catch (error) {
      console.error(error)
    }
  }

  // if email exists, create new user
  if (email) {
    postUser()
  }

}

export default createUser