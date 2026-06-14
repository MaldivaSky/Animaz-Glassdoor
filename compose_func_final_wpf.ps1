Add-Type -AssemblyName System.Drawing

$width = 1920
$height = 450
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

$sourceImgPath = "C:\Users\g010792832\.gemini\antigravity-ide\brain\a2b540f0-b671-4032-b3fc-ac917dd461ad\bg_funcionamento_animaz_1781399354935.png"
$sourceImg = [System.Drawing.Image]::FromFile($sourceImgPath)

$targetRatio = 1920.0 / 450.0
$sourceRatio = $sourceImg.Width / $sourceImg.Height

if ($sourceRatio -gt $targetRatio) {
    $cropHeight = $sourceImg.Height
    $cropWidth = [int]($cropHeight * $targetRatio)
    $srcX = [int](($sourceImg.Width - $cropWidth) / 2)
    $srcY = 0
} else {
    $cropWidth = $sourceImg.Width
    $cropHeight = [int]($cropWidth / $targetRatio)
    $srcX = 0
    $srcY = [int](($sourceImg.Height - $cropHeight) / 2)
}

$destRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$srcRect = New-Object System.Drawing.Rectangle($srcX, $srcY, $cropWidth, $cropHeight)
$g.DrawImage($sourceImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$rectRight = New-Object System.Drawing.Rectangle(600, 0, 1320, $height)
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rectRight, [System.Drawing.Color]::FromArgb(0, 26, 11, 46), [System.Drawing.Color]::FromArgb(250, 26, 11, 46), 0.0)
$g.FillRectangle($gradBrush, $rectRight)

$logoImgPath = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\logo_transparent_wpf.png"
$logoImg = [System.Drawing.Image]::FromFile($logoImgPath)
$logoHeight = 45
$logoScale = $logoHeight / $logoImg.Height
$logoWidth = [int]($logoImg.Width * $logoScale)
$g.DrawImage($logoImg, 800, 30, $logoWidth, $logoHeight)

$fontTitle = New-Object System.Drawing.Font("Segoe UI", 48, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Regular)
$fontSmall = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Bold)
$fontUnit = New-Object System.Drawing.Font("Segoe UI", 22, [System.Drawing.FontStyle]::Bold)
$fontTime = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Regular)

$brushLime = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 184, 230, 46))
$brushOrange = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 115, 0))
$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$brushLightPurple = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 191, 174, 227))

$g.DrawString("Pensando no seu conforto, funcionamos", $fontSub, $brushLightPurple, 800, 90)
$g.DrawString("de domingo a domingo", $fontTitle, $brushOrange, 800, 130)

$g.DrawString("WhatsApp: +55 (92) 98187-0014", $fontSmall, $brushLime, 800, 220)

$g.DrawString("📍 Parque 10", $fontUnit, $brushWhite, 800, 280)
$g.DrawString("08h às 22h", $fontTime, $brushLightPurple, 850, 320)

$g.DrawString("📍 Compensa", $fontUnit, $brushWhite, 1150, 280)
$g.DrawString("08h às 20h", $fontTime, $brushLightPurple, 1200, 320)

$g.DrawString("📍 Ponta Negra", $fontUnit, $brushWhite, 1500, 280)
$g.DrawString("08h às 22h", $fontTime, $brushLightPurple, 1550, 320)

$savePath = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\banners\banner-funcionamento-final.png"
$bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$sourceImg.Dispose()
$logoImg.Dispose()
