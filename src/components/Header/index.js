import Popup from "reactjs-popup";

import {
  HeaderMainContainer,
  AddTransactionButton,
  ButtonImage,
  ButtonText,
  AddTransctionButton,
  AddTransctionContainer,
  AddTransctionMainContainer,
  AddTransctionTextContainer,
  HeadingTextContainer,
  AddTransctionHeading,
  AddTransctionParagraph,
  AddTransctionCloseImage,
  AddTransctionInputContainer,
  AddTransctionLabel,
  AddTransctionNameInput,
  SelectTransctionType,
  SelectTransctionOptions,
} from "./styledComponents";

const Header = () => (
  <HeaderMainContainer>
    <ButtonText>Dashboard</ButtonText>
    <Popup
      modal
      trigger={
        <AddTransactionButton type="button">
          <ButtonImage
            src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705727508/plus_ndqvby.png"
            alt="plus"
          />{" "}
          Add Transaction
        </AddTransactionButton>
      }
    >
      {(close) => (
        <AddTransctionMainContainer>
          <AddTransctionContainer>
            <AddTransctionTextContainer>
              <HeadingTextContainer>
                <AddTransctionHeading>Add Transaction</AddTransctionHeading>
                <AddTransctionParagraph>
                  Lorem ipsum dolor sit amet, consectetur
                </AddTransctionParagraph>
              </HeadingTextContainer>
              <AddTransctionCloseImage
                onClick={() => close()}
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706078678/Close_gxeytv.png"
                alt="close"
              />
            </AddTransctionTextContainer>

            <AddTransctionInputContainer>
              <AddTransctionLabel htmlFor="addtransctionname">
                Transaction Name
              </AddTransctionLabel>
              <AddTransctionNameInput
                type="text"
                id="addtransctionname"
                // value={password}
                // onChange={onChangePas}
                placeholder="Enter Name"
              />
            </AddTransctionInputContainer>

            <AddTransctionInputContainer>
              <AddTransctionLabel htmlFor="transctionType">
                Transaction Type
              </AddTransctionLabel>
              <SelectTransctionType
                placeholder="Select Transaction Type "
                id="transctionType"
              >
                <SelectTransctionOptions value="volvo">
                  Credit
                </SelectTransctionOptions>
                <SelectTransctionOptions value="saab">
                  Debit
                </SelectTransctionOptions>
              </SelectTransctionType>
            </AddTransctionInputContainer>

            <AddTransctionInputContainer>
              <AddTransctionLabel htmlFor="transctionCategory">
                Category
              </AddTransctionLabel>
              <SelectTransctionType
                placeholder="Select"
                id="transctionCategory"
              >
                <SelectTransctionOptions value="volvo">
                  Shopping
                </SelectTransctionOptions>
                <SelectTransctionOptions value="saab">
                  Service
                </SelectTransctionOptions>
                <SelectTransctionOptions value="saab">
                  Transfer
                </SelectTransctionOptions>
              </SelectTransctionType>
            </AddTransctionInputContainer>

            <AddTransctionInputContainer>
              <AddTransctionLabel htmlFor="addtransctionamount">
                Amount
              </AddTransctionLabel>
              <AddTransctionNameInput
                type="number"
                id="addtransctionamount"
                // value={password}
                // onChange={onChangePas}
                placeholder="Enter Your Amount"
              />
            </AddTransctionInputContainer>

            <AddTransctionInputContainer>
              <AddTransctionLabel htmlFor="addtransctionamount">
                Date
              </AddTransctionLabel>
              <AddTransctionNameInput
                type="date"
                id="addtransctionamount"
                // value={password}
                // onChange={onChangePas}
                placeholder="Select Date"
              />
            </AddTransctionInputContainer>

            <AddTransctionButton
              type="button"
              // onClick={onClickLogout}
            >
              Add Transaction
            </AddTransctionButton>
          </AddTransctionContainer>
        </AddTransctionMainContainer>
      )}
    </Popup>
  </HeaderMainContainer>
);

export default Header;
