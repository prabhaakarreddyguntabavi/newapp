import {
  HeaderMainContainer,
  AddTransactionButton,
  ButtonImage,
  ButtonText,
} from "./styledComponents";

const Header = () => (
  <HeaderMainContainer>
    <ButtonText>Dashboard</ButtonText>
    <AddTransactionButton type="button">
      <ButtonImage
        src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705727508/plus_ndqvby.png"
        alt="plus"
      />{" "}
      Add Transaction
    </AddTransactionButton>
  </HeaderMainContainer>
);

export default Header;
