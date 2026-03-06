import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div
      className="text-center py-18 rounded-2xl text-blue-50 px-2 mt-2"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <h1 className="text-[40px] font-bold  mb-4">Добро пожаловать в наш город!</h1>
      <p className="text-[19px] mb-8">
        Откройте для себя удивительные места и достопримечательности
      </p>
      <Link
        className="
            inline-block
            bg-purple-50 text-purple-800 px-8 py-4 rounded-xl
            transition-all duration-300
            hover:text-blue-800 hover:-translate-y-0.5">
        Исследовать категории →
      </Link>
    </div>
  );
}

export default Hero;
