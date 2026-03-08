import Headline from '../../components/headline';
import Hero from '../../components/hero'
import Features from '../../components/features'

function Home() {
  return (
    <div className="max-w-7xl m-auto my-0 w-full px-4 text-center">
      <Hero />
      <Headline title={'Почему стоит посетить наш город?'} />
      <Features />
    </div>
  );
}

export default Home;
