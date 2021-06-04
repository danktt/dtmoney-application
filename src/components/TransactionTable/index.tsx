import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){
 useEffect(() =>{
   api.get('transactions')
   .then(response => console.log(response.data))
 }, []);


  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimeto de Web Site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimeto</td>
            <td>20/01/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.000</td>
            <td>Imovel</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}