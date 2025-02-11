@extends('template.ComproTemplate')
@section('content')
<section class="home d-flex flex-column">
    <x-Hero />
    <div class="artikel d-flex flex-column" id="artikel">
        <div class="header-section d-flex align-items-center ms-auto mt-2 mb-3 justify-content-center align-content-center">
            <h5> New's Artikel</h5>
        </div>
        <div class="artikel-list">
            <div class="background-circle" style="top: 3px; left: 1px;"></div>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    @for($i=0;$i<6;$i++)
                        <div class="swiper-slide">
                        <div class="card">
                            <img src="/assets/globe.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn ">Go somewhere</a>
                            </div>
                        </div>
                </div>
                @endfor
            </div>
            <div class="swiper-pagination mt-12"></div>
        </div>
    </div>
    </div>
    <div class="artikel d-flex flex-column" id="portofolio">
        <div class="background-circle" style="top: 3px; left: 1px;"></div>
        <div class="header-section d-flex align-items-center ms-auto mt-2 mb-3 justify-content-center align-content-center">
            <h5>Portofolio</h5>
        </div>
        <div class="artikel-list">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    @for($i=0;$i<6;$i++)
                        <div class="swiper-slide">
                        <div class="card">
                            <img src="/assets/globe.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn ">Go somewhere</a>
                            </div>
                        </div>
                </div>
                @endfor
            </div>
            <div class="swiper-pagination mt-12"></div>
        </div>
    </div>
    </div>
</section>
@endSection