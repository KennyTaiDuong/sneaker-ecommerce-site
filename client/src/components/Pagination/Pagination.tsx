import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media screen and (min-width: 650px) {
    grid-column: 2 / -1;
  }
`

const PageButton = styled.button`
  color: black;
  border: 2px solid rgb(160, 160, 160);
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
`

type NavbarProps = {
  pageCount: number
}

export const Pagination = ({ pageCount }: NavbarProps) => {
  const [, setSearchParams] = useSearchParams()

  const buttonElements = new Array(pageCount ? pageCount : 1)
  .fill("")
  .map((_item, index: number) => {
    return (
      <PageButton 
        onClick={() => setSearchParams({ page: `${index + 1}`})}
        key={index}
      >
        {index + 1}
      </PageButton>
    )
  })

  return (
    <Container>
      {buttonElements}
    </Container>
  )
}