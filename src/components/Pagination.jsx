import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import style from "../assets/css/modules/Pagination.module.css"

const Pagination = ({ items, itemsBlock, itemsOnPage }) => {

    function PaginatedItems({ itemsPerPage }) {
        const [itemOffset, setItemOffset] = useState(0);

        const endOffset = itemOffset + itemsPerPage;
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                {itemsBlock(currentItems)}
                <br />
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<i className="bi text-blue bi-arrow-left-circle"></i>}
                    nextLabel={<i className="bi text-blue bi-arrow-right-circle"></i>}
                    onPageChange={handlePageClick}
                    // pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName={style.liClass}
                    activeClassName={style.active}
                />
            </>
        );
    }

    return (
        <PaginatedItems itemsPerPage={itemsOnPage} />
    )
}

export default Pagination