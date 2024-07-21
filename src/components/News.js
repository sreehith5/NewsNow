import react,{Component} from'react'
import NewsItem from './NewsItem'
export default class News extends Component{
    constructor(){
        super();
       this.state={
           articles:[],
           loading:false
       }
    }
    async componentDidMount(){
        //https://newsapi.org/v2/everything?q=apple&from=2023-12-24&to=2023-12-24&sortBy=popularity&apiKey=b36075b46c084e73adf50c6a3d573d0e
        let url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=bffae7e34bc24c0fbf21dadec811b0bc";
        let data=await fetch(url);
        let parsedata=await data.json();
        this.setState(
            {articles:parsedata.articles}
        )
    }
    render(){
        return(
            <div className="container">
                <h2>News Now-Headlines for today </h2>
            < div className="row"> 
            {this.state.articles.map((element)=>{
               return <div key={element.url?element.yrl:"hhttps://newsapi.org/v2/everything?q=tesla&from=2024-06-21&sortBy=publishedAt&apiKey=bffae7e34bc24c0fbf21dadec811b0bc"} className="col md-4">   
               <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url}/>
               </div>   
            })}
            
            </div>
            </div>
        )
    }
}