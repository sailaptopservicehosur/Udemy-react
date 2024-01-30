import Navbar from './components/Navbar'
import Categories from './components/Catagories'
import Sale from './components/Sale'
import Recommended from './components/Recommended'
import Topic from './components/Topic'
import Popular from './components/Popular'
import Footer from './components/Footer'


function App()
{
    return(
        <div>
            <Navbar></Navbar>
    <Categories></Categories>
    <Sale></Sale>
    <Recommended></Recommended>
    <Topic></Topic>
    <Popular></Popular>
    <Footer></Footer>
        </div>
    )

}

export default App