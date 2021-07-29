import { useState, useEffect } from "react";

function Main() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("microsoft");
  useEffect(() => {
    let url = "YOUR NEWS API url";
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  }, []);

  function readValue(value) {
    setSearch(value);
  }
  /*
  function searchNews() {
    let url = ""YOUR NEWS API url";"
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  }*/

  useEffect(() => {
    let url = "YOUR NEWS API url";
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  }, [search]);

  return (
    <div className="container">
      <div className="filter">
        <input
          type="search"
          onChange={(event) => {
            readValue(event.target.value);
          }}
          placeholder="Enter a topic"
        />
        <button onClick={useEffect} className="btn">
          Search For news
        </button>
      </div>
      <h1>All News</h1>
      <div className="padd">
        {articles.length === 0 ? (
          <h2 className="dt">
            There is no relative news availabe for the topic : {search}
            😞😞😞
          </h2>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="article">
              <div className="padd-article">
                <div className="news-img">
                  <img src={article.urlToImage} />
                </div>
                <div className="news-detail">
                  <h2>{article.title}</h2>
                  <p>Author:{article.author}</p>
                  <p>{article.description}</p>
                  <p>
                    <a href={article.url} target="_blank">
                      <button class="btn">Read Full News</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
