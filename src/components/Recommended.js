//Recommended Component

import b from "../assete/images/c1.jpg"
import c from "../assete/images/c2.jpg"
import d from "../assete/images/c3.jpg"
import e from "../assete/images/c4.jpg"

function Recommended()
{
  return(
    <div class="Recommended">
        <h1 cla="Recommended__title">
            Recommended For You
        </h1>
        <p>Pick the Best Fit</p>
        <div class="Recommended__container">
            <div class="course-card">
                <img src={b}alt="course 1"></img>
                <h3>2023 Python Data Visaulition Masterclass</h3>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>

            </div>
            <div class="course-card">
                <img src={c}alt="course 1"></img>
                <h3> Web Development Bootcamp</h3>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1000</del></p>

            </div>
            <div class="course-card">
                <img src={d}alt="course 1"></img>
                <h3>2023 Master UI/UX Designing</h3>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1599</del></p>

            </div>
            <div class="course-card">
                <img src={e}alt="course 1"></img>
                <h3>Basic to Advance Programming</h3>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>

            </div>

        </div>
    </div>
  )
}

export default Recommended