import Head from 'next/head'

import React, { useEffect, useState } from 'react'
import Reviews from '@/components/Layouts/Reviews'
import { getPrice } from '@/lib/api_price'

import MainCont from '@/components/main'

export default function Home() {
    const [price, setPrice] = useState()
    
    const [btn, setBtn] = useState()
    const pushBtn = () => {
        setBtn(!btn);
    }


    console.log(
        'Eminem and Fscoiety https://youtu.be/qb2rm5ja5JM, hello kits, I`m number one',
    )
    useEffect(() => {
      const getData = async () => {
        try {
          const result = await getPrice();
          setPrice(result.price);
        } catch (error) {
          console.error(error);
          throw new Error('Fsociety API with me');
        }
      };
      getData();

    //   const script_one = document.createElement('script');
    //   script_one.src = '/js/script.js';
    //   script_one.async = true;
    //   document.body.appendChild(script_one);
 
    //   return()=>{
    //     document.body.removeChild(script_one)
    //   }
    }, []);
    return (
        <MainCont>


            <header className="header">
                <div className="container">
                    <div className="header__wrap">
                        <a href="" className="header__wrap__logo white-logo">
                            <img
                                src="images/ing.png"
                                alt="Rolf Georgia Logo"
                                className="header__wrap__logo__icon"
                            />
                        </a>
                        <a
                            href=""
                            className="header__wrap__logo blue-logo logo-dn">
                            <img
                                src="images/ing-auto-logo.png"
                                alt="Rolf Georgia Logo"
                                className="header__wrap__logo__icon"
                            />
                        </a>
                        <div className="header__wrap__content">
                        <button
                        style={{color:'#F9CC0B'}}
                        className="dropbtn" onClick={pushBtn}>
                            GE 
                        </button>
                        <div className={`dropdown-content ${btn ? 'show' : ''}`}>
                            <a href="index_kz">
                                KZ
                            </a>
                            <a href="/">
                                RU
                            </a>
                            <a href="index_en">
                                EN
                            </a>
                        </div>
                            <div className="dropdown">
                                <div
                                    id="myDropdown"
                                    className="dropdown-content mtDrop">
                                </div>
                            </div>
                            <div
                                className="header__wrap__content__callback"
                                data-modal="deliveryBtn">
                                შეუკვეთე მანქანა
                            </div>
                            <div className="header__wrap__content__hamburger">
                                <span className="header__wrap__content__hamburger__span" />
                                <span className="header__wrap__content__hamburger__span" />
                                <span className="header__wrap__content__hamburger__span" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="promo">
                <div className="container">
                    <div className="promo__wrap">
                        <h1 className="promo__wrap__title">
                            <span>ING AUTO.</span> ოფიციალური ავტომობილი
                            ამერიკისა და კანადის აუქციონები საქართველოში! <br />{' '}
                            Copart, Manheim, IAAI.
                        </h1>
                        <div
                            className="promo__wrap__btn"
                            data-modal="deliveryBtn">
                            შეუკვეთე მანქანა
                        </div>
                    </div>
                </div>
                <img
                    src="images/head.jpg"
                    alt="car"
                    className="promo__photo-mob"
                />
            </section>
            <section
                className="about"
                id="about"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <h2 className="about__title-mob title">
                        <span>ჩვენს </span> შესახებ
                    </h2>
                    <div className="about__divider-mob divider" />
                    <div className="about__wrap">
                        <div className="about__wrap__content">
                            <h2 className="about__wrap__content__title title">
                                <span>ჩვენს </span> შესახებ
                            </h2>
                            <div className="about__wrap__content__divider divider" />
                            <p className="about__wrap__content__text">
                            ING Auto დაგეხმარებათ მიიღოთ საუკეთესო მანქანა აშშ-სა და კანადის აუქციონებზე. ამჟამად ჩვენი კომპანია წარმოდგენილია საქართველოში, ყაზახეთში, აშშ-სა და კანადაში.
                            </p>
                            <p className="about__wrap__content__text">
                            ჩვენ სპეციალიზირებული ვართ მაღალი ხარისხის საბროკერო და ლოგისტიკური სერვისების მიწოდებაში აშშ-სა და კანადის მანქანების აუქციონებზე, როგორიცაა Copart, Manheim და IAAI.
                            </p>
                            <p
                                className="about__wrap__content__text"
                                id="aboutTextOne">
                            ჩვენი სპეციალისტების გუნდს აქვს მაღალი დონის კვალიფიკაცია და ჩვენი სერვისი მომხმარებელს მაქსიმალურ კომფორტსა და სარგებელს სთავაზობს. ჩვენ დაგეხმარებით სწორი ავტომობილის პოვნაში, სრულ ინსპექტირებაში და მაღალი დონის სერვისის მიწოდებაში.
                            </p>
                            <p
                                className="about__wrap__content__text"
                                id="aboutTextTwo">
                            ჩვენ გარანტიას ვაძლევთ თქვენი ლოტის მოგებას საუკეთესო ფასად, ვაწყობთ მანქანის გაგზავნას ამერიკიდან რაც შეიძლება მალე და მოვამზადებთ ყველა საჭირო დოკუმენტს. ING Auto-ს მომხმარებლებს საშუალება აქვთ ონლაინ თვალყური ადევნონ აუქციონის მიმდინარეობას.
                            </p>
                        </div>
                        <img
                            src="images/us.avif"
                            alt="About photo"
                            className="about__wrap__photo"
                        />
                    </div>
                </div>
            </section>
            <section
                className="auctions"
                id="auctions"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <div className="auctions__wrap">
                        <div className="auctions__wrap__header">
                            <h2 className="auctions__wrap__header__title title">
                                <span>აუქციონები</span> <br /> და მათი უპირატესობები{' '}
                            </h2>
                            <p className="auctions__wrap__header__description">
                            აუქციონები Copart, Manheim და IAAI ყველაზე დიდია აშშ-ში. ეს საიტები გვთავაზობენ მანქანების სხვადასხვა ჩამონათვალს აშშ-ს წამყვანი სადაზღვევო კომპანიებისგან, მათ შორის მანქანების მინიმალური ან დიდი დაზიანებით, ასევე დაზიანების გარეშე.
                            </p>
                        </div>
                        <div className="auctions__wrap__list">
                            <div className="auctions__wrap__list__item">
                                <img
                                    src="images/copart.webp"
                                    alt="copart"
                                    className="auctions__wrap__list__item__image copart"
                                />
                                <div className="auctions__wrap__list__item__content">
                                    <h3 className="auctions__wrap__list__item__content__title">
                                    აუქციონი «Copart»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    Copart არის მსოფლიოში უდიდესი ავტოდაზღვევის აუქციონი, სადაც მანქანები იყიდება "როგორც არის". ეს ნიშნავს, რომ მანქანები არ არის წინასწარი გაყიდვა და იყიდება იმ მდგომარეობაში, რა მდგომარეობაშიც მოხვდნენ აუქციონზე. ამ აუქციონზე შეგიძლიათ იპოვოთ მანქანა ყველაზე დაბალ ფასად. აუქციონის პერსონალი არ ცვლის მანქანის მდგომარეობას გასაყიდად გატანისას.
                                    </p>
                                </div>
                            </div>
                            <div className="auctions__wrap__list__item">
                                <img
                                    src="images/manheim.webp"
                                    alt="manheim"
                                    className="auctions__wrap__list__item__image manheim"
                                />
                                <div className="auctions__wrap__list__item__content">
                                    <h3 className="auctions__wrap__list__item__content__title">
                                    აუქციონი «Manheim»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    Manheim არის დახურული ტიპის სადაზღვევო აუქციონი, სადაც მხოლოდ ავტორიზებულ დილერებსა და აკრედიტებულ კომპანიებს შეუძლიათ განაცხადონ. Manheim-ის ერთ-ერთი მახასიათებელია ის, რომ ამ აუქციონზე ნივთები, როგორც წესი, არ არის დაზიანებული, არის იდეალურ მდგომარეობაში და არ საჭიროებს რემონტს. შემოთავაზებული აუქციონების შეზღუდული ხელმისაწვდომობისა და ხარისხის გამო, მანჰეიმის მანქანებს აქვთ ყველაზე მაღალი ფასები ნებისმიერ აუქციონზე. ეს აუქციონი ყურადღებას იქცევს საუკეთესო მდგომარეობაში მყოფი მანქანების მიმზიდველი არჩევანით.
                                    </p>
                                </div>
                            </div>
                            <div className="auctions__wrap__list__item">
                                <img
                                    src="images/iaa.webp"
                                    alt="iaa"
                                    className="auctions__wrap__list__item__image iaa"
                                />
                                <div className="auctions__wrap__list__item__content">
                                    <h3 className="auctions__wrap__list__item__content__title">
                                    აუქციონი «IAA-Insurance»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    IAA-Insurance არის აუქციონი, რომელიც სპეციალიზირებულია იმ მანქანების გაყიდვაში, რომლებიც გახდნენ სადაზღვევო პრეტენზიების მონაწილეები. ამ აუქციონზე შეგიძლიათ იხილოთ როგორც ავტომობილები „როგორც არის“, ასევე გასაყიდად გამზადებული. IAA-დაზღვევას ჰყავს მექანიკოსების საკუთარი გუნდი, რომლებიც დაზიანებული მანქანების რესტავრაციას ეწევიან. შედეგად, მანქანის ზოგიერთ მოდელს შეიძლება ჰქონდეს უფრო მაღალი ფასი შესრულებული სარემონტო სამუშაოების და ექსპლუატაციისთვის სრული მზადყოფნის გამო. ეს აუქციონი იძლევა შესაძლებლობას შეიძინოს მანქანები, რომლებიც მონაწილეობდნენ სადაზღვევო პრეტენზიებში და აღდგენილი არიან სამუშაო მდგომარეობაში.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="service"
                id="service"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <div className="service__wrap">
                        <img
                            src="images/auto-selection.webp"
                            alt="image"
                            className="service__wrap__image"
                        />
                        <div className="service__wrap__content">
                            <div className="service__wrap__content__header">
                                <h3
                                    className="service__wrap__content__header__title"
                                    style={{ color: '#F9CC0B' }}>
                                    ავტომატური მატჩი აშშ-ში
                                </h3>
                                <img
                                    src="images/key.jpeg"
                                    alt="image"
                                    className="service__wrap__content__header__image"
                                />
                            </div>
                            <div className="service__wrap__content__info">
                                <p className="service__wrap__content__info__title">
                                ჩვენი ავტომატური მატჩის პროცესი მოიცავს შემდეგ ნაბიჯებს:
                                </p>
                                <ul className="service__wrap__content__info__list">
                                    <li className="service__wrap__content__info__list__item">
                                    1. ჩვენ ყურადღებით ვირჩევთ საუკეთესო ვარიანტებს მანქანებისთვის, რომლებიც აკმაყოფილებს მომხმარებლის მოთხოვნებს.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    2. ვახორციელებთ მანქანის ტექნიკური მდგომარეობის რეალურ შეფასებას.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    3. ვამოწმებთ მანქანის ისტორიას აშშ-ში.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    4. ვამოწმებთ მანქანის კანონიერ სისუფთავეს.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    5. ჩვენ ვამოწმებთ წინა დაზიანების არსებობას და ავარიაში მონაწილეობას, რაზეც გამყიდველი შესაძლოა ჩუმად იყოს.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    6. ჩვენ ვამოწმებთ გამყიდველის სანდოობას.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    7. ვაფასებთ მანქანის რეალურ ღირებულებას ყველა ზარალის გათვალისწინებით.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    8. საჭიროების შემთხვევაში ვაწყობთ საჭირო რემონტს.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    9. მანქანას ვაგზავნით დანიშნულების ქვეყანაში (რუსეთი, ყაზახეთი, სომხეთი).
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    10. ჩვენ ვუზრუნველყოფთ სტუმრის წვდომას ვაჭრობის ონლაინ მონიტორინგისთვის.
                                    </li>
                                </ul>
                                <p className="service__wrap__content__info__text">
                                ჩვენ გთავაზობთ ავტომობილის სრულ ინსპექტირებას დასკვნამდე მაქსიმალურ რეკომენდებულ აუქციონზე {price}$-ად. ეს სერვისი საშუალებას მოგცემთ მიიღოთ საიმედო შეფასება და მიიღოთ მაქსიმალური სარგებლობა თქვენი მანქანის შეძენისგან. ჩვენ ყოველთვის ვცდილობთ მივაწოდოთ საიმედო და მომგებიანი საავტომობილო შესყიდვები ჩვენს მომხმარებლებს.
                                </p>
                                <div className="service__wrap__content__info__btns">
                                    <div
                                        target="_blank"
                                        className="service__wrap__content__info__btns__question"
                                        data-modal="questionBtn">
                                        <div className="service__wrap__content__info__btns__question__contain">
                                            <div
                                                className="service__wrap__content__info__btns__question__contain__text"
                                                style={{ color: '#0C1D36' }}>
                                                Დასვი კითხვა
                                            </div>
                                            <svg className="service__wrap__content__info__btns__question__contain__icon">
                                                <use xlinkHref="#arrow-link" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className="service__wrap__content__info__btns__delivery"
                                        data-modal="deliveryBtn">
                                        <div className="service__wrap__content__info__btns__delivery__contain">
                                            <div
                                                className="service__wrap__content__info__btns__delivery__contain__text"
                                                style={{ color: '#0C1D36' }}>
                                                შეუკვეთე მანქანა
                                            </div>
                                            <svg className="service__wrap__content__info__btns__delivery__contain__icon">
                                                <use xlinkHref="#arrow-link" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section
                className="bargaining"
                id="bargaining"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <h2 className="bargaining__title title">
                        <span>Наблюдайте за торгами онлайн</span>
                        <br /> и делайте ставки в реальном времени!
                    </h2>
                    <div className="bargaining__wrap">
                        <div className="bargaining__wrap__swiper mySwiper">
                            <div className="bargaining__wrap__swiper__inner swiper-wrapper">
                                <div className="bargaining__wrap__swiper__inner__slide swiper-slide">
                                    <img
                                        style={{ borderRadius: '8px' }}
                                        className="bargaining__wrap__swiper__inner__slide__link__image"
                                        alt="image"
                                        src="images/zal.webp"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bargaining__wrap__content">
                            <h3
                                className="bargaining__wrap__content__title"
                                style={{ color: '#F9CC0B' }}>
                                Торги
                            </h3>
                            <div className="bargaining__wrap__content__divider" />
                            <p className="bargaining__wrap__content__text">
                                На&nbsp;момент проведения аукциона нашим
                                клиентам мы&nbsp;предоставляем гостевой доступ
                                к&nbsp;аукциону, где&nbsp;вы&nbsp;сможете
                                наблюдать за&nbsp;торгами в&nbsp;режиме ONLINE.
                                Также&nbsp;вы&nbsp;можете присутствовать
                                в&nbsp;LOUNGE ZONE нашей компании
                                и&nbsp;регулировать ставками в&nbsp;реальном
                                времени. Работа брокера будет происходить
                                на&nbsp;ваших глазах. Нашим приоритетом
                                является, выигрыш вашего лучшего лота
                                по&nbsp;минимальной цене. В&nbsp;LOUNGE ZONE
                                вам&nbsp;будут предложены прохладительные
                                напитки, кофе, элитные алкогольные напитки.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section
                className="order"
                id="order"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <div className="order__wrap">
                        <img
                            src="images/u.jpg"
                            alt="photo"
                            className="order__wrap__photo"
                        />
                        <h2 className="order__wrap__title">
                            <span>შეუკვეთე მანქანა</span> ИЗ&nbsp;USA
                            ПОД&nbsp;КЛЮЧ
                        </h2>
                        <p className="order__wrap__text">
                            В стоимость услуги входит:
                        </p>
                        <ul className="order__wrap__list">
                            <li className="order__wrap__list__item">
                                <div>◉</div> ავტომატური შერჩევა в USA
                            </li>
                            <li className="order__wrap__list__item">
                                <div>◉</div> Персональный менеджер
                            </li>
                            <li className="order__wrap__list__item">
                                <div>◉</div> Техническая и юридическая
                                проверка&nbsp;ТС
                            </li>
                            <li className="order__wrap__list__item">
                                <div>◉</div> Выигрыш лота на аукционе
                            </li>
                            <li className="order__wrap__list__item">
                                <div>◉</div> Транзакция
                            </li>
                            <li className="order__wrap__list__item">
                                <div>◉</div> Отправка автомобиля в&nbsp;Грузию
                            </li>
                            <li className="order__wrap__list__item">
                                <div>◉</div> Юридическое сопровождение
                            </li>
                        </ul>
                        <div className="order__wrap__info">
                            <div className="order__wrap__info__btns">
                                <div
                                    target="_blank"
                                    className="order__wrap__info__btns__question"
                                    data-modal="questionBtn">
                                    <div className="order__wrap__info__btns__question__contain">
                                        <div className="order__wrap__info__btns__question__contain__text">
                                            Დასვი კითხვა
                                        </div>
                                        <svg className="order__wrap__info__btns__question__contain__icon">
                                            <use xlinkHref="#arrow-link" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    target="_blank"
                                    className="order__wrap__info__btns__delivery"
                                    data-modal="deliveryBtn">
                                    <div className="order__wrap__info__btns__delivery__contain">
                                        <div
                                            className="order__wrap__info__btns__delivery__contain__text"
                                            style={{ color: '#F9CC0B' }}>
                                            შეუკვეთე მანქანა
                                        </div>
                                        <svg className="order__wrap__info__btns__delivery__contain__icon">
                                            <use xlinkHref="#arrow-link" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="order__wrap__info__price">
                                700 $
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div style={{ backgroundColor: '#A5C8FF2E' }}>
                <section
                    className="delivery"
                    id="delivery"
                    style={{ backgroundColor: '#cdd4ee82;' }}>
                    <div className="container">
                        <h2 className="delivery__title title">
                            <span>Доставка автомобилей из USA</span> <br />{' '}
                            осуществляется морским путем (SEA&nbsp;TRANSPORT)
                        </h2>
                        <img
                            src="images/sheap.jpg"
                            alt="ship"
                            className="delivery__photo"
                        />
                        <div className="delivery__wrap">
                            <div className="delivery__wrap__content">
                                <div className="delivery__wrap__content__time">
                                    <p className="delivery__wrap__content__time__text">
                                        Среднее время в пути составляет
                                    </p>
                                    <div className="delivery__wrap__content__time__days">
                                        45-70 дней
                                    </div>
                                </div>
                                <p className="delivery__wrap__content__title">
                                    Транспортировка происходит
                                    в&nbsp;2&nbsp;этапа:
                                </p>
                                <ul className="delivery__wrap__content__list">
                                    <li className="delivery__wrap__content__list__item">
                                        <div className="delivery__wrap__content__list__item__step">
                                            1
                                        </div>
                                        <p className="delivery__wrap__content__list__item__description">
                                            От площадки до порта
                                        </p>
                                    </li>
                                    <li className="delivery__wrap__content__list__item">
                                        <div className="delivery__wrap__content__list__item__step">
                                            2
                                        </div>
                                        <p className="delivery__wrap__content__list__item__description">
                                            От порта загрузки <br /> до порта
                                            назначения Поти (Грузия)
                                        </p>
                                    </li>
                                </ul>
                                <p className="delivery__wrap__content__text">
                                    При&nbsp;загрузке автомобиля
                                    в&nbsp;контейнер мы&nbsp;предоставляем
                                    фото-видео отчёт. Стандартная компоновка
                                    контейнера 4/1 4&nbsp;автомобиля
                                    в&nbsp;одном контейнере. По&nbsp;прибытию
                                    автомобиля в&nbsp;порт назначения
                                    производится экспертиза автомобиля,
                                    после&nbsp;чего наши специалисты подготовят
                                    пакет документов для&nbsp;дальнейшей
                                    растаможки автомобиля в&nbsp;Грузии, России,
                                    Казахстане, Армении, Киргизии а&nbsp;также
                                    для&nbsp;других стран по&nbsp;желанию
                                    заказчика под&nbsp;ключ.
                                </p>
                            </div>
                            <div className="delivery__wrap__info">
                                <div className="delivery__wrap__info__time">
                                    <p className="delivery__wrap__info__time__description">
                                        Среднее время <br /> в пути составляет
                                    </p>
                                    <div className="delivery__wrap__info__time__days">
                                        45-70 дней
                                    </div>
                                </div>
                                <img
                                    src="images/delivery.webp"
                                    alt="image"
                                    className="delivery__wrap__info__image"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
            {/* <section
                className="car"
                id="car-service"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <div className="car__wrap">
                        <div className="car__wrap__info">
                            <h3
                                className="car__wrap__info__title"
                                style={{ color: '#F9CC0B' }}>
                                Технический центр
                            </h3>
                            <div className="car__wrap__info__divider" />
                            <p className="car__wrap__info__text">
                                Технический центр компании ING Auto осуществляет
                                полное восстановление автомобиля в короткие
                                сроки.
                            </p>
                            <p className="car__wrap__info__description">
                                Мы восстанавливаем:
                            </p>
                            <ul className="car__wrap__info__list">
                                <li className="car__wrap__info__list__item">
                                    — кузовные элементы
                                </li>
                                <li className="car__wrap__info__list__item">
                                    — подушки безопасности
                                </li>
                                <li className="car__wrap__info__list__item">
                                    — ходовую часть
                                </li>
                                <li className="car__wrap__info__list__item">
                                    — трансмиссию
                                </li>
                                <li className="car__wrap__info__list__item">
                                    — лакокрасочное покрытие
                                </li>
                            </ul>
                            <p className="car__wrap__info__text">
                                Все работы проводятся специалистами высокого
                                уровня используя запасные части оригинальных
                                производителей.
                            </p>
                        </div>
                        <img
                            style={{ borderRadius: '8px' }}
                            src="images/teh.jpg"
                            alt="photo"
                            className="car__wrap__image"
                        />
                    </div>
                </div>
            </section> */}
            <section
                className="guarantee"
                id="guarantee"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <h2 className="guarantee__title title">
                        <span>გარანტიები</span>
                    </h2>
                    <div className="guarantee__wrap">
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-1.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon"
                            />
                            <p className="guarantee__wrap__item__description">
                            მთელი პროცესი, მანქანის შერჩევიდან მის მიღებამდე, მიმდინარეობს ოფიციალური ხელშეკრულების შესაბამისად.
                            </p>
                        </div>
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-2.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon"
                            />
                            <p className="guarantee__wrap__item__description">
                            მანქანის შეძენისას ყველა ლეგალური პროცედურა ხორციელდება მომხმარებლის სახელით მისი მოთხოვნით. ყველა გადახდა ხდება ოფიციალურად საბანკო ანგარიშის მეშვეობით.
                            </p>
                        </div>
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-3.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon guarantee-icon-3"
                            />
                            <p className="guarantee__wrap__item__description">
                            ავტომობილის გადაზიდვისას ჩვენ უზრუნველვყოფთ მის სრულ ეკონომიკურ უსაფრთხოებას ტვირთის დაზღვევის სისტემის წყალობით. ეს გარანტიას გვაძლევს დაცვას შესაძლო ეკონომიკური ზარალებისგან.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section
                className="logistic"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <div className="logistic__wrap">
                        <div className="logistic__wrap__info">
                            <h3
                                className="logistic__wrap__info__title"
                                style={{ color: '#F9CC0B' }}>
                                Логистика в&nbsp;регионы{' '}
                            </h3>
                            <p className="logistic__wrap__info__text">
                                Компания ING Auto осуществляет логистику (доставку
                                транспортных средств) из&nbsp;Грузии
                                на&nbsp;современных автовозах в&nbsp;Казахстан,
                                Россию, Киргизию а&nbsp;также в&nbsp;страны
                                Европы. Логистика выполняется
                                на&nbsp;современных автотраках, соблюдая
                                все&nbsp;регламенты международных
                                автотранспортных перевозок.
                            </p>
                        </div>
                        <img
                            src="images/autovoz.jpg"
                            alt="photo"
                            className="logistic__wrap__photo"
                        />
                    </div>
                </div>
            </section> */}
            <section
                className="tracking"
                id="tracking"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <div className="tracking__wrap">
                        <img
                            src="images/tracking.webp"
                            alt="phone"
                            className="tracking__wrap__image"
                        />
                        <div className="tracking__wrap__info">
                            <h3
                                className="tracking__wrap__info__title"
                                style={{ color: '#F9CC0B' }}>
                                ტვირთის თვალყურის დევნება
                            </h3>
                            <p className="tracking__wrap__info__text">
                            თქვენი მანქანის ადგილმდებარეობის თვალყურის დევნებისთვის, ამ ჩატში უნდა მიუთითოთ მანქანის ლოტის ნომერი და VIN კოდი
                            </p>
                            <a
                                href="https://wa.me/+16619228531"
                                target="_blank"
                                className="tracking__wrap__info__btn">
                                <div className="tracking__wrap__info__btn__contain">
                                    <div className="tracking__wrap__info__btn__contain__text">
                                    სიმღერა
                                    </div>
                                    <svg className="tracking__wrap__info__btn__contain__icon">
                                        <use xlinkHref="#arrow-link" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="advantages"
                id="advantages"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <h2
                        className="advantages__title title"
                        style={{ color: '#0C1D36' }}>
                        რატომ აირჩიოს{' '}
                        <span style={{ color: '#F9CC0B', fontWeight: 600 }}>
                            ING Auto
                        </span>
                    </h2>
                    <div className="advantages__wrap">
                        <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-1.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                            ოფიციალური <br /> კომპანია
                            </h4>
                        </div>
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-2.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                            ოფიციალური <br /> ხელშეკრულება
                            </h4>
                        </div>
                        <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-3.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                            ოფიციალური <br /> გადახდა
                            </h4>
                        </div>
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-4.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                            აუქციონი ონლაინ
                            </h4>
                        </div>
                        {/* <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-5.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                                Быстрая доставка
                            </h4>
                        </div> */}
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-6.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                            ფოტორეპორტაჟი
                            </h4>
                        </div>
                        <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-7.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                            პირადი <br /> მენეჯერი
                            </h4>
                        </div>
                        {/* <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-8.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                                Lounge zone
                            </h4>
                        </div> */}
                        {/* <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-9.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                                Собственный <br /> сервис
                            </h4>
                        </div> */}
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-10.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                            განბაჟება{' '}
                            </h4>
                        </div>
                        {/* <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-11.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                                Гарантия
                            </h4>
                        </div> */}
                    </div>
                </div>
            </section>
            <section
                className="faq"
                id="faq"
                style={{ backgroundColor: '#A5C8FF2E' }}>
                <div className="container">
                    <h2 className="faq__title title">
                        <span>ჩვენ ხშირად</span> იკითხე
                    </h2>
                    <div className="faq__wrap">
                        <ul className="faq__wrap__inner">
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    როგორ შეუკვეთოთ მანქანა ამერიკიდან?
                                    </span>
                                    <span className="faq__wrap__accardion__control__icon">
                                        <img
                                            src="icons/pluse.svg"
                                            className="faq__icon"
                                            alt="icon"
                                        />
                                    </span>
                                </button>
                                <div
                                    className="faq__wrap__accardion__content"
                                    aria-hidden="true">
                                    <p className="faq__wrap__accardion__content__text">
                                        ამერიკაში აუქციონზე მანქანის შეკვეთისთვის დაგჭირდებათ:
                                    </p>
                                    <ul className="faq__wrap__accardion__content__list">
                                        <li className="faq__wrap__accardion__content__list__item">
                                        1. აირჩიეთ თქვენთვის საინტერესო მანქანის მარკა და მოდელი.
                                        </li>
                                        <li className="faq__wrap__accardion__content__list__item">
                                        2. დაუკავშირდით ჩვენს გამოცდილ სპეციალისტებს შესყიდვის ყველა დეტალის განსახილველად.
                                        </li>
                                        <li className="faq__wrap__accardion__content__list__item">
                                        3. გადაიხადეთ საჭირო მომსახურებისთვის.
                                        </li>
                                    </ul>
                                    <p className="faq__wrap__accardion__content__text">
                                    ანდეთ მანქანასთან დაკავშირებული ყველა სამუშაო და თქვენ მოგიწევთ მხოლოდ შედეგით ისიამოვნოთ!
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    როგორ ხდება მანქანის შერჩევა?
                                    </span>
                                    <span className="faq__wrap__accardion__control__icon">
                                        <img
                                            src="icons/pluse.svg"
                                            className="faq__icon"
                                            alt="icon"
                                        />
                                    </span>
                                </button>
                                <div
                                    className="faq__wrap__accardion__content"
                                    aria-hidden="true">
                                    <p className="faq__wrap__accardion__content__text">
                                    თქვენი შეკვეთის მიხედვით, ING Auto ექსპერტები ყურადღებით ირჩევენ ავტომობილს, რომელიც სრულყოფილად შეესაბამება მომხმარებლის კრიტერიუმებს. ჩვენ ვთავაზობთ მანქანებს მინიმალური დაზიანებით და ვახორციელებთ თითოეული მანქანის ისტორიისა და კანონიერი სისუფთავის დეტალურ შემოწმებას.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    გადახდა
                                    </span>
                                    <span className="faq__wrap__accardion__control__icon">
                                        <img
                                            src="icons/pluse.svg"
                                            className="faq__icon"
                                            alt="icon"
                                        />
                                    </span>
                                </button>
                                <div
                                    className="faq__wrap__accardion__content"
                                    aria-hidden="true">
                                    <p className="faq__wrap__accardion__content__text">
                                    მანქანის შეკვეთის გაფორმებისას იხდით მხოლოდ სადაზღვევო პრემიას, რომელიც შედის მანქანის მთლიან ღირებულებაში.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    ლოტის წარმატებით მოგების შემდეგ მომხმარებელი ვალდებულია გადახდა განახორციელოს არაუგვიანეს მეორე დღის 13:00 საათისა.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    ინვოისის მიხედვით იხდით მანქანის ღირებულებას, ასევე აუქციონის საფასურს და ტრანსპორტირებას პორტის ტერმინალამდე, სადაც იტვირთება საკონტეინერო გემი.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    საზღვაო ლოგისტიკის გადახდა ხდება დანიშნულ პორტში (ფოთში) ავტომობილის ჩასვლისას.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Მანქანის შეკეთება
                                    </span>
                                    <span className="faq__wrap__accardion__control__icon">
                                        <img
                                            src="icons/pluse.svg"
                                            className="faq__icon"
                                            alt="icon"
                                        />
                                    </span>
                                </button>
                                <div
                                    className="faq__wrap__accardion__content"
                                    aria-hidden="true">
                                    <p className="faq__wrap__accardion__content__text">
                                    მანქანების უმეტესობა, დაახლოებით 95%, იყიდება სხვადასხვა დაზიანებით. თუმცა სურვილის შემთხვევაში ING Auto სერვისი განახორციელებს ავტომობილის სრულ რესტავრაციას ყველა სტანდარტის დაცვით ორიგინალი ნაწილების გამოყენებით. ჩვენ გარანტიას ვაძლევთ ხარისხის შეკეთებას და ავტომობილის ფრთხილად აღდგენას თქვენს კმაყოფილებაზე.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    საანგარიშო ვალუტა
                                    </span>
                                    <span className="faq__wrap__accardion__control__icon">
                                        <img
                                            src="icons/pluse.svg"
                                            className="faq__icon"
                                            alt="icon"
                                        />
                                    </span>
                                </button>
                                <div
                                    className="faq__wrap__accardion__content"
                                    aria-hidden="true">
                                    {/* <p className="faq__wrap__accardion__content__text">
                                        Валюта расчета USD.
                                    </p> */}
                                    <p className="faq__wrap__accardion__content__text">
                                    ჩვენს კომპანიაში ძირითადი ანგარიშსწორების ვალუტა არის აშშ დოლარი (USD). თუმცა, თქვენი მოხერხებულობისთვის, ჩვენ ასევე ვიღებთ გადახდას საქართველოს ეროვნულ ვალუტაში - ქართულ ლარში (ლარში), ასევე რუსულ რუბლში (RUB). ეს საშუალებას გაძლევთ აირჩიოთ გადახდის ყველაზე მოსახერხებელი მეთოდი, რომელიც შეესაბამება თქვენს საჭიროებებს.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    როგორ ვუყუროთ აუქციონს?
                                    </span>
                                    <span className="faq__wrap__accardion__control__icon">
                                        <img
                                            src="icons/pluse.svg"
                                            className="faq__icon"
                                            alt="icon"
                                        />
                                    </span>
                                </button>
                                <div
                                    className="faq__wrap__accardion__content"
                                    aria-hidden="true">
                                    <p className="faq__wrap__accardion__content__text">
                                    ყველა ჩვენს მომხმარებელს აქვს აუქციონის დისტანციური მონიტორინგის შესაძლებლობა. თქვენ შეგიძლიათ თვალყური ადევნოთ სატენდერო პროცესს ონლაინ და მიიღოთ აქტიური მონაწილეობა თქვენი სახლის ან ოფისის კომფორტიდან. ეს საშუალებას გაძლევთ იყოთ განახლებული მიმდინარე ტარიფების შესახებ, მიიღოთ გადაწყვეტილებები რეალურ დროში და შეცვალოთ თქვენი ტარიფები თქვენთვის მოსახერხებელი ადგილიდან. ჩვენ უზრუნველვყოფთ სტუმრების წვდომას, რაც საშუალებას გაძლევთ აუქციონში მონაწილეობა მიიღოთ შორიდან.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <Reviews /> */}

            <section
                style={{ backgroundColor: '#A5C8FF2E' }}
                className="contacts"
                id="contacts">
                <div className="container">
                    <h2 className="contacts__title title">
                    <span>ჩვენი</span> კონტაქტები
                    </h2>
                    <div className="contacts__wrap">
                        <div className="tab__wrap tabcontainer">
                            <div className="tabcontent hide show fade">
                                <div className="tabcontent__inner">
                                    <div className="contacts__phones">
                                        <div className="contacts__phones__chat">
                                            <div className="contacts__phones__chat__header">
                                                <img
                                                    src="icons/chat.svg"
                                                    alt="icon"
                                                    className="contacts__phones__chat__header__icon"
                                                />
                                                <p className="contacts__phones__chat__header__text">
                                                ლოჯისტიკის ინფორმაცია
                                                </p>
                                            </div>
                                            <a
                                                href="https://wa.me/+16619228531"
                                                target="_blank"
                                                className="contacts__phones__chat__btn">
                                                <div className="contacts__phones__chat__btn__contain">
                                                    <p className="contacts__phones__chat__btn__contain__text">
                                                    აკონტროლეთ ტვირთი
                                                    </p>
                                                    <svg className="contacts__phones__chat__btn__contain__icon">
                                                        <use xlinkHref="#arrow-link" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contacts__info">
                                        <div className="contacts__info__address">
                                            <div className="contacts__info__address__header">
                                                <img
                                                    src="icons/map.svg"
                                                    alt="icon"
                                                    className="contacts__info__address__header__icon"
                                                />
                                                <p className="contacts__info__address__header__text">
                                                მისამართი
                                                </p>
                                            </div>
                                            <p className="contacts__info__address__text">
                                                Georgia, Tbilisi, Atskuri 70
                                            </p>
                                        </div>
                                        <div className="contacts__info__email">
                                            <div className="contacts__info__email__header">
                                                <img
                                                    src="icons/email.svg"
                                                    alt="icon"
                                                    className="contacts__info__email__header__icon"
                                                />
                                                <p className="contacts__info__email__header__text">
                                                ფოსტა
                                                </p>
                                            </div>
                                            <a
                                                href="mailto:rolf.tbilisi@gmail.com"
                                                className="contacts__info__email__link">
                                                ingauto@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contacts__messengers">
                                        <div className="contacts__messengers__header">
                                            <img
                                                src="icons/messengers.svg"
                                                alt="icon"
                                                className="contacts__messengers__header__icon"
                                            />
                                            <p className="contacts__messengers__header__text">
                                            ონლაინ ᲡᲐᲡᲐᲣᲑᲠᲝ 24/7
                                            </p>
                                        </div>
                                        <div className="contacts__messengers__inner">
                                            <a
                                                href="https://wa.me/+995571030000"
                                                target="_blank"
                                                className="contacts__messengers__whatsapp">
                                                <div className="contacts__messengers__whatsapp__contain">
                                                    <div className="contacts__messengers__whatsapp__contain__header">
                                                        <img
                                                            src="icons/whatsapp.svg"
                                                            alt="logo"
                                                            className="contacts__messengers__whatsapp__contain__header__logo"
                                                        />
                                                        <div className="contacts__messengers__whatsapp__contain__header__text">
                                                            WhatsApp
                                                        </div>
                                                    </div>
                                                    <svg className="contacts__messengers__whatsapp__contain__icon">
                                                        <use xlinkHref="#arrow-link" />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a
                                                href="https://t.me/rolfautoimport"
                                                target="_blank"
                                                className="contacts__messengers__telegram">
                                                <div className="contacts__messengers__telegram__contain">
                                                    <div className="contacts__messengers__telegram__contain__header">
                                                        <img
                                                            src="icons/telegram.svg"
                                                            alt="logo"
                                                            className="contacts__messengers__telegram__contain__header__logo"
                                                        />
                                                        <div className="contacts__messengers__telegram__contain__header__text">
                                                            Telegram
                                                        </div>
                                                    </div>
                                                    <svg className="contacts__messengers__telegram__contain__icon">
                                                        <use xlinkHref="#arrow-link" />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a
                                                href="viber://chat?number=%2B995571030000"
                                                target="_blank"
                                                className="contacts__messengers__viber">
                                                <div className="contacts__messengers__viber__contain">
                                                    <div className="contacts__messengers__viber__contain__header">
                                                        <img
                                                            // style={{width:'30px'}}
                                                            src="icons/instagram.svg"
                                                            alt="logo"
                                                            className="contacts__messengers__viber__contain__header__logo"
                                                        />
                                                        <div className="contacts__messengers__viber__contain__header__text">
                                                            Instagram
                                                        </div>
                                                    </div>
                                                    <svg className="contacts__messengers__viber__contain__icon">
                                                        <use xlinkHref="#arrow-link" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrap">
                        <a href="" className="footer__wrap__logo">
                            <img
                                src="images/ing-auto-logo.png"
                                alt="Rolf Georgia"
                                className="footer__wrap__logo__icon"
                            />
                        </a>
                        <ul className="footer__wrap__list">
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#about"
                                    className="footer__wrap__list__item__link">
                                    კომპანიის შესახებ
                                </a>
                            </li>
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#auctions"
                                    className="footer__wrap__list__item__link">
                                    აუქციონები
                                </a>
                            </li>
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#advantages"
                                    className="footer__wrap__list__item__link">
                                    Преимущества
                                </a>
                            </li> */}
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#bargaining"
                                    className="footer__wrap__list__item__link">
                                    Торги
                                </a>
                            </li> */}
                        </ul>
                        <ul className="footer__wrap__list">
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#service"
                                    className="footer__wrap__list__item__link">
                                    ავტომატური შერჩევა
                                </a>
                            </li>
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#order"
                                    className="footer__wrap__list__item__link">
                                    Заказ автомобиля
                                </a>
                            </li> */}
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#delivery"
                                    className="footer__wrap__list__item__link">
                                    Доставка и растаможка
                                </a>
                            </li> */}
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#guarantee"
                                    className="footer__wrap__list__item__link">
                                    გარანტიები
                                </a>
                            </li>
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#car-service"
                                    className="footer__wrap__list__item__link">
                                    Технический центр
                                </a>
                            </li> */}
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#cooperation"
                                    className="footer__wrap__list__item__link">
                                    Сотрудничество
                                </a>
                            </li> */}
                        </ul>
                        <ul className="footer__wrap__list">
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#investments"
                                    className="footer__wrap__list__item__link">
                                    Инвестиции
                                </a>
                            </li> */}
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#faq"
                                    className="footer__wrap__list__item__link">
                                    Კითხვა პასუხი
                                </a>
                            </li>
                            {/* <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#reviews"
                                    className="footer__wrap__list__item__link">
                                    Отзывы
                                </a>
                            </li> */}
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#contacts"
                                    className="footer__wrap__list__item__link">
                                    კონტაქტები
                                </a>
                            </li>
                        </ul>
                        <div className="footer__wrap__contacts">
                            <a
                                style={{ color: '#F9CC0B' }}
                                href="https://wa.me/+995571030000"
                                target="_blank"
                                className="footer__wrap__contacts__item">
                                WhatsApp
                            </a>
                            <a
                                style={{ color: '#F9CC0B' }}
                                href="https://t.me/rolfautoimport"
                                target="_blank"
                                className="footer__wrap__contacts__item">
                                Telegram
                            </a>
                            <a
                                style={{ color: '#F9CC0B' }}
                                href="viber://chat?number=%2B995571030000"
                                target="_blank"
                                className="footer__wrap__contacts__item">
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="footer__divider" />
                    <p
                        className="footer__copyright"
                        style={{ color: '#F9CC0B' }}>
                        © Ყველა უფლება დაცულია «ING Auto»
                    </p>
                    <p
                        className="footer__copyright"
                        style={{ color: '#F9CC0B' }}>
                        2023
                    </p>
                </div>
            </footer>
            {/* Menu */}
            <div className="menu ">
                <div className="menu__inner">
                    <ul className="menu__inner__nav">
                        <li className="menu__inner__nav__item">
                            <a
                                href="#about"
                                className="menu__inner__nav__item__link">
                                კომპანიის შესახებ
                            </a>
                        </li>
                        <li className="menu__inner__nav__item">
                            <a
                                href="#auctions"
                                className="menu__inner__nav__item__link">
                                აუქციონები
                            </a>
                        </li>
                        <li className="menu__inner__nav__item">
                            <a
                                href="#service"
                                className="menu__inner__nav__item__link">
                                ავტომატური შერჩევა
                            </a>
                        </li>
                        {/* <li className="menu__inner__nav__item">
                            <a
                                href="#advantages"
                                className="menu__inner__nav__item__link">
                                Преимущества
                            </a>
                        </li> */}
                        {/* <li className="menu__inner__nav__item">
                            <a
                                href="#bargaining"
                                className="menu__inner__nav__item__link">
                                Торги
                            </a>
                        </li> */}
                        {/* <li className="menu__inner__nav__item">
                            <a
                                href="#order"
                                className="menu__inner__nav__item__link">
                                Заказ автомобиля
                            </a>
                        </li> */}
                        {/* <li className="menu__inner__nav__item">
                            <a
                                href="#delivery"
                                className="menu__inner__nav__item__link">
                                Доставка и растаможка
                            </a>
                        </li> */}
                        <li className="menu__inner__nav__item">
                            <a
                                href="#guarantee"
                                className="menu__inner__nav__item__link">
                                გარანტიები
                            </a>
                        </li>
                        {/* <li className="menu__inner__nav__item">
                            <a
                                href="#car-service"
                                className="menu__inner__nav__item__link">
                                Технический центр
                            </a>
                        </li> */}
                        <li className="menu__inner__nav__item">
                            <a
                                href="#faq"
                                className="menu__inner__nav__item__link">
                                Კითხვა პასუხი
                            </a>
                        </li>
                        {/* <li className="menu__inner__nav__item">
                            <a
                                href="#reviews"
                                className="menu__inner__nav__item__link">
                                Отзывы
                            </a>
                        </li> */}
                        <li className="menu__inner__nav__item">
                            <a
                                href="#contacts"
                                className="menu__inner__nav__item__link">
                                კონტაქტები
                            </a>
                        </li>
                    </ul>
                    <div className="menu__inner__btn" data-modal="questionBtn">
                        Დასვი კითხვა
                    </div>
                </div>
            </div>
            {/* Modal Quetions  атоподбор после шапки*/}
            <div className="overlay overlay-question">
                <div className="modal">
                    <div className="modal__close">×</div>
                    <p className="modal__title">რაიმე შეკითხვა?</p>
                    <p className="modal__subtitle">
                        დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით და ჩვენ მალე გიპასუხებთ!
                    </p>
                    <a
                        href="https://wa.me/+995557800007"
                        target="_blank"
                        className="modal__social modal-whatsapp">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/whatsapp.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ WhatsApp
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="https://t.me/rolfauction"
                        target="_blank"
                        className="modal__social modal-telegram">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/telegram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Telegram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="viber://chat?number=%2B995557800007"
                        target="_blank"
                        className="modal__social modal-viber">
                        <div className="modal__social__wrap">
                            <img
                                style={{ width: '30px' }}
                                src="icons/instagram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Instagram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* Modal Delivery  шапка профиля*/}
            <div className="overlay overlay-delivery">
                <div className="modal">
                    <div className="modal__close">×</div>
                    <p className="modal__title">შეუკვეთე მანქანა</p>
                    <p className="modal__subtitle">
                        დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით და ჩვენ მალე გიპასუხებთ!
                    </p>
                    <a
                        href="https://wa.me/+995571030000"
                        target="_blank"
                        className="modal__social modal-whatsapp">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/whatsapp.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ WhatsApp
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="https://t.me/rolfautoimport"
                        target="_blank"
                        className="modal__social modal-telegram">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/telegram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Telegram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="viber://chat?number=%2B995571030000"
                        target="_blank"
                        className="modal__social modal-viber">
                        <div className="modal__social__wrap">
                            <img
                                style={{ width: '30px' }}
                                src="icons/instagram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Instagram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* Modal Cooperation  стать партнером*/}
            <div className="overlay overlay-cooperation">
                <div className="modal">
                    <div className="modal__close">×</div>
                    <p className="modal__title">თანამშრომლობა</p>
                    <p className="modal__subtitle">
                        დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით და ჩვენ მალე გიპასუხებთ!
                    </p>
                    <a
                        href="https://wa.me/+995571030000"
                        target="_blank"
                        className="modal__social modal-whatsapp">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/whatsapp.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ WhatsApp
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="https://t.me/rolfauction"
                        target="_blank"
                        className="modal__social modal-telegram">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/telegram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Telegram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="viber://chat?number=%2B995571030000"
                        target="_blank"
                        className="modal__social modal-viber">
                        <div className="modal__social__wrap">
                            <img
                                style={{ width: '30px' }}
                                src="icons/instagram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Instagram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* Modal Investments стать инвестором*/}
            <div className="overlay overlay-investments">
                <div className="modal">
                    <div className="modal__close">×</div>
                    <p className="modal__title">Инвесторам</p>
                    <p className="modal__subtitle">
                        დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით და ჩვენ მალე გიპასუხებთ!
                    </p>
                    <a
                        href="https://wa.me/+995571030000"
                        target="_blank"
                        className="modal__social modal-whatsapp">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/whatsapp.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ WhatsApp
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="https://t.me/rolfauction"
                        target="_blank"
                        className="modal__social modal-telegram">
                        <div className="modal__social__wrap">
                            <img
                                src="icons/telegram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Telegram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                    <a
                        href="viber://chat?number=%2B995571030000"
                        target="_blank"
                        className="modal__social modal-viber">
                        <div className="modal__social__wrap">
                            <img
                                style={{ width: '30px' }}
                                src="icons/instagram.svg"
                                alt="social media"
                                className="modal__social__icon"
                            />
                            <p className="modal__social__wrap__text">
                                მიწერეთ Instagram
                            </p>
                        </div>
                        <svg className="modal__social__link">
                            <use xlinkHref="#arrow-link" />
                        </svg>
                    </a>
                </div>
            </div>

        </MainCont>
    )
}
