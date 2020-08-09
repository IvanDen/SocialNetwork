import React, {useState} from 'react';
import Class from './Paginator.module.css';
import on from "classnames";
//Allows you to write classes in a string.

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
};

const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount: number = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber: number = portionNumber * portionSize;

    return (
        <div className={on(Class.paginatorWrap)}>
            <div className={on(Class.pageList)}>
                {portionNumber > 1
                    ? <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
                    : <button disabled >prev</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={on({[Class.selectedPage]: currentPage === p})}
                                     key={p}
                                     onClick={(e) => {onPageChanged(p);
                                     }}>{p}</span>
                    })}
                {portionCount > portionNumber
                    ? <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>
                    : <button disabled >next</button>}
            </div>
        </div>
    )
}

export default Paginator;
