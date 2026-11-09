@echo off
title Menjalankan Website Portofolio Ali Maksum 3D
echo ========================================================
echo   Menyalakan Server Portofolio 3D di Localhost...
echo ========================================================
set PATH=C:\Program Files\nodejs;%PATH%
start http://localhost:3000
npm run dev
pause
