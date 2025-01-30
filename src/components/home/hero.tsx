'use client'; 
import Image from 'next/image'; // Импортируем Image компонент для Next.js
import Link from 'next/link'; // Для создания ссылок внутри Next.js

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-container lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">EACH GAME - A NEW ADVENTURE</h1>
          <p className="text-lg">
            Dive into a world where each game opens a door to a new reality, full of mysteries, strategies, and magical moments of meeting like-minded individuals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full">
            MORE
          </button>
        </div>
        <div className="image-container lg:w-1/2 mt-10 lg:mt-0">
          {/* Используем Image компонент от Next.js для оптимизации изображений */}
          <Image
            src="/mainboard.png" // Замените на ваш путь изображения
            alt="Board Game"
            width={500}
            height={500}
            className="bject-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
