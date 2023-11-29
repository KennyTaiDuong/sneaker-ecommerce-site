import { it } from "vitest"
import { render, screen } from "@testing-library/react"
import { Cart } from "../Cart"
import { BrowserRouter } from "react-router-dom"
import { UserDataContext } from "../../../components/Layout/Layout"
import { useState } from "react"
import { CartType, UserType } from "../../../components/Layout/Layout"
import userEvent from "@testing-library/user-event"

const EmptyCart = {
  products: [],
  user_id: 5,
  id: 17
}

const TestCart = {
  products: [
    {
      sku: "DD1391-100",
      size: "10",
      name: 'Nike Dunk Low "Panda"',
      quantity: "3",
      price: 200
    }
  ],
  user_id: 5,
  id: 17
}

type PropsType = { 
  cart: CartType
}

const MockCart = ({ cart }: PropsType) => {
  const [currentCart, setCurrentCart] = useState<CartType | undefined>(cart)
  const [currentUser, setCurrentUser] = useState<UserType | undefined>({
    email: "kd@gmail.com",
    first_name: "Test",
    last_name: "User",
    id: 5,
    phone: "1234560987",
    shipping_info: {
      street_number: "",
      street_name: "",
      city: "",
      state: "",
      zip: "",
      country: "US"
    }
  })

  return (
    <UserDataContext.Provider value={{ currentCart, setCurrentCart, currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </UserDataContext.Provider>
  )
}

vi.mock("@auth0/auth0-react")

describe("Cart page", () => {
  // vi.mock("@auth0/auth0-react", () => ({
  //   useAuth0: () => ({
  //     isAuthenticated: true,
  //     user: {
  //       email: "kd@gmail.com"
  //     },
  //     isLoading: false
  //   })
  // }))

  it("should render cart", () => {
    render(<MockCart cart={TestCart} />)
    const title = screen.getByTestId("title")
    const subtitle = screen.getByText("Sports Depot")
    const email = screen.getByText("Customer Email: kd@gmail.com")
    expect(title.textContent).contains("aksupplied")
    expect(subtitle.textContent).contains("Sports Depot")
    expect(email.textContent).contains("Customer Email: kd@gmail.com")
  })

  it("should render empty cart", () => {
    render(<MockCart cart={TestCart} />)
    const totalPrice = screen.getByTestId("total-price")
    expect(totalPrice.textContent).contains("$600")
  })

  it("should add one to the quantity when plus-sign clicked", async () => {
    render(<MockCart cart={TestCart} />)
    const user = userEvent.setup()
    const addQuantityBtn = screen.getByTestId("10+DD1391-100")
    await user.click(addQuantityBtn)
    const quantityCount = screen.getByTestId("quantity")
    expect(quantityCount.textContent).contains("3")
  })

  it("should subtract one to the quantity when plus-sign clicked", async () => {
    render(<MockCart cart={TestCart} />)
    const user = userEvent.setup()
    const minusQuantityBtn = screen.getByTestId("10-DD1391-100")
    await user.click(minusQuantityBtn)
    const quantityCount = screen.getByTestId("quantity")
    expect(quantityCount.textContent).contains("2")
  })

  it("should remove item from list", async () => {
    render(<MockCart cart={TestCart} />)
    const user = userEvent.setup()
    const removeItemBtn = screen.getByTestId("remove-DD1391-100-10")
    await user.click(removeItemBtn)
  })

  it("should remove item from list", async () => {
    render(<MockCart cart={TestCart} />)
    const user = userEvent.setup()
    const checkoutBtn = screen.getByTestId("checkout-btn")
    await user.click(checkoutBtn)
  })

  it("should render empty cart", async () => {
    
    render(<MockCart cart={EmptyCart}/>)
    const emptyItem = screen.getByText("nothing to be found")
    expect(emptyItem.textContent).contains("nothing to be found")
  })

})
