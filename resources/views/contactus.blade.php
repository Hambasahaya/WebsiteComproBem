<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - BEM FASILKOM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/contactus.css') }}" rel="stylesheet">
    {{-- <style>
    </style> --}}
</head>
<body>
    @include('template.navbar')
    <div class="background-circle" style="top: 3px; left: 1px;"></div>
    <div class="container-fluid vh-100">
        <div class="row h-100">
            <div class="col-md-6 d-flex align-items-center justify-content-center">
                <div class="contact-form">
                    <h3 class="text-center">Let's Get in Touch</h3>
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label"></label>
                            <input type="text" class="form-control" id="name" placeholder="Nama">
                        </div>
                        <div class="mb-3">
                            <label for="contact" class="form-label"></label>
                            <input type="text" class="form-control" id="contact" placeholder="Email atau Nomor WhatsApp">
                        </div>
                        <button type="submit" class="btn custom-button">Kirim</button>
                    </form>
                </div>
            </div>
            <div class="col-md-6 map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.049782063011!2d106.73582983933817!3d-6.209770221379889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71f5a41c197%3A0x628259f9e8d6d7b4!2sUniversitas%20Mercu%20Buana!5e0!3m2!1sid!2sid!4v1736135327021!5m2!1sid!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>

    @include('template.footer')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
