Add-Type -AssemblyName PresentationCore
$webpPath = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\logo_web.png"
$pngPath = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\logo_transparent_wpf.png"

$uri = New-Object System.Uri($webpPath)
$decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($uri, [System.Windows.Media.Imaging.BitmapCreateOptions]::None, [System.Windows.Media.Imaging.BitmapCacheOption]::Default)
$frame = $decoder.Frames[0]

$encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
$encoder.Frames.Add($frame)

$fs = [System.IO.File]::OpenWrite($pngPath)
$encoder.Save($fs)
$fs.Close()
