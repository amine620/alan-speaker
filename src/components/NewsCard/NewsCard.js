import React from 'react';
import './style.css'

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},number,activeArticle}) => {
    const border='border'
    return (
    <div className="card col-md-4 mt-2 " id={activeArticle==number? border:null}  style={{width:'18rem'}}>
    <img src={urlToImage} class="card-img-top" alt="..."/>
    <div className="card-body ">
    <span className='text-secondary'>{new Date(publishedAt).toDateString()}</span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description} </p>
    <h6 style={{color:'black'}}>article : {number+1}</h6>
    <a href={url} target='_blank' class="btn btn-primary">read more</a>
    </div>
    </div>
    );
}

export default NewsCard;
