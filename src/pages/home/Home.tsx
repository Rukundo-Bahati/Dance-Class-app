import Header from '../../components/header/Header'
import Cards from '../../components/cards/Cards'
import Community from '../../components/Community'
import Style from '../../components/Style'
import Articles from '../../components/articles/Articles'
import Services from '../../components/services/Services'
import Instructors from '../../components/teachers/Instructors'
import Testimonials from '../../components/testimonial/Testimonials'
import Contact from '../../components/Contact'

const Home = () => {
  return (
    <div>
      <Header />
                <Cards />
                <Community />
                <Services />
                <Style />
                <Testimonials />
                <Instructors />
                <Contact />
                <Articles />
    </div>
  )
}

export default Home
