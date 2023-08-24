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
                            KZ 
                        </button>
                        <div className={`dropdown-content ${btn ? 'show' : ''}`}>
                            <a href="/">
                                RU
                            </a>
                            <a href="index_ge">
                                GE
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
                                Көлікке тапсырыс беріңіз
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
                            <span>ING AUTO.</span> АҚШ пен Канаданың Грузиядағы ресми автокөлік аукциондары! <br />{' '}
                            Copart, Manheim, IAAI.
                        </h1>
                        <div
                            className="promo__wrap__btn"
                            data-modal="deliveryBtn">
                            Көлікке тапсырыс беріңіз
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
                        <span>Біз </span> туралы
                    </h2>
                    <div className="about__divider-mob divider" />
                    <div className="about__wrap">
                        <div className="about__wrap__content">
                            <h2 className="about__wrap__content__title title">
                                <span>Біз </span> туралы
                            </h2>
                            <div className="about__wrap__content__divider divider" />
                            <p className="about__wrap__content__text">
                            ING Auto сізге АҚШ пен Канададағы аукциондарда ең жақсы автокөлікті алуға көмектеседі. Қазіргі уақытта біздің компания Грузияда, Қазақстанда, АҚШ-та және Канадада ұсынылған.
                            </p>
                            <p className="about__wrap__content__text">
                            Біз Copart, Manheim және IAAI сияқты АҚШ және Канадалық автокөлік аукциондарына жоғары сапалы брокерлік және логистикалық қызметтерді ұсынуға маманданамыз.
                            </p>
                            <p
                                className="about__wrap__content__text"
                                id="aboutTextOne">
                            Біздің мамандар тобының біліктілігі жоғары, ал біздің қызметіміз тұтынушыларға барынша жайлылық пен тиімділік ұсынады. Біз сізге дұрыс көлікті табуға, толық тексеру жүргізуге және жоғары деңгейде қызмет көрсетуге көмектесеміз.
                            </p>
                            <p
                                className="about__wrap__content__text"
                                id="aboutTextTwo">
                            Біз сіздің лотыңызды ең жақсы бағамен ұтып алуыңызға кепілдік береміз, автомобильді АҚШ-тан жеткізуді мүмкіндігінше тез ұйымдастырамыз және барлық қажетті құжаттарды дайындаймыз. ING Auto тұтынушылары аукцион барысын онлайн бақылай алады.
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
                            <span>Аукциондар</span> <br /> және олардың артықшылықтары{' '}
                            </h2>
                            <p className="auctions__wrap__header__description">
                            Copart, Manheim және IAAI аукциондары АҚШ-тағы ең ірі аукциондар болып табылады. Бұл сайттар АҚШ-тың жетекші сақтандыру компанияларының көлік құралдарының әртүрлі тізімін ұсынады, соның ішінде ең аз немесе үлкен зақымдалған, сондай-ақ зақымдалмаған көліктер.
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
                                        Аукцион «Copart»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    Copart - көліктер «сол қалпында» сатылатын әлемдегі ең ірі автосақтандыру Аукциондар. Бұл автомобильдердің алдын ала сатылымға жатпайтынын және олар аукционға түскен күйінде сатылғанын білдіреді. Бұл аукционда сіз көлікті ең төмен бағамен таба аласыз. Аукцион қызметкерлері автокөлікті сатуға шығарған кезде оның жағдайына өзгеріс енгізбейді.
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
                                        Аукцион «Manheim»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    Манхайм - жабық түрдегі сақтандыру Аукциондар, онда тек уәкілетті дилерлер мен аккредиттелген компаниялар ғана қатысуға рұқсат етіледі. Манхаймның бір ерекшелігі – бұл аукциондағы заттар әдетте бүлінбейді, мінсіз күйде және жөндеуді қажет етпейді. Ұсынылатын аукциондардың қолжетімділігі мен сапасы шектеулі болғандықтан, Manheim көліктері кез келген аукционның ең жоғары бағасын басқарады. Бұл аукцион тамаша жағдайда көліктердің тартымды таңдауымен назар аударады.
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
                                        Аукцион «IAA-Insurance»
                                    </h3>
                                    <p className="auctions__wrap__list__item__content__text">
                                    IAA-Insurance – сақтандыру төлемдеріне қатысушыларға айналған көлік құралдарын сатуға мамандандырылған аукцион. Бұл аукционда сіз «сол қалпында» және сатуға дайындалған көліктерді де таба аласыз. «IAA-Insurance» компаниясында бұзылған көліктерді қалпына келтірумен айналысатын өз механиктер тобы бар. Нәтижесінде, кейбір автомобиль үлгілері орындалған жөндеу жұмыстарына және пайдалануға толық дайын болуына байланысты жоғары бағаға ие болуы мүмкін. Бұл аукцион сақтандыру төлемдеріне тартылған және жұмысқа жарамды күйіне келтірілген көліктерді сатып алуға мүмкіндік береді.
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
                                    АҚШ-тағы автоматты сәйкестік
                                </h3>
                                <img
                                    src="images/key.jpeg"
                                    alt="image"
                                    className="service__wrap__content__header__image"
                                />
                            </div>
                            <div className="service__wrap__content__info">
                                <p className="service__wrap__content__info__title">
                                Автоматты сәйкестендіру процесі келесі қадамдарды қамтиды:
                                </p>
                                <ul className="service__wrap__content__info__list">
                                    <li className="service__wrap__content__info__list__item">
                                    1. Біз тұтынушылардың талаптарына сәйкес келетін көліктердің ең жақсы нұсқаларын мұқият таңдаймыз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    2. Біз автомобильдің техникалық жағдайына нақты баға береміз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    3. Біз АҚШ-тағы автокөлік тарихын тексереміз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    4. Автокөліктің заңды тазалығын тексереміз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    5. Біз сатушы үнсіз қалуы мүмкін алдыңғы зақымдар мен жазатайым оқиғаға қатысуын тексереміз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    6. Біз сатушының сенімділігін тексереміз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    7. Біз барлық зақымдарды ескере отырып, автокөліктің нақты құнын бағалаймыз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    8. Қажет болса, қажетті жөндеу жұмыстарын ұйымдастырамыз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    9. Біз көлікті баратын елге (Ресей, Қазақстан, Армения) жөнелтеміз.
                                    </li>
                                    <li className="service__wrap__content__info__list__item">
                                    10. Біз сауда-саттықты онлайн бақылау үшін қонақтарға қолжетімділікті қамтамасыз етеміз.
                                    </li>
                                </ul>
                                <p className="service__wrap__content__info__text">
                                Біз {price}$ сомасына ұсынылған максималды аукциондық ұсыныс туралы қорытындымен көлік құралын толық тексеруді ұсынамыз. Бұл қызмет сізге сенімді бағалауды алуға және автокөлік сатып алудан барынша пайда алуға мүмкіндік береді. Біз әрқашан тұтынушыларымызға сенімді және тиімді автокөлік сатып алуды қамтамасыз етуге тырысамыз.
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
                                                Сұрақ қою
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
                                                Көлікке тапсырыс беріңіз
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
                            <span>Көлікке тапсырыс беріңіз</span> ИЗ&nbsp;USA
                            ПОД&nbsp;КЛЮЧ
                        </h2>
                        <p className="order__wrap__text">
                            В стоимость услуги входит:
                        </p>
                        <ul className="order__wrap__list">
                            <li className="order__wrap__list__item">
                                <div>◉</div> Автоматты таңдау в USA
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
                                            Сұрақ қою
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
                                            Көлікке тапсырыс беріңіз
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
                        <span>Кепілдіктер</span>
                    </h2>
                    <div className="guarantee__wrap">
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-1.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon"
                            />
                            <p className="guarantee__wrap__item__description">
                            Автокөлікті таңдаудан бастап, оны алуға дейінгі бүкіл процесс ресми келісім-шартқа сәйкес жүзеге асырылады.
                            </p>
                        </div>
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-2.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon"
                            />
                            <p className="guarantee__wrap__item__description">
                            Автокөлікті сатып алу кезінде барлық заңды рәсімдер тапсырыс берушінің өтініші бойынша оның атына жүргізіледі. Барлық төлемдер ресми түрде банктік шот арқылы жүзеге асырылады.
                            </p>
                        </div>
                        <div className="guarantee__wrap__item">
                            <img
                                src="icons/guarantee-3.svg"
                                alt="icon"
                                className="guarantee__wrap__item__icon guarantee-icon-3"
                            />
                            <p className="guarantee__wrap__item__description">
                            Көлікті тасымалдау кезінде біз жүкті сақтандыру жүйесінің арқасында оның толық экономикалық қауіпсіздігін қамтамасыз етеміз. Бұл бізге ықтимал экономикалық шығындардан қорғауға кепілдік береді.
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
                                Жүктерді қадағалау
                            </h3>
                            <p className="tracking__wrap__info__text">
                            Көлігіңіздің орналасқан жерін бақылау үшін осы чатта көліктің лот нөмірі мен VIN кодын көрсету керек
                            </p>
                            <a
                                href="https://wa.me/+16619228531"
                                target="_blank"
                                className="tracking__wrap__info__btn">
                                <div className="tracking__wrap__info__btn__contain">
                                    <div className="tracking__wrap__info__btn__contain__text">
                                    Трек
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
                        Неліктен таңдау{' '}
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
                            Ресми <br /> компания
                            </h4>
                        </div>
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-2.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                            Ресми <br /> шарт
                            </h4>
                        </div>
                        <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-3.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                            Ресми <br /> төлем
                            </h4>
                        </div>
                        <div className="advantages__wrap__item advantage-blue">
                            <img
                                src="icons/advantage-4.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title advantage-blue-title">
                                Аукцион ONLINE
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
                            Фоторепортаж
                            </h4>
                        </div>
                        <div className="advantages__wrap__item">
                            <img
                                src="icons/advantage-7.svg"
                                alt="icon"
                                className="advantages__wrap__item__icon"
                            />
                            <h4 className="advantages__wrap__item__title">
                            Жеке <br /> менеджер
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
                            Кедендік рәсімдеу {' '}
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
                    <span>Біз жиі</span> сұраңыз
                    </h2>
                    <div className="faq__wrap">
                        <ul className="faq__wrap__inner">
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    АҚШ-тан көлікке қалай тапсырыс беруге болады?
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
                                    Америкадағы аукционнан автокөлікке тапсырыс беру үшін сізге қажет:
                                    </p>
                                    <ul className="faq__wrap__accardion__content__list">
                                        <li className="faq__wrap__accardion__content__list__item">
                                        1. Сізді қызықтыратын көліктің маркасы мен моделін таңдаңыз.
                                        </li>
                                        <li className="faq__wrap__accardion__content__list__item">
                                            2. Сатып алудың барлық мәліметтерін талқылау үшін тәжірибелі мамандарымызға хабарласыңыз.
                                        </li>
                                        <li className="faq__wrap__accardion__content__list__item">
                                            3. Қажетті қызметтерді төлеу.
                                        </li>
                                    </ul>
                                    <p className="faq__wrap__accardion__content__text">
                                    Бізге көлікпен жұмыс істеуді тапсырыңыз, сонда сіз тек нәтижеден ләззат аласыз!
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Көлік таңдау қалай өтеді?
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
                                    Сіздің тапсырысыңыз бойынша ING Auto мамандары тапсырыс берушінің критерийлеріне толық сәйкес келетін көлікті мұқият таңдайды. Біз ең аз зақымдалған автокөліктерді ұсынамыз және әрбір көліктің тарихын және заңды тазалығын егжей-тегжейлі тексереміз.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Төлем
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
                                    Автокөлікке тапсырыс беру кезінде сіз көлік құралының жалпы құнына кіретін сақтандыру жарнасын ғана төлейсіз.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    Лот сәтті ұтқаннан кейін клиент келесі күні сағат 13:00-ден кешіктірмей төлем жасауға міндетті.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    Шот-фактураға сәйкес сіз вагонның құнын, сондай-ақ аукциондық комиссияны және контейнерлік кеме тиелген порт терминалына тасымалдауды төлейсіз.
                                    </p>
                                    <p className="faq__wrap__accardion__content__text">
                                    Теңіз логистикасы көлік құралы белгіленген портқа (Поти) келген кезде төленеді.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Автокөлік жөндеу
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
                                    Көліктердің көпшілігі, шамамен 95% әртүрлі зақымдармен сатылады. Дегенмен, қаласаңыз, ING Auto сервисі түпнұсқа бөлшектерді пайдалана отырып, барлық стандарттарға сәйкес автокөлікті толық қалпына келтіруді жүзеге асырады. Біз сапалы жөндеуге және көлікті мұқият қалпына келтіруге кепілдік береміз.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Есептеу валютасы
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
                                    Біздің компаниядағы негізгі есеп айырысу валютасы АҚШ доллары (АҚШ доллары) болып табылады. Дегенмен, сізге ыңғайлы болу үшін біз Грузияның ұлттық валютасында – грузин лариінде (GEL), сондай-ақ Ресей рублінде (RUB) төлемді де қабылдаймыз. Бұл сіздің қажеттіліктеріңізге сәйкес келетін ең қолайлы төлем әдісін таңдауға мүмкіндік береді.
                                    </p>
                                </div>
                            </li>
                            <li className="faq__wrap__accardion">
                                <button
                                    className="faq__wrap__accardion__control"
                                    aria-expanded="false">
                                    <span className="faq__wrap__accardion__control__title">
                                    Аукционды қалай көруге болады?
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
                                    Біздің барлық тұтынушыларда аукционды қашықтан бақылау мүмкіндігі бар. Сауда-саттық процесін онлайн қадағалап, үйіңізде немесе кеңсеңізде отырып-ақ белсенді қатыса аласыз. Бұл ағымдағы тарифтерден хабардар болуға, нақты уақытта шешім қабылдауға және тарифтеріңізді өзіңізге ыңғайлы жерден реттеуге мүмкіндік береді. Біз аукционға қашықтықтан қатысуға мүмкіндік беретін қонақтарға рұқсат береміз.
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
                    <span>Біздің</span> контактілер
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
                                                ЛОГИСТИКАЛЫҚ АҚПАРАТ
                                                </p>
                                            </div>
                                            <a
                                                href="https://wa.me/+16619228531"
                                                target="_blank"
                                                className="contacts__phones__chat__btn">
                                                <div className="contacts__phones__chat__btn__contain">
                                                    <p className="contacts__phones__chat__btn__contain__text">
                                                    Жүкті қадағалаңыз
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
                                                Мекенжай
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
                                                Пошта
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
                                                ONLINE ЧАТ 24/7
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
                                    Компания жайлы
                                </a>
                            </li>
                            <li className="footer__wrap__list__item">
                                <a
                                    style={{ color: '#F9CC0B' }}
                                    href="#auctions"
                                    className="footer__wrap__list__item__link">
                                    Аукциондар
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
                                    Автоматты таңдау
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
                                    Кепілдіктер
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
                                    Сұрақ жауап
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
                                    Контактілер
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
                        © Барлық құқықтар сақталған «ING Auto»
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
                                Компания жайлы
                            </a>
                        </li>
                        <li className="menu__inner__nav__item">
                            <a
                                href="#auctions"
                                className="menu__inner__nav__item__link">
                                Аукциондар
                            </a>
                        </li>
                        <li className="menu__inner__nav__item">
                            <a
                                href="#service"
                                className="menu__inner__nav__item__link">
                                Автоматты таңдау
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
                                Кепілдіктер
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
                                Сұрақ жауап
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
                                Контактілер
                            </a>
                        </li>
                    </ul>
                    <div className="menu__inner__btn" data-modal="questionBtn">
                        Сұрақ қою
                    </div>
                </div>
            </div>
            {/* Modal Quetions  атоподбор после шапки*/}
            <div className="overlay overlay-question">
                <div className="modal">
                    <div className="modal__close">×</div>
                    <p className="modal__title">Кез келген сұрақ?</p>
                    <p className="modal__subtitle">
                        Сізге ыңғайлы жолмен бізге хабарласыңыз, біз сізге жақын арада жауап береміз!
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
                                -ге жазыңыз WhatsApp
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
                                -ге жазыңыз Telegram
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
                                -ге жазыңыз Instagram
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
                    <p className="modal__title">Көлікке тапсырыс беріңіз</p>
                    <p className="modal__subtitle">
                        Сізге ыңғайлы жолмен бізге хабарласыңыз, біз сізге жақын арада жауап береміз!
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
                                -ге жазыңыз WhatsApp
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
                                -ге жазыңыз Telegram
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
                                -ге жазыңыз Instagram
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
                    <p className="modal__title">Ынтымақтастық</p>
                    <p className="modal__subtitle">
                        Сізге ыңғайлы жолмен бізге хабарласыңыз, біз сізге жақын арада жауап береміз!
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
                                -ге жазыңыз WhatsApp
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
                                -ге жазыңыз Telegram
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
                                -ге жазыңыз Instagram
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
                        Сізге ыңғайлы жолмен бізге хабарласыңыз, біз сізге жақын арада жауап береміз!
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
                                -ге жазыңыз WhatsApp
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
                                -ге жазыңыз Telegram
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
                                -ге жазыңыз Instagram
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
