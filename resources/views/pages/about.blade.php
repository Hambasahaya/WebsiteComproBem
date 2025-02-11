@extends('template.ComproTemplate')
@section('content')
<x-Hero></x-Hero>
<section class="d-flex flex-column sectionabout">
    <canvas id="cloudCanvas" class="canvas"></canvas>
    <div class="aboutsection">
        <div class="container">
            <div class="row d-flex flex-row ">
                <div class="col-4 d-flex justify-content-center align-items-center align-content-center flex-column">
                    <img src="/assets/logo_fasilkom.png" alt="">
                </div>
                <div class="col-8 d-flex justify-content-center align-items-center align-content-center">
                    <p>
                        Kabinet <i>VERITAS STATERA</i> Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer Universitas Mercu Buana 2024/2025 berfokus pada nilai kebenaran (Veritas) dan keseimbangan (Statera). Kami berkomitmen menjadi wadah aspirasi mahasiswa serta mendorong sinergi positif dalam teknologi, akademik, dan pengembangan karakter. Melalui program inovatif dan kegiatan sosial, kami percaya bahwa keseimbangan ilmu pengetahuan dan kepedulian sosial adalah kunci untuk membentuk mahasiswa yang kompeten dan berdaya saing, serta memperjuangkan hak-hak mereka dalam kegiatan akademis maupun non-akademis.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex p-4" id="vision" style="background-image: url('/assets/bg2.png');">
        <div class="col-12 p-4 d-flex align-items-center justify-content-center">
            <img src="{{asset('/assets/vw.gif')}}" alt="" srcset="">
            <div class="card visicard w-60 mb-3 p-4 ">
                <div class="card-body">
                    <h5 class="card-title">Visi</h5>
                    <p class="card-text">Mewujudkan BEM Fasilkom Sebagai wadah mahasiswa untuk berkarya dan
                        berperan pemanfaatan teknologi informasi, serta berkolaborasi secara
                        inklusif untuk mewadahi mahasiswa</p>
                </div>
            </div>
        </div>
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="card visicard w-60 mb-3 p-4">
                <div class="card-body">
                    <h5 class="card-title">Misi</h5>
                    <p class="card-text">
                        Kami berkomitmen untuk meningkatkan kesejahteraan mahasiswa serta responsif terhadap isu-isu teknologi dan sosial. Membangun serta menjalin hubungan harmonis dan kolaborasi yang baik dijalin dengan seluruh organisasi mahasiswa, baik di dalam Universitas Mercu Buana maupun di luar kampus. Selain itu, kami secara aktif melaksanakan penelitian, menyebarkan ilmu pengetahuan dan teknologi,
                        serta melakukan pengabdian kepada masyarakat untuk membantu meningkatkan taraf hidup mereka. Kami juga berfokus pada peningkatan pemahaman mahasiswa tentang pentingnya pengembangan intelektual yang kritis sebagai upaya untuk meningkatkan kualitas Fakultas Ilmu Komputer.
                    </p>
                </div>
            </div>
            <img src="{{asset('/assets/target.gif')}}" alt="" srcset="">
        </div>
    </div>

    <div class="members d-flex">
        <canvas id="members">
        </canvas>
        <div class="swiper mySwiper members-list">
            <div class="swiper-wrapper">
                @for($i=0;$i<20;$i++)
                    <div class="swiper-slide">
                    <div class="card">
                        <img src="/assets/testmembers.png" class="card-img-top" alt="...">
                    </div>
            </div>
            @endfor
        </div>
        <div class="swiper-pagination mt-10"></div>
    </div>
</section>
@endSection