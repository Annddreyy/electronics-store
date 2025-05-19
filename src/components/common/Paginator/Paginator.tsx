import { useEffect, useState } from 'react';
import classes from './Paginator.module.scss';

type PropsType = {
    totalItemsCount: number;
    pageSize: number;
    pagesPerGroup?: number;
};

export const Paginator: React.FC<PropsType> = ({
    totalItemsCount,
    pageSize,
    pagesPerGroup = 3,
}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);

    const totalPagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: number[] = [];

    const elipsiss = <div className={classes.elipsiss}>...</div>;

    const setAllPages = () => {
        for (let i = 1; i <= totalPagesCount; i++) {
            pages.push(i);
        }
    };

    const setCurrentPages = () => {
        if (currentPage > pagesPerGroup) {
            pages.push(1, 0);
        } else {
            for (let i = 1; i <= pagesPerGroup; i++) {
                pages.push(i);
            }
        }

        if (
            currentPage > pagesPerGroup &&
            currentPage < totalItemsCount - pagesPerGroup
        ) {
            pages.push(currentPage - 1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
        }

        if (totalPagesCount - currentPage >= pagesPerGroup) {
            pages.push(0, totalPagesCount);
        } else {
            pages = [1, 0];
            for (
                let i = totalPagesCount - pagesPerGroup + 1;
                i <= totalPagesCount;
                i++
            ) {
                pages.push(i);
            }
        }
    };

    const setPaginator = () => {
        if (totalPagesCount >= pagesPerGroup + 4) {
            setCurrentPages();
        } else {
            setAllPages();
        }
    };

    setPaginator();

    const nextButtonHandler = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const prevButtonHandler = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const onPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPage(+event.currentTarget.textContent!);
    };

    const pagesElems = pages.map((page) => (
        <>
            {page !== 0 ? (
                <button
                    className={
                        currentPage === page
                            ? 'button-primary'
                            : classes.buttonStyleBase
                    }
                    onClick={onPageButtonClick}
                >
                    {page}
                </button>
            ) : (
                elipsiss
            )}
        </>
    ));

    return (
        <div className={classes.paginator}>
            <button
                className={currentPage === 1 ? classes.buttonStyleDisabled : ''}
                onClick={prevButtonHandler}
                disabled={currentPage === 1}
            >
                ◄
            </button>
            {pagesElems}
            <button
                className={
                    currentPage === totalPagesCount
                        ? classes.buttonStyleDisabled
                        : ''
                }
                onClick={nextButtonHandler}
                disabled={currentPage === totalPagesCount}
            >
                ►
            </button>
        </div>
    );
};
