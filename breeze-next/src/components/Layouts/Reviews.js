import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/swiper-bundle.min.css'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Reviews() {

  return (
    <>
      <section
        className="reviews"
        id="reviews"
        style={{ backgroundColor: "#A5C8FF2E" }}
      >
        <div className="container">
          <div className="reviews__header">
            <h2 className="reviews__header__title title">
              <span>Что говорят</span> о нас клиенты
            </h2>
          </div>
          <div className="reviews__wrap swiper-container">
            
          

        <Swiper
          slidesPerView={2.5}
          spaceBetween={15}
          centeredSlides={true}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Жанторе
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Көлік сатып алғанда, мен жергілікті нарықты зерттей бастадым,
              мұнда өз бюджетімнен ештеңе таппадым. Америкадан автокөлік сатып
              алудың нұсқаларын қарастыра бастадым.
              <br />
              Жеткізу ақысын қоса алғанда баға бойынша зерттеулер
              жүргізілді.ING Auto-те ең тартымды шарттар болып шықты.
              <br />
              Компания қызметкерлері үнемі байланыста болып, барлық жағдайды
              түсіндірді, Америкадағы аукционнан бастап Алматыға дейін жеткізу
              процесін бақылап отырды.
              <br />
              <br />
              ING Auto-ті сіздерге ұсына аламын!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Мария
                </p>
                <img
                  src="icons/russia.svg"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Заказывала JETTA 1.4 2019 года. По совету подруги обратилась в
              ING Auto в Тбилиси. Эксперты понятно консультировали. Выбрали авто как
              хотела с момента аукциона до того как мы забрали автомобиль в
              Тбилиси ушло 3 месяца. <br />
              <br />
              Компанию рекомендую. Всё честно и прозрачно.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Наталья
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Дякую компанії рольф. Приїхала в&nbsp;тбілісі в&nbsp;березні 2022
              і вирішила купити автомобіль. Звернулася до&nbsp;компанії рольф
              де&nbsp;було запропоновано декілька автомобілів. За 4&nbsp;місяці
              автомобіль вже&nbsp;був&nbsp;мій. Дуже задоволена рекомендую і
              ще&nbsp;раз&nbsp;дякую компанії рольф.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Данияр
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Мен өзіме ING Auto компаниясы арқылы Америкадағы аукционнан көлікке
              тапсырыс бердім, көлікті жоспарлаған бағамнан төмен бағаға сатып
              алдым. Қазір әйелімнің көлігін күтіп отырмыз.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Лина
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Приємно бонусом для мене стало те що вони вибирають машину для
              мене як для себе. Спочатку я хотів обрати інший автомобіль, Але
              кваліфіковані спеціалісти порадили мені вибрати інший. Вони
              назвали всі плюси та мінусии того автомобіля Який я хотів самого
              початку і я вирішив довіритися їм та замовив іншу машину. Зараз
              пройшло вже півроку як я катаюся на своєму автомобілі і за весь
              цей час не було ніяких проблем. Зо ще тут можна сказати крім слів
              вдяки?»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Владислав
                </p>
                <img
                  src="icons/russia.svg"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Заказывал авто с копарта, Camry 2020 года. Близкие посоветовали
              обратиться в грузинскую компанию ING Auto.
              <br />
              <br />
              Не жалею! Круто выиграли аукцион, быстро доставили и восстановили
              всё про всё ушло 3 месяца. Работой компании ING Auto очень доволен. Не
              дорого, всё чётко и понятно. Рекомендую!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Владислав
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Автомобілі КОМПАНІЇ РОЛЬФ варті того, щоб їх рекомендувати, вони
              доглянуті та з певною історією, доступною для перевірки, чудовий
              підхід до клієнта , дуже приємна атмосфера.Рекомендую КОМПАНІЮ
              РОЛЬФ!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Чингиз
                </p>
                <img
                  src="icons/russia.svg"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «ING Auto Грузия - СИЛА! <br />
              Всё как надо сделали и привезли тачку из Америки в Россию. Быстро
              и понятно. Хочешь тачку , иди в ING Auto Грузия! Честно, быстро и по
              деньгам нормально.
              <br />
              Рекомендуем!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Вика
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Молодці працюєте швидко і на високому рівні. Тактовність
              персоналу до замовника. Рекомендую із власного досвіду. Дякую
              компанії Рольф...»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Нияз
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Мен міндетті түрде ING Auto-ті төмен баға мен жұмыс сапасы үшін ұсына
              аламын! Жігіттерге көп рахмет! Егер сіз көлікке тапсырыс бергіңіз
              келсе, онда тек ING Auto-ке жүгініңіз!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Тимофей
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «ING Auto Грузія це як новий член сім’ї для нас. Спочатку замовив собі
              машину, Був здивований тим що все прибуло дуже швидко та не було
              довгих процесів з документами. На машині постійно їздила дружина,
              Вирішив для неї також замовити, щоб не брала мою. Зараз чекаємо ще
              машину для дружини.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Аскар
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «ING Auto компаниясына жедел жұмысы мен кері байланысы үшін үлкен
              рақмет! Ойланбастан ұсына аламын.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Роман
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Надійне та професійне обслуговування клієнтів. Точні фотографії
              надійна документація. Рекомендую з чистою совістю КОМПАНІЮ
              РОЛЬФ!!!!!!!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Айна
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Маған көлік таңдауға және сатып алуға көмектескендеріңіз үшін
              үлкен рахмет! Мен өте қуаныштымын, оны сөзбен жеткізу мүмкін емес!
              Үлкен рахмет!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Владислав
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Для тих хто цінить свій час Я можу відверто порекомендувати цю
              компанію. Кваліфіковані спеціалісти за максимально короткий час
              підібрали для мене те що я так давно хотіла. Ще й приємним бонусом
              стало для мене те що машина прибула на 2 тижні раніше ніж я
              очікувала.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Людмила
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Дякую всім спеціалістам вашої компанії, Перед новим роком хотів
              зробити подарунок для свого батька але не знав чи встигну
              підібрати автомобіль. За короткий час ваші спеціалісти допомогли
              мені вирішити всі питання та мій батько все ж таки отримав у
              подарунок новий автомобіль на новий рік. Щіра подяка від мене та
              від мого батька»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Алмаз
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Рахмет братья ! Красавчики, выиграли аукцион по нормальной
              цене,машина приехала быстро. Советую всем.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Адиль
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Заказывал автомобиль в компании ING Auto . Быстро нашли машину в
              Америке и выиграли аукцион. Машину везли через Грузию всего вышло
              до Казахстана 3 месяца. Пришло всё чётко! Компанию рекомендую.»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Владислав
                </p>
                <img
                  src="icons/ukraine.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country ru-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Я вирішив довіритися вашій фірмі тому що чув декілька гарних
              відгуків від своїх друзів та родичів. Коли прийшов час обрати
              автомобіль я навіть здивувався що багато хто з мого оточення знає
              про вас та всі казали і радили саме вашу фірму. Це мене дуже
              здивувало Тому я просто Прийняв рішення та звернувся до вас за
              новим автомобілем. Тепер я також буду радити вашу фірму всім своїм
              друзям»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Данияр
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Выражаю огромную благодарность компании Рольф. Подобрали отличный
              автомобиль на аукционе Copart и выиграли лот дешевле чем я
              рассчитывал. Спасибо! Вы реальные профики! Советую!!!!»
            </p>
          </SwiperSlide>
          <SwiperSlide className="reviews__wrap__inner__slide swiper-slide">
            <div className="reviews__wrap__inner__slide__header">
              <div className="reviews__wrap__inner__slide__header__info">
                <p className="reviews__wrap__inner__slide__header__info__name">
                  Анна
                </p>
                <img
                  src="icons/kz.png"
                  alt="flag"
                  className="reviews__wrap__inner__slide__header__info__country kz-flag"
                />
              </div>
            </div>
            <p className="reviews__wrap__inner__slide__text">
              «Решили рискнуть и заказать автомобиль с аукциона Америки. Друзья
              посоветовали компанию ING Auto. Были приятно удивлены сервисом от
              подбора автомобиля, участия на аукционе и доставкой в Уральск.
              Быстро, классно, и не дорого. Рекомендуем.»
            </p>
          </SwiperSlide>
        </Swiper>
        </div>
          <a
            href="https://wa.me/+995571030000"
            target="_blank"
            className="reviews__btn"
          >
            <div className="reviews__btn__contain">
              <div className="reviews__btn__contain__text">Оставить отзыв</div>
              <svg className="reviews__btn__contain__icon">
                <use xlinkHref="#arrow-link" />
              </svg>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
