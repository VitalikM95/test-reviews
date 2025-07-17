import { Card } from '../components/Card'
import { Carousel } from '../components/Carousel'

const CARDS_DATA = [
  {
    logo: '/test-reviews/logo2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem obcaecati corporis et optio repellendus autem maxime eligendi saepe mollitia nihil.',
    avatar: '/test-reviews/avatar2.jpg',
    name: 'Ethan Morgan',
    position: 'Founder and CEO, Serence Living Products',
  },
  {
    logo: '/test-reviews/logo3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit animi quos qui explicabo fuga aut quis vel consectetur.',
    avatar: '/test-reviews/avatar1.jpg',
    name: 'Olivia Hayes',
    position: 'Owner, Starlight Creations',
  },
  {
    logo: '/test-reviews/logo1.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint excepturi autem reprehenderit ratione perspiciatis, cupiditate ducimus dignissimos dolorem reiciendis',
    avatar: '/test-reviews/avatar3.jpg',
    name: 'Alexander Reed',
    position: 'Co-Founder, Opulent Living Group',
  },
  {
    logo: '/test-reviews/logo3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit animi quos qui explicabo fuga aut quis vel consectetur.',
    avatar: '/test-reviews/avatar1.jpg',
    name: 'Olivia Hayes',
    position: 'Owner, Starlight Creations',
  },
  {
    logo: '/test-reviews/logo1.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint excepturi autem reprehenderit ratione perspiciatis, cupiditate ducimus dignissimos dolorem reiciendis',
    avatar: '/test-reviews/avatar3.jpg',
    name: 'Alexander Reed',
    position: 'Co-Founder, Opulent Living Group',
  },
  {
    logo: '/test-reviews/logo2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem obcaecati corporis et optio repellendus autem maxime eligendi saepe mollitia nihil.',
    avatar: '/test-reviews/avatar2.jpg',
    name: 'Ethan Morgan',
    position: 'Founder and CEO, Serence Living Products',
  },
]

export const Reviews = () => {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center overflow-hidden flex items-center justify-center py-20"
      style={{ backgroundImage: 'url(/test-reviews/bg.jpg)' }}
    >
      <div className="max-w-[1240px] w-full mx-auto flex flex-col items-center justify-between h-full">
        <h1 className="text-4xl font-bold mt-8 mb-12 text-center">
          Voices of Success with Sales Fortuna
        </h1>
        <Carousel slidesToScroll={3}>
          {CARDS_DATA.map((item, i) => (
            <Card key={i} cardItem={item} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}
