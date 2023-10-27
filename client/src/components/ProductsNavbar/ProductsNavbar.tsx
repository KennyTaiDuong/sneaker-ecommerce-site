import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const PageButton = styled.button`
  color: black;
  padding: 0.5rem;
`

type NavbarProps = {
  pageCount: number
}

export const ProductsNavbar = ({ pageCount }: NavbarProps) => {
  const [, setSearchParams] = useSearchParams()

  const pageElements = new Array(pageCount ? pageCount : 1)
  .fill("")
  .map((_item, index: number) => {
    
    return <PageButton onClick={() => setSearchParams({ page: `${index + 1}`})}>{index + 1}</PageButton>
  })

  return (
    <Container>
      {pageElements}
    </Container>
  )
}

function index(_value: any, _index: number, _array: any[]): unknown {
  throw new Error("Function not implemented.");
}
