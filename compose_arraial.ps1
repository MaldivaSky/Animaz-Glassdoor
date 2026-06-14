Add-Type -AssemblyName System.Drawing

$width = 1920
$height = 450
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

$sourceImgPath = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\banners\banner-arraial-animaz.png"
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

$rectLeft = New-Object System.Drawing.Rectangle(0, 0, 1200, $height)
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rectLeft, [System.Drawing.Color]::FromArgb(240, 39, 13, 80), [System.Drawing.Color]::FromArgb(0, 39, 13, 80), 0.0)
$g.FillRectangle($gradBrush, $rectLeft)

$fontTitle = New-Object System.Drawing.Font("Segoe UI", 56, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Regular)
$fontBullet = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Bold)

$brushLime = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 184, 230, 46))
$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)

$g.DrawString("ARRAIÁ ANIMAZ", $fontSub, $brushLime, 100, 60)
$g.DrawString("Looks Caipiras Exclusivos!", $fontTitle, $brushWhite, 100, 110)
$g.DrawString("Deixe seu pet pronto para a festança.", $fontSub, $brushWhite, 100, 210)

$g.DrawString("✓ Conforto garantido", $fontBullet, $brushLime, 100, 290)
$g.DrawString("✓ Estampas temáticas", $fontBullet, $brushLime, 100, 340)

$savePath = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\banners\banner-arraial-final.png"
$bmp.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$sourceImg.Dispose()
