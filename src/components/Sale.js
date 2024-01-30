//Sale

import a from "../assete/images/sale-image.png"

function Sale()
{
  return(
    <div class="sale-image">
        <img src={a} alt="a"></img>
        <div class="sale-image__offer">
            <h2>Udemy Flas Sale! 24 hours to save</h2>
            <p>Get top courses for just 499. Just one day to Save but a lifetime to learn</p>
        </div>
    </div>
  )

}

export default Sale