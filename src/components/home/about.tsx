'use client';

const AboutSection = () => {
  return (
    <section className="about-section bg-[#050119] text-white py-16 px-6">
      <div className="container mx-auto space-y-12">
        <div className="max-w-[100%] mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Левый блок */}
          <div className=" rounded-lg shadow-lg ">
            {/* Сетка для трех изображений */}
 {/* Контейнер для изображений */}
         <div className="relative ">
          {/* Первое изображение */}
          <img
            src="/aboutfoto1.png" // Замените на путь к вашему изображению
            alt="Game Setup 1"
            className=" object-center "
          />
        </div>
          </div>

          {/* Правый блок */}
          <div  >
          <div className="max-w-7xl mx-auto ">
        {/* Заголовок */}
              <h2 className=" font-bold text-left  mb-4">THE ABOUT</h2>

              {/* Описание */}
              <div className=" mb-12">
                <h3 className=" font-bold mb-2 text-cm-blue">COZY PLACE <span className="text-white"> FOR BOARD GAMES</span></h3>
                <p className="text-left  text-gray-300 pl-12">
                  MEEPLE CAVE IS A CORNER FOR TABLETOP FUN! HERE YOU WILL FIND EVERYTHING FOR A COMPLETE BOARD EXPERIENCE: A WIDE SELECTION OF GAMES, ACTIVE DISCUSSIONS, THE POSSIBILITY TO ORGANIZE GAME MEETINGS AND EVEN SELL YOUR GAME FINDS. TRUST US WITH YOUR TIME AND WE WILL MAKE IT UNFORGETTABLE!
                </p>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className=" text-left flex ">
                  <h4 className="text-3xl font-bold pr-4 text-cm-blue">100+</h4>
                  <p className=" text-gray-300">Board Games For Different Ages Are Available In Our Collection</p>
                </div>
                <div className="flex text-left">
                  <h4 className="text-3xl font-bold pr-4 text-cm-blue">40+</h4>
                  <p className=" text-gray-300">Active Participants Representing Different Age Groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
