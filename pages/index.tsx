import Banner from '@/components/Banner'
import Header from '@/components/Header'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
     <Header />
     <Banner 
        urlImage="/images/banner-marvel.png"
        imgWidth={1440}
        imgHeight={300}
        nameImage="Marvel Banner"
     />
    </>
  )
}

export default Home
