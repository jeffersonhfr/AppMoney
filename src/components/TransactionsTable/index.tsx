import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">Desenvolvimento de Site</td>
            <td className="deposity">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/03/2022</td>
          </tr>

          <tr>
            <td className="title">Condominio</td>
            <td className="withdraw">- R$400,00</td>
            <td>Casa</td>
            <td>25/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
