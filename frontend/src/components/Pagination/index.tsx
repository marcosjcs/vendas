import { BiLeftArrowAlt, BiArrowToLeft, BiArrowToRight, BiRightArrowAlt } from "react-icons/bi";
import { SalePage } from "types/sale";

type Props = {
  page: SalePage;
  onPageChange: Function;
}

const Pagination = ( {page, onPageChange} : Props ) => {
  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.number === 0 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(0)}><BiArrowToLeft/> Primeira</button>
          </li>
          <li className={`page-item ${page.first ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page.number - 1)}><BiLeftArrowAlt/> Anterior</button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima <BiRightArrowAlt/></button>
          </li>
          <li className={`page-item ${page.number === page.totalPages - 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page.totalPages - 1)}>Última <BiArrowToRight/></button>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Pagination;