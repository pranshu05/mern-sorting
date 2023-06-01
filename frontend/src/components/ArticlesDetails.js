// date fns

const ArticlesDetails = ({ article }) => {
const d = new Date(article.createdAt)
const month = d.getMonth()
var select = document.getElementById('month');
select.addEventListener('change', function(){
var value = select.options[select.selectedIndex].value;
if (month == value){
  return (
    <div className="articles-details">
      <img src="{article.image}" />
      <h4>{article.title}</h4>
      <p>article posted at month {d.getMonth()}</p>
    </div>
  ) 

}
})
}

export default ArticlesDetails