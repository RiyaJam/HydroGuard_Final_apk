@echo off
setlocal
cd /d "%~dp0.."
if not exist node_modules call npm install
call npm run prepare:android
if errorlevel 1 exit /b %errorlevel%
call npm run open
