import Headline from '../../components/headline';
import Hero from '../../components/hero'

function Home() {
  return (
    <div className="max-w-7xl m-auto w-full px-4">
      <Hero />
      <Headline title={'Почему стоит посетить наш город?'} />
    </div>
  );
}

export default Home;
