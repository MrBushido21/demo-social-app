const Paginator = ({ onPageChanged, currentPage, totalItemsCount, pageSize }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    let portionSize = 10; // Кількість сторінок у порції

    // Знаходимо номер порції
    let portionNumber = Math.ceil(currentPage / portionSize);

    // Обчислюємо ліву та праву границі поточної порції
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    // Заповнюємо список сторінок від лівої до правої границі поточної порції
    for (let i = leftPortionPageNumber; i <= rightPortionPageNumber && i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {/* Кнопка "На початок" */}
            {currentPage > 1 && (
                <button onClick={() => onPageChanged(1)}>На початок</button>
            )}

            {/* Кнопка "Попередня" */}
            {currentPage > 1 && (
                <button onClick={() => onPageChanged(leftPortionPageNumber - portionSize)}>
                    Попередня
                </button>
            )}

            {/* Кнопки сторінок */}
            {pages.map((p, index) => (
                <span
                    key={index}
                    onClick={() => onPageChanged(p)}
                    className={currentPage === p ? 'selectedPage ' : ''}
                >
                    {p}
                </span>
            ))}

            {/* Кнопка "Наступна" */}
            {portionNumber < Math.ceil(pagesCount / portionSize) && (
                <button onClick={() => onPageChanged(rightPortionPageNumber + 1)}>
                    Наступна
                </button>
                
            )}
        </div>
    );
};

export default Paginator;