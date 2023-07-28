const ResultSearch = () => {

    const tags = [
        "Roupas brancas", 
        "Henrique e Juliano", 
        "Comidas japonesas", 
        "Seriados antigos"
    ]
    return (
        <>
            {tags && tags.map((tag) => (
                <div className="container__tags__search">
                    <span>{tag}</span>
                </div>
            ))}
        </>
    )
}

export default ResultSearch;