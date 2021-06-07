
import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionContext";
import { Container } from "./styles";




export function Summary(){
  const transactions = useContext(TransactionContext);

  console.log(transactions)

  return(
    <Container>
      <div>
        <header>
          <p>Appetizer</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>R$5000,00</strong>
      </div>
      <div>
        <header>
          <p>Exits</p>
          <img src={outcomeImg} alt="Saida" />
        </header>
        <strong>- R$2000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$3000,00</strong>
      </div>
    </Container>
  )
}


