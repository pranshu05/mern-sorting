import { useEffect, useState } from "react"

// components
import ArticlesDetails from "../components/ArticlesDetails"

const Articles = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/article/all')
      const json = await response.json()

      if (response.ok) {
        setArticles(json)
      }
    }

    fetchArticles()
  }, [])
  return (
    <div className="articles">
    <select id="month">
      <option value="0">Jan</option>
      <option value="1">Feb</option>
      <option value="2">Mar</option>
      <option value="3">Apr</option>
      <option value="4">May</option>
      <option value="5">Jun</option>
      <option value="6">Jul</option>
      <option value="7">Aug</option>
      <option value="8">Sep</option>
      <option value="9">Oct</option>
      <option value="10">Nov</option>
      <option value="11">Dec</option>
    </select>
        {articles && articles.map(article => (
          <ArticlesDetails article={article} key={article._id} />
        ))}
    </div>
  )
}

export default Articles