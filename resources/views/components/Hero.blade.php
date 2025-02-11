@if(Route::currentRouteName() == 'home')
<div class="hero d-flex flex-column ">
    <canvas class="canvas" id="hero"></canvas>
</div>
@endif
@if (Route::currentRouteName() == 'about')
<div class="row abouthero d-flex flex-row align-items-center align-content-center justify-content-bettwen" style="background-image: url('/assets/bg2.png');">
    <div class="col d-flex flex-column p-5 text-white hero-text">
        <h4>Kolaborasi & Inovasi Menuju Prestasi!</h4>
        <h5>Badan Esekutif Mahasiswa Fakultas Ilmu Komputer</h5>
        <h5>Universitas Mercu Buana 2024/2025</h5>
    </div>
    <div class="col d-flex">
        <img src="{{asset('/assets/logo_fasilkom.png')}}" alt="" srcset="">
    </div>
</div>

@endif