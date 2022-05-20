import "./CourseCardSmall.css"


const CourseCardSmall = ({ _id, title, courseImg, headline, price, avgRating }) => {

    const realPrice = price / 100
    
    let result = Math.round(avgRating)

    const starts = (result) => {
        switch (result) {
            case 1:
                return '★'
                break
            case 2:
                return '★★'
                break
            case 3:
                return '★★★'
                break
            case 4:
                return '★★★★'
                break
            case 5:
                return '★★★★★'
                break
        }

    }
    return (

        <>
            <div className="body-score-card">
                {/* <Link to={`/cursos/${_id}`} style={{ textDecoration: 'none', color: "black" }}> */}
                <div>
                    <div className="card-small-img" >
                        <img src={courseImg}></img>
                    </div >
                    <div className="card-small-title">{title}</div>
                    <div className="card-small-headline">{headline}</div>
                    <div>
                        <div className="score-card-small ">
                            <p className="star">{avgRating}&nbsp; &nbsp;{starts(result)}</p>
                            {/* <span className="price"></span> */}
                        </div>
                        <div className="card-small-price">
                            <p>{realPrice}€</p>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}
export default CourseCardSmall