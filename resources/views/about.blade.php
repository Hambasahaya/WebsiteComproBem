<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - BEM FASILKOM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="{{ asset('css/about.css') }}" rel="stylesheet">
</head>
<body>
    @include('template.navbar')

    <div class="hero-section text-start">
        <h1>Mengenai <br>BEM FASILKOM <br>Universitas Mercu Buana <br>2024</h1>
        <img src="{{ asset('assets/logo_fasilkom.png') }}" alt="Logo" class="img-fluid">
    </div>

    <div class="cloud-section text-center">
        <h2>BEM FASILKOM</h2>
        <img src="{{ asset('assets/cloud.png') }}" alt="Cloud Image" class="img-fluid">
        <div class="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div class="overlay-image">
            <img src="{{ asset('assets/tes.png') }}" alt="Overlay Image" class="img-fluid">
        </div>
    </div>

    <div class="container py-5">
        <div class="row mb-5">
            <div class="col-12">
                <div class="d-flex gap-3 align-items-center">
                    <h2 class="section-title mb-0">VISI</h2>
                    <div class="d-flex flex-column flex-grow-1">
                        <div class="program-item">PROGRAM KERJA</div>
                        <div class="program-item">PROGRAM KERJA</div>
                        <div class="program-item">PROGRAM KERJA</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-12">
                <div class="d-flex gap-3 align-items-center">
                    <h2 class="section-title mb-0">MISI</h2>
                    <div class="d-flex flex-column flex-grow-1">
                        <div class="program-item">PROGRAM KERJA</div>
                        <div class="program-item">PROGRAM KERJA</div>
                        <div class="program-item">PROGRAM KERJA</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="header-section">
        <h1>LOREM IPSUM DOLOR SIT AMET</h1>
    </div>

    @include('template.footer')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
