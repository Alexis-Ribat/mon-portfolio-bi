Write-Host "Generation du site..." -ForegroundColor Cyan
hugo
git add .
$message = Read-Host "Message de la mise a jour (Entree pour 'Update')"
if ($message -eq "") { $message = "Update rapide" }
git commit -m "$message"
Write-Host "Envoi vers GitHub..." -ForegroundColor Cyan
git push origin main
Write-Host "Termine ! Le site sera a jour dans 2 minutes." -ForegroundColor Green
