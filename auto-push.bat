@echo off
echo.
echo 🔄 Enviando alterações para o GitHub...

git add .
git commit -m "Auto: %date% %time%"
git push origin main

echo ✅ Código enviado com sucesso!
pause
