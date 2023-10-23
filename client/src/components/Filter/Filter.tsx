import styled from "styled-components";
import { useState } from "react";

import CloseButton from "../../assets/icons/x-icon.svg"
import DownArrow from "../../assets/icons/down-arrow-icon.svg"
import UpArrow from "../../assets/icons/up-arrow-icon.svg"

const FilterContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`

const FilterHeading = styled.p`
  font-weight: 700;
`

const FilterList = styled.ul`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const DropDownContainer = styled.div`
  padding-left: 1rem;
`

const FilterLabels = styled.p`
  display: flex;
  flex-direction: column;

`

const DropDownItem = styled.p`
  font-weight: 400;
`

const Icon = styled.img`

`

export const Filter = () => {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)

  return (
    <FilterContainer>
      <HeadingContainer>
        <FilterHeading>Filter By</FilterHeading>
        <Icon src={CloseButton} alt="x icon"/>
      </HeadingContainer>
      <hr />
      <FilterList>
        <FilterLabels onClick={() => setCategoryOpen(prev => !prev)} data-cy="category-dropdown">
          <LabelContainer>
            Category
            <Icon src={categoryOpen ? UpArrow : DownArrow} alt="down/up arrow"/>
          </LabelContainer>
          <DropDownContainer style={{ display: `${categoryOpen ? "block" : "none"}`}} >
            <DropDownItem data-cy="item-1">item 1</DropDownItem>
            <DropDownItem>item 2</DropDownItem>
          </DropDownContainer>
        </FilterLabels>
        <FilterLabels onClick={() => setSizeOpen(prev => !prev)} data-cy="size-dropdown" >
          <LabelContainer>
            Size
            <Icon src={sizeOpen ? UpArrow : DownArrow} alt="down/up arrow"/>
          </LabelContainer>
          <DropDownContainer style={{ display: `${sizeOpen ? "block" : "none"}`}} >
            <DropDownItem data-cy="item-2">item 1</DropDownItem>
            <DropDownItem>item 2</DropDownItem>
          </DropDownContainer>
        </FilterLabels>
        <FilterLabels onClick={() => setPriceOpen(prev => !prev)} data-cy="price-dropdown">
          <LabelContainer>
            Price
            <Icon src={priceOpen ? UpArrow : DownArrow} alt="down/up arrow"/>
          </LabelContainer>
          <DropDownContainer style={{ display: `${priceOpen ? "block" : "none"}`}} >
            <DropDownItem data-cy="item-3">item 1</DropDownItem>
            <DropDownItem>item 2</DropDownItem>
          </DropDownContainer>
        </FilterLabels>
        <FilterLabels onClick={() => setBrandsOpen(prev => !prev)} data-cy="brands-dropdown">
          <LabelContainer>
            Brands
            <Icon src={brandsOpen ? UpArrow : DownArrow} alt="down/up arrow"/>
          </LabelContainer>
          <DropDownContainer style={{ display: `${brandsOpen ? "block" : "none"}`}} >
            <DropDownItem data-cy="item-4">item 1</DropDownItem>
            <DropDownItem>item 2</DropDownItem>
          </DropDownContainer>
        </FilterLabels>
      </FilterList>
    </FilterContainer>
  )
}