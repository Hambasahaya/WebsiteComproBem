<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio - BEM FASILKOM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="{{ asset('css/portofolio.css') }}" rel="stylesheet">
</head>

<body>
    @include('template.navbar')
    <div class="container mt-5">
        <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner text-center">
                <div class="carousel-item active">
                    <div class="d-flex flex-row justify-content-center align-items-center p-3">
                        <img src="https://via.placeholder.com/300x250" class="rounded me-3" alt="Image 1">
                        <div>
                            <h4 class="fw-bold">LOREM</h4>
                            <p>Deskripsi proyek atau informasi lainnya.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-row justify-content-center align-items-center p-3">
                        <img src="https://via.placeholder.com/300x250" class="rounded me-3" alt="Image 2">
                        <div>
                            <h4 class="fw-bold">LOREM</h4>
                            <p>Contoh deskripsi kedua.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex flex-row justify-content-center align-items-center p-3">
                        <img src="https://via.placeholder.com/300x250" class="rounded me-3" alt="Image 3">
                        <div>
                            <h4 class="fw-bold">LOREM</h4>
                            <p>Contoh deskripsi ketiga.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-controls">
                <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="0" class="active">
                    <i class="bi bi-circle-fill"></i>
                </button>
                <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="1">
                    <i class="bi bi-circle-fill"></i>
                </button>
                <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="2">
                    <i class="bi bi-circle-fill"></i>
                </button>
            </div>
        </div>
    </div>


    @include('template.footer')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.querySelectorAll('.carousel-controls button').forEach((button, index) => {
            button.addEventListener('click', function() {
                document.querySelector('.carousel-controls .active').classList.remove('active');
                this.classList.add('active');
            });
        });

        const carousel = document.getElementById('customCarousel');
        carousel.addEventListener('slide.bs.carousel', (event) => {
            const buttons = document.querySelectorAll('.carousel-controls button');
            buttons.forEach(button => button.classList.remove('active'));
            buttons[event.to].classList.add('active');
        });
    </script>
</body>

</html>