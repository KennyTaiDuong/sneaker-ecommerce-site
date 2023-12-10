import { HttpResponse, http } from "msw";
import { Layout } from "../Layout";
import { BrowserRouter } from "react-router-dom";
import { setupServer } from "msw/node";
import { render } from "@testing-library/react";

const MockLayout = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

const restHandlers = [
  http.get("http://localhost:5000/api/users/:id", () => {
    HttpResponse.json({
      rows: [{
        id: 24,
        email: "kd@gmail.com",
        first_name: "",
        last_name: "",
        shipping_info: {
            zip: "1",
            city: "",
            state: "",
            country: "US",
            street_name: "",
            street_number: ""
        },
        phone: "123"
      }]
    },
    {
      status: 200
    })
  }),
  http.get("http://localhost:5000/api/users/:id", () => {
    HttpResponse.error()
  }),
  http.post("http://localhost:5000/api/users/", () => {
    HttpResponse.json({
      body: JSON.stringify({
        email: "kd@gmail.com",
        phone: "",
        first_name: "",
        last_name: "",
        shipping_info: {}
      })
    },
    {
      status: 200,
    })
  }),
  http.post("http://localhost:5000/api/carts/", () => {
    HttpResponse.error()
  })
]

const server = setupServer(...restHandlers)

describe("Layout component", () => {
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

  it("render layout", () => {
    render(<MockLayout />)
  })
})