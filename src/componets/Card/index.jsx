import './styled.scss'

export function Cards({ title, author,srcImg, description, genre, published }) {
    return (
        <>
            <div className="content">
                <div className="card">
                    <img src={srcImg} alt="" />
                    <div className="title">
                        <h2>{title}</h2>
                        <h3>{author}</h3>
                        <h5 className="bottom-text">{description}</h5>
                        <div className="bottom-button">
                            <h3 className="genre">{genre}</h3>
                            <h3 className="published">{published}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}