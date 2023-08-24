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
                            EN 
                        </button>
                        <div className={`dropdown-content ${btn ? 'show' : ''}`}>
                            <a href="index_kz">
                                KZ
                            </a>
                            <a href="index_ge">
                                GE
                            </a>
                            <a href="/">
                                RU
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
                                Order a car
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
                            <span>ING AUTO.</span> Official car auctions of the USA and Canada in Georgia! <br />{' '}
                            Copart, Manheim, IAAI.
                        </h1>
                        <div
                            className="promo__wrap__btn"
                            data-modal="deliveryBtn">
                            Order a car
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
                        <span>About </span>Us
                    </h2>
                    <div className="about__divider-mob divider" />
                    <div className="about__wrap">
                        <div className="about__wrap__content">
                            <h2 className="about__wrap__content__title title">
                                <span>About </span>Us
                            </h2>
                            <div className="about__wrap__content__divider divider" />
                            <p className="about__wrap__content__text">
                            ING Auto will help you get the best car in the US and Canada auctions. Currently, our company is represented in Georgia, Kazakhstan, USA and Canada.
                            </p>
                            <p className="about__wrap__content__text">
                            We specialize in providing high quality brokerage and logistics services to US and Canadian car auctions such as Copart, Manheim and IAAI.
                            </p>
                            <p
                                className="about__wrap__content__text"
                                id="aboutTextOne">
                            Our team of specialists has a high level of qualification, and our service offers customers maximum comfort and benefit. We will help you find the right vehicle, conduct a full inspection and provide a high level of service.
                            </p>
                            <p
                                className="about__wrap__content__text"
                                id="aboutTextTwo">
                            We guarantee the winning of your lot at the best price, organize the shipment of the car from the USA as soon as possible and prepare all the necessary documents. ING Auto customers have the opportunity to follow the progress of the auction online.
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
                            <span>Auctions</span> <br /> and their benefits{' '}
                            </h2>
                            <p className="auctions__wrap__header__description">
                            Auctions Copart, Manheim and IAAI are the largest in the US. These sites offer a variety of vehicle listings from leading US insurance companies, including vehicles with minimal or major damage, as well as without damage.
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
                                        Auction «Copart»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    Copart is the world's largest auto insurance auction, where vehicles are sold "as is". This means that the cars are not pre-sales and are sold in the condition in which they entered the auction. At this auction you can find the car at the lowest price. The auction staff does not make changes to the condition of the car when it is put up for sale.
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
                                    Auction «Manheim»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    Manheim is a closed type insurance auction where only authorized dealers and accredited companies are allowed to bid. One of the features of Manheim is that the items in this auction are usually not damaged, are in perfect condition and do not require repairs. Due to the limited availability and quality of the auctions offered, Manheim vehicles command the highest prices of any auction. This auction draws attention with its attractive selection of vehicles in excellent condition.
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
                                        Auction «IAA-Insurance»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    IAA-Insurance is an auction specializing in the sale of vehicles that have become participants in insurance claims. At this auction, you can find both cars "as is" and those that have been prepared for sale. IAA-Insurance has its own team of mechanics who deal with the restoration of damaged vehicles. As a result, some car models may have a higher price due to the repair work performed and the complete readiness for operation. This auction provides an opportunity to purchase vehicles that have been involved in insurance claims and have been restored to working condition.
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
                                    Auto-match in USA
                                </h3>
                                <img
                                    src="images/key.jpeg"
                                    alt="image"
                                    className="service__wrap__content__header__image"
                                />
                            </div>
                            <div className="service__wrap__content__info">
                                <p className="service__wrap__content__info__title">
                                Our auto-match process includes the following steps:
                                </p>
                                <ul className="service__wrap__content__info__list">
                                    <li className="service__wrap__content__info__list__item">
                                    1. We carefully select the best options for vehicles that meet customer requirements.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    2. We carry out a real assessment of the technical condition of the car.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    3. We check the history of the car in the USA.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    4. We check the legal purity of the car.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    5. We check the presence of previous damage and participation in an accident, which the seller may be silent about.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    6. We check the reliability of the seller.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    7. We estimate the real value of the car, taking into account all the damage.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    8. We arrange the necessary repairs, if required.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    9. We ship the car to the country of destination (Russia, Kazakhstan, Armenia).
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    10. We provide guest access for online monitoring of trading.
                                    </li>
                                </ul>
                                <p className="service__wrap__content__info__text">
                                We offer a full vehicle inspection with a conclusion on the maximum recommended auction bid for {price}$. This service will allow you to get a reliable estimate and get the most out of your car purchase. We always strive to provide reliable and profitable automotive purchases to our customers.
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
                                                Ask a Question
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
                                                Order a car
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
                            <span>Order a car</span> ИЗ&nbsp;USA
                            ПОД&nbsp;КЛЮЧ
                        </h2>
                        <p className="order__wrap__text">
                            В стоимость услуги входит:
                        </p>
                        <ul className="order__wrap__list">
                            <li className="order__wrap__list__item">
                                <div>◉</div> Auto-selection в USA
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
                                            Ask a Question
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
                                            Order a car
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
                        <span>Guarantees</span>
                    </h2>
                    <div className="guarantee__wrap">
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-1.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon"
                            />
                            <p className="guarantee__wrap__item__description">
                            The whole process, from the selection of a car to its receipt, is carried out in accordance with an official contract.
                            </p>
                        </div>
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-2.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon"
                            />
                            <p className="guarantee__wrap__item__description">
                            When buying a car, all legal procedures are carried out in the name of the customer at his request. All payments are made officially through a bank account.
                            </p>
                        </div>
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-3.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon guarantee-icon-3"
                            />
                            <p className="guarantee__wrap__item__description">
                            During the transportation of the car, we ensure its complete economic security thanks to the cargo insurance system. This guarantees us protection from possible economic losses.
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
                                Cargo tracking
                            </h3>
                            <p className="tracking__wrap__info__text">
                            To track the location of your car, you must specify the lot number and VIN code of the vehicle in this chat
                            </p>
                            <a
                                href="https://wa.me/+16619228531"
                                target="_blank"
                                className="tracking__wrap__info__btn">
                                <div className="tracking__wrap__info__btn__contain">
                                    <div className="tracking__wrap__info__btn__contain__text">
                                    Track
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
                        Why choose{' '}
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
                            Official <br /> company
                            </h4>
                        </div>
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-2.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                            Official <br /> contract
                            </h4>
                        </div>
                        <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-3.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                            Official <br /> payment
                            </h4>
                        </div>
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-4.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                            Auction ONLINE
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
                            Photo report
                            </h4>
                        </div>
                        <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-7.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                            Personal <br /> manager
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
                            Customs <br /> clearance{' '}
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
                    <span>We are often</span> asked
                    </h2>
                    <div className="faq__wrap">
                        <ul className="faq__wrap__inner">
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    How to order a car from the USA?
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
                                    To order a car from an auction in America, you will need:
                                    </p>
                                    <ul className="faq__wrap__accardion__content__list">
                                        <li className="faq__wrap__accardion__content__list__item">
                                        1. Select the make and model of the car you are interested in.
                                        </li>
                                        <li className="faq__wrap__accardion__content__list__item">
                                        2. Contact our experienced specialists to discuss all the details of the purchase.
                                        </li>
                                        <li className="faq__wrap__accardion__content__list__item">
                                        3. Pay for the necessary services.
                                        </li>
                                    </ul>
                                    <p className="faq__wrap__accardion__content__text">
                                    Entrust us with all the work with the car, and you will only have to enjoy the result!
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    How is the selection of a car?
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
                                    According to your order, ING Auto experts carefully select a vehicle that perfectly matches the customer's criteria. We offer cars with minimal damage and carry out a detailed check of the history and legal cleanliness of each vehicle.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Payment
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
                                    When placing an order for a car, you pay only the insurance premium, which is included in the total cost of the vehicle.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    After the successful winning of the lot, the customer is obliged to make payment no later than 13:00 the next day.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    According to the invoice, you pay the cost of the car, as well as the auction fee and transportation to the port terminal, where the container ship is loaded.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    Sea logistics is paid upon arrival of the vehicle at the designated port (Poti).
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Car repair
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
                                    Most cars, about 95%, are sold with various damages. However, if you wish, ING Auto service will carry out a complete restoration of the car in accordance with all standards, using original parts. We guarantee quality repairs and careful vehicle restoration to your satisfaction.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Calculation currency
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
                                    The main settlement currency in our company is the US dollar (USD). However, for your convenience, we also accept payment in the national currency of Georgia - the Georgian lari (GEL), as well as in the Russian ruble (RUB). This allows you to choose the most convenient payment method that suits your needs.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    How to watch the auction?
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
                                    All our customers have the possibility of remote monitoring of the auction. You can follow the bidding process online and take an active part from the comfort of your home or office. This allows you to stay up to date with current rates, make real-time decisions and adjust your rates from a location that is convenient for you. We provide guest access, which allows you to participate in the auction from a distance.
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
                    <span>Our</span> contacts
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
                                                    LOGISTICS INFO
                                                </p>
                                            </div>
                                            <a
                                                href="https://wa.me/+16619228531"
                                                target="_blank"
                                                className="contacts__phones__chat__btn">
                                                <div className="contacts__phones__chat__btn__contain">
                                                    <p className="contacts__phones__chat__btn__contain__text">
                                                    Track the cargo
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
                                                    Address
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
                                                    Mail
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
                                                ONLINE CHAT 24/7
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
                                    About company
                                </a>
                            </li>
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#auctions"
                                    className="footer__wrap__list__item__link">
                                    Auctions
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
                                    Auto-selection
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
                                    Guarantees
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
                                    Question answer
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
                                    Contacts
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
                        © All rights reserved «ING Auto»
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
                                About company
                            </a>
                        </li>
                        <li className="menu__inner__nav__item">
                            <a
                                href="#auctions"
                                className="menu__inner__nav__item__link">
                                Auctions
                            </a>
                        </li>
                        <li className="menu__inner__nav__item">
                            <a
                                href="#service"
                                className="menu__inner__nav__item__link">
                                Auto-selection
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
                                Guarantees
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
                                Question answer
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
                                Contacts
                            </a>
                        </li>
                    </ul>
                    <div className="menu__inner__btn" data-modal="questionBtn">
                        Ask a Question
                    </div>
                </div>
            </div>
            {/* Modal Quetions  атоподбор после шапки*/}
            <div className="overlay overlay-question">
                <div className="modal">
                    <div className="modal__close">×</div>
                    <p className="modal__title">Any questions?</p>
                    <p className="modal__subtitle">
                        Contact us in a convenient way for you and we will answer you shortly!
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
                                Write to WhatsApp
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
                                Write to Telegram
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
                                Write to Instagram
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
                    <p className="modal__title">Order a car</p>
                    <p className="modal__subtitle">
                        Contact us in a convenient way for you and we will answer you shortly!
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
                                Write to WhatsApp
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
                                Write to Telegram
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
                                Write to Instagram
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
                    <p className="modal__title">Cooperation</p>
                    <p className="modal__subtitle">
                        Contact us in a convenient way for you and we will answer you shortly!
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
                                Write to WhatsApp
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
                                Write to Telegram
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
                                Write to Instagram
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
                        Contact us in a convenient way for you and we will answer you shortly!
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
                                Write to WhatsApp
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
                                Write to Telegram
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
                                Write to Instagram
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
