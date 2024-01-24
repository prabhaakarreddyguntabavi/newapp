import SideBar from "../SideBar";
import Header from "../Header";
import TransctionContext from "../../context/TransctionContext";

import {
  TransactionHomePage,
  TransactionTotalBodyContainer,
  TransctionsContainer,
  DachTransctionContainer,
  CrediteDebitImage,
  TitleParagraph,
  CategaryParagraph,
  DateOfTransctionParagraph,
  CrediteDebitAmount,
  EditImage,
  DeleteImage,
  TransactionBodyContainer,
  SelectFilterConditions,
  TransctionSelectFilter,
  SelectAllOption,
  SelectedContainer,
  SelectOption,
  SelectedCreditContainer,
  TransactionName,
  TransactionCategory,
  TransactionDate,
  TransactionAmount,
} from "./styledComponents";

const TransactionPage = () => {
  return (
    <TransctionContext.Consumer>
      {(value) => {
        const { transactionOption, onChangeTransactionOption } = value;

        return (
          <TransactionHomePage>
            <SideBar />
            <TransactionTotalBodyContainer>
              <Header />
              <TransactionBodyContainer>
                <SelectFilterConditions>
                  <TransctionSelectFilter
                    onClick={() => onChangeTransactionOption("ALLTRNSACTION")}
                  >
                    <SelectAllOption
                      transactionOption={transactionOption === "ALLTRNSACTION"}
                    >
                      All Transction
                    </SelectAllOption>
                    <SelectedContainer
                      transactionOption={transactionOption === "ALLTRNSACTION"}
                    ></SelectedContainer>
                  </TransctionSelectFilter>

                  <TransctionSelectFilter
                    onClick={() => onChangeTransactionOption("CREDIT")}
                  >
                    <SelectOption
                      transactionOption={transactionOption === "CREDIT"}
                    >
                      Credit
                    </SelectOption>
                    <SelectedCreditContainer
                      transactionOption={transactionOption === "CREDIT"}
                    ></SelectedCreditContainer>
                  </TransctionSelectFilter>

                  <TransctionSelectFilter
                    onClick={() => onChangeTransactionOption("DEBIT")}
                  >
                    <SelectOption
                      transactionOption={transactionOption === "DEBIT"}
                    >
                      Debit
                    </SelectOption>
                    <SelectedCreditContainer
                      transactionOption={transactionOption === "DEBIT"}
                    ></SelectedCreditContainer>
                  </TransctionSelectFilter>
                </SelectFilterConditions>
                <TransctionsContainer>
                  <DachTransctionContainer>
                    <TransactionName>Transaction Name</TransactionName>
                    <TransactionCategory>Category</TransactionCategory>
                    <TransactionDate>Date</TransactionDate>
                    <TransactionAmount>Amount</TransactionAmount>
                  </DachTransctionContainer>

                  <DachTransctionContainer>
                    <CrediteDebitImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/Group_328_hbywun.png"
                      alt="image"
                    />
                    <TitleParagraph>Sportify Subscription</TitleParagraph>
                    <CategaryParagraph>Shopping</CategaryParagraph>
                    <DateOfTransctionParagraph>
                      28 Jan, 10.40 AM
                    </DateOfTransctionParagraph>
                    <CrediteDebitAmount>-$150</CrediteDebitAmount>
                    <EditImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                      alt="edit"
                    />

                    <DeleteImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                      alt="delete"
                    />
                  </DachTransctionContainer>

                  <DachTransctionContainer>
                    <CrediteDebitImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/Group_328_hbywun.png"
                      alt="image"
                    />
                    <TitleParagraph>Sportify Subscription</TitleParagraph>
                    <CategaryParagraph>Shopping</CategaryParagraph>
                    <DateOfTransctionParagraph>
                      28 Jan, 10.40 AM
                    </DateOfTransctionParagraph>
                    <CrediteDebitAmount>-$150</CrediteDebitAmount>
                    <EditImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                      alt="edit"
                    />

                    <DeleteImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                      alt="delete"
                    />
                  </DachTransctionContainer>

                  <DachTransctionContainer>
                    <CrediteDebitImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/Group_328_hbywun.png"
                      alt="image"
                    />
                    <TitleParagraph>Sportify Subscription</TitleParagraph>
                    <CategaryParagraph>Shopping</CategaryParagraph>
                    <DateOfTransctionParagraph>
                      28 Jan, 10.40 AM
                    </DateOfTransctionParagraph>
                    <CrediteDebitAmount>-$150</CrediteDebitAmount>
                    <EditImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                      alt="edit"
                    />

                    <DeleteImage
                      src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                      alt="delete"
                    />
                  </DachTransctionContainer>
                </TransctionsContainer>
              </TransactionBodyContainer>
            </TransactionTotalBodyContainer>
          </TransactionHomePage>
        );
      }}
    </TransctionContext.Consumer>
  );
};

export default TransactionPage;
