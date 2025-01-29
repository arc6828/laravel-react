<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        <style>
            .card-img-top {
                height: 300px;  /* กำหนดความสูงให้เท่ากัน */
                object-fit: cover; /* ครอบรูปให้พอดี */
            }
        </style>
        <style>
            /* เพิ่มปุ่มลอย */
            .floating-btn {
                position: fixed;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                /* ให้ปุ่มลอยอยู่เหนือทุกวัตถุ */
                color: black;
                font-size: 25px;
                font-weight: 900;
                border-radius: 20px;
                width: 80%;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                text-align : center;
            }
    
            .floating-btn:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
