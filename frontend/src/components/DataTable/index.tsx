import { useEffect, useState } from "react";
import { BiBriefcase, BiCalendar, BiMoney, BiUser, BiUserCircle } from "react-icons/bi";
import Pagination from "components/Pagination";

import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";

import api from "services/api";

const DataTable = () => {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,    
  });

  useEffect(() => {
  api.get(`sales?page=${activePage}&size=5&sort=date,desc`).then(response => {
      setPage(response.data);
    });
  },[activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  }

  return (
    <>
      <Pagination page={page} onPageChange={changePage}/>
      <div className="table-sales">
        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th><BiCalendar /> Data</th>
                <th><BiUser/> Vendedor</th>
                <th><BiUserCircle/> Clientes visitados</th>
                <th><BiBriefcase/> Negócios fechados</th>
                <th><BiMoney/> Valor</th>
              </tr>
            </thead>
            <tbody>
              {page.content?.map(sale => (
                <tr key={sale.id}>
                  <td>{formatLocalDate(sale.date,'dd/MM/yyyy')}</td>
                  <td>{sale.seller.name}</td>
                  <td>{sale.visited}</td>
                  <td>{sale.deals}</td>
                  <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(sale.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataTable;