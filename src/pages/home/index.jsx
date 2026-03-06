import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Добро пожаловать в наш город!</h1>
      <p>Откройте для себя удивительные места и достопримечательности</p>
      <Link>Исследовать категории →</Link>
    </div>
  );
}

export default Home;
