import { it } from "vitest"
import { render, screen } from "@testing-library/react"
import { Cart } from "../Cart"
import { BrowserRouter } from "react-router-dom"
import { UserDataContext } from "../../../components/Layout/Layout"
import { useState } from "react"
import { CartType, UserType } from "../../../components/Layout/Layout"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import {setupServer } from "msw/node"
import { HttpResponse, http } from "msw"

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

const NewUser = {
  email: "kennyduong536@gmail.com",
  first_name: "",
  last_name: "",
  id: 1,
  phone: "",
  shipping_info: {
    street_number: "",
    street_name: "",
    city: "",
    state: "",
    zip: "",
    country: "US"
  }
}

const OldUser = {
  email: "kd@gmail.com",
  first_name: "Test",
  last_name: "User",
  id: 5,
  phone: "1234560987",
  shipping_info: {
    street_number: "123",
    street_name: "Sesame St",
    city: "Elmo",
    state: "FL",
    zip: "88888",
    country: "US"
  }
}

type PropsType = { 
  cart: CartType,
  user: UserType
}

const restHandlers = [
  http.get("http://localhost:5000/api/carts/:id", () => {
    HttpResponse.json({
      rows: [{
        products: [
          {
            sku: "DD1391-100",
            size: "10",
            name: 'Nike Dunk Low "Panda"',
            quantity: "5",
            price: 200
          }
        ],
        user_id: 5,
        id: 17
      }]
    },
    {
      status: 200
    })
  }),
  http.get("http://localhost:5000/api/carts/:id", () => {
    HttpResponse.error()
  }),
  http.put("http://localhost:5000/api/carts/:id", () => {
    return HttpResponse.json({
      status: 200,
    })
  }),
  http.put("http://localhost:5000/api/carts/:id", () => {
    return HttpResponse.error()
  })
]

const MockCart = ({ cart, user }: PropsType) => {
  const [currentCart, setCurrentCart] = useState<CartType | undefined>(cart)
  const [currentUser, setCurrentUser] = useState<UserType | undefined>(user)

  return (
    <UserDataContext.Provider value={{ currentCart, setCurrentCart, currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </UserDataContext.Provider>
  )
}

const server = setupServer(...restHandlers)

describe("Cart page", () => {
  vi.mock("@auth0/auth0-react", () => ({
    useAuth0: () => ({
      isAuthenticated: true,
      user: {
        email: "kd@gmail.com"
      },
      isLoading: false
    })
  }));
  
  beforeAll(() => server.listen())

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => server.close())

  it("should user data", () => {
    render(<MockCart cart={TestCart} user={OldUser} />)
    const title = screen.getByTestId("title")
    const subtitle = screen.getByText("Sports Depot")
    const email = screen.getByText("Customer Email: kd@gmail.com")
    const name = screen.getByText("Test User")
    const streetAddress = screen.getByText("123 Sesame St")
    expect(title.textContent).toContain("aksupplied")
    expect(subtitle.textContent).toContain("Sports Depot")
    expect(email.textContent).toContain("Customer Email: kd@gmail.com")
    expect(name.textContent).toContain("Test User")
    expect(streetAddress.textContent).toContain("123 Sesame St")
  })

  it("should new user data", () => {
    render(<MockCart cart={TestCart} user={NewUser} />)
    const emptyName = screen.getByText("Name")
    expect(emptyName.textContent).toContain("Name")
  })

  it("should render with mock data", () => {
    render(<MockCart cart={TestCart}  user={OldUser} />)
    const totalPrice = screen.getByTestId("total-price")
    expect(totalPrice.textContent).toContain("$600")
  })

  it("should add one to the quantity when plus-sign clicked", async () => {
    render(<MockCart cart={TestCart} user={OldUser} />)
    const user = userEvent.setup()
    await act(async () => {
      const addQuantityBtn = screen.getByTestId("10+DD1391-100")
      await user.click(addQuantityBtn)
    })
    const quantityCount = screen.getByTestId("quantity")
    expect(quantityCount.textContent).toContain("3")
  })

  it("should subtract one to the quantity when plus-sign clicked", async () => {
    render(<MockCart cart={TestCart} user={OldUser} />)
    const user = userEvent.setup()
    await act(async () => {
      const minusQuantityBtn = screen.getByTestId("10-DD1391-100")
      await user.click(minusQuantityBtn)
      const quantityCount = screen.getByTestId("quantity")
      expect(quantityCount.textContent).toContain("3")
    })
  })

  it("should remove item from list", async () => {
    render(<MockCart cart={TestCart} user={OldUser} />)
    const user = userEvent.setup()
    const removeItemBtn = screen.getByTestId("remove-DD1391-100-10")
    await user.click(removeItemBtn)
  })

  it("should click on checkout button", async () => {
    render(<MockCart cart={TestCart} user={OldUser} />)
    const user = userEvent.setup()
    const checkoutBtn = screen.getByTestId("checkout-btn")
    await user.click(checkoutBtn)
  })

  it("should handle fetch error", async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch cart'));
    render(<MockCart cart={EmptyCart} user={NewUser} />)
  })
})
