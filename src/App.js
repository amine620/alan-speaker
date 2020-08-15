import React,{useEffect ,useState, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {style} from  './App.css';
import NewsCards from './components/NewsCards/NewsCards'
import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'words-to-numbers'
const alankey='791f6d1996d21947d176fc32c791afda2e956eca572e1d8b807a3e2338fdd0dc/stage'
const  App =()=> {

  // state={
  //     newsArticles:[],
  //     activeArticle:0,
   
  // }
  

  // componentDidMount(){
  //   alanBtn({
  //     key:alankey,
  //     onCommand:({command,articles,number})=>{
  //       if(command==='newHeadLines')
  //       {
  //            this.setState({newsArticles:articles})

  //       }
  //       else if(command==='hightlight')
  //       {
  //         this.setState({ 
  //           activeArticle:this.state.activeArticle+1
  //         })
  //       }
  //       else if(command==='open')
  //       {
  //         const parseNumbers=number.lenght >2 ? wordsToNumbers((number),{fuzzy:true}):number
  //        const article=articles[parseNumbers-1];
  //        if(parseNumbers>20)
  //        {
  //          alanBtn().playText('please try that again')
  //        }else if(article)
  //        {
  //          this.setState({
  //            isOpen:true,
  //            link:article.url
  //          })
  //          alanBtn().playText('opening')
  //        }
  //        else if(command==='goingback')
  //        {
  //         console.log('hi');
  //        }
  //         console.log(number)
  //       }
  //     }
  //   })
  // }
  
  
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);
  //  render()
  //  {

   // const {newsArticles,activeArticle}=this.state
     
     return (
    <div>
       <img className={'imgLogo'}  src="https://alan.app/voice/images/previews/preview.jpg"alt="logo" />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
  //  }
  
}

export default App;
