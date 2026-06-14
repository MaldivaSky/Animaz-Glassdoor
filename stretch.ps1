Add-Type -AssemblyName System.Drawing

function Extend-Banner ($sourcePath, $destPath) {
    if (-Not (Test-Path $sourcePath)) { return }
    $bmp = [System.Drawing.Image]::FromFile($sourcePath)
    
    # Target dimensions
    $targetW = 1920
    $targetH = 450
    
    # Calculate scaled width to fit height of 450
    $ratio = 450.0 / $bmp.Height
    $scaledW = [math]::Round($bmp.Width * $ratio)
    $scaledH = 450
    
    # Create final bitmap
    $finalBmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
    $g = [System.Drawing.Graphics]::FromImage($finalBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    
    # Center X
    $centerX = [math]::Round(($targetW - $scaledW) / 2.0)
    
    # Draw the central scaled image
    $g.DrawImage($bmp, $centerX, 0, $scaledW, $scaledH)
    
    # Stretch left edge (from centerX) to cover 0 to centerX
    # We take a 1-pixel wide strip from the left edge of the scaled image
    $leftStripSrc = New-Object System.Drawing.RectangleF(0, 0, 1, $bmp.Height)
    $leftStripDest = New-Object System.Drawing.RectangleF(0, 0, $centerX, $targetH)
    $g.DrawImage($bmp, $leftStripDest, $leftStripSrc, [System.Drawing.GraphicsUnit]::Pixel)
    
    # Stretch right edge to cover (centerX + scaledW) to targetW
    $rightStripSrc = New-Object System.Drawing.RectangleF($bmp.Width - 1, 0, 1, $bmp.Height)
    $rightStripDest = New-Object System.Drawing.RectangleF($centerX + $scaledW, 0, $targetW - ($centerX + $scaledW), $targetH)
    $g.DrawImage($bmp, $rightStripDest, $rightStripSrc, [System.Drawing.GraphicsUnit]::Pixel)
    
    $g.Dispose()
    $bmp.Dispose()
    
    $finalBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $finalBmp.Dispose()
    Write-Host "Saved $destPath"
}

$p1 = "C:\Users\g010792832\.gemini\antigravity-ide\brain\a2b540f0-b671-4032-b3fc-ac917dd461ad\banner_funcionamento_panoramico_1781401152289.png"
$d1 = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\banners\banner-funcionamento-novo.png"
Extend-Banner $p1 $d1

$p2 = "C:\Users\g010792832\.gemini\antigravity-ide\brain\a2b540f0-b671-4032-b3fc-ac917dd461ad\banner_arraial_panoramico_1781401208975.png"
$d2 = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\banners\banner-arraial-novo.png"
Extend-Banner $p2 $d2

