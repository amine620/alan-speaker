import React, { Component } from 'react';
import NewsCard from '../NewsCard/NewsCard'
import './style.css'

const infoCards = [
    {  title: 'Latest News', text: 'Give me the latest news' },
    {  title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    {  title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    {  title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

class NewsCards extends Component {
    render(){ 
        if(!this.props.articles.length)
       {
           return (
        <div className='flex'>  
            { infoCards.map((info)=>(
            <div className="cardNews ">
                    <strong>{info.title}</strong>
                <div>
                    <strong>{info.title.split(' ')[2]}</strong>
                    <h6> {info.info}</h6>
                </div>
                
                <div>
                    <h5>Try saying:</h5>
                    <h3>{info.text}</h3>
                </div>
            </div>
             ))}
        </div>  
           )
       }
      console.log(this.props.articles)  

    return (
        <div className='container-fluid'>
        <div className='row '>
            {
            this.props.articles.map((article,index)=>(
                <NewsCard  article={article} number={index} activeArticle={this.props.activeArticle}/>
                ))
            }
        </div>
        </div>
            );
        }
}

export default NewsCards;
