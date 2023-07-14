const Shortcard = ({short}) => {
    return(
        <div className="container__short__card">
            <img src={short.img} alt="" />
            <span>{short.title}</span>
            <span>{short.views}</span>
        </div>
    )
}
export default Shortcard; 