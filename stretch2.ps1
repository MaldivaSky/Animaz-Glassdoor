Add-Type -AssemblyName System.Drawing

function Extend-Banner ($sourcePath, $destPath) {
    if (-Not (Test-Path $sourcePath)) { return }
    $bmp = [System.Drawing.Image]::FromFile($sourcePath)
    
    $targetW = 1920
    $targetH = 450
    
    $ratio = 450.0 / $bmp.Height
    $scaledW = [int][math]::Round($bmp.Width * $ratio)
    $scaledH = 450
    
    $finalBmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
    $g = [System.Drawing.Graphics]::FromImage($finalBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    
    $centerX = [int][math]::Round(($targetW - $scaledW) / 2.0)
    
    # Draw center
    $g.DrawImage($bmp, $centerX, 0, $scaledW, $scaledH)
    
    # Left strip
    $srcLeft = New-Object System.Drawing.RectangleF(0, 0, 1, $bmp.Height)
    $destLeft = New-Object System.Drawing.RectangleF(0, 0, $centerX, $targetH)
    $g.DrawImage($bmp, $destLeft, $srcLeft, [System.Drawing.GraphicsUnit]::Pixel)
    
    # Right strip
    $srcX = [float]($bmp.Width - 1)
    $srcRight = New-Object System.Drawing.RectangleF($srcX, 0f, 1f, [float]$bmp.Height)
    
    $destX = [float]($centerX + $scaledW)
    $destW = [float]($targetW - ($centerX + $scaledW))
    $destRight = New-Object System.Drawing.RectangleF($destX, 0f, $destW, [float]$targetH)
    
    $g.DrawImage($bmp, $destRight, $srcRight, [System.Drawing.GraphicsUnit]::Pixel)
    
    $g.Dispose()
    $bmp.Dispose()
    
    $finalBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $finalBmp.Dispose()
    Write-Host "Success $destPath"
}

$p1 = "C:\Users\g010792832\.gemini\antigravity-ide\brain\a2b540f0-b671-4032-b3fc-ac917dd461ad\banner_funcionamento_panoramico_1781401152289.png"
$d1 = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\banners\banner-funcionamento-novo.png"
Extend-Banner $p1 $d1

$p2 = "C:\Users\g010792832\.gemini\antigravity-ide\brain\a2b540f0-b671-4032-b3fc-ac917dd461ad\banner_arraial_panoramico_1781401208975.png"
$d2 = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\banners\banner-arraial-novo.png"
Extend-Banner $p2 $d2
