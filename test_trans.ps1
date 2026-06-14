Add-Type -AssemblyName System.Drawing
$logoImgPath = "c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\logo.png"
$logoBmp = New-Object System.Drawing.Bitmap($logoImgPath)
$bgColor = $logoBmp.GetPixel(0,0)
$logoBmp.MakeTransparent($bgColor)
$logoBmp.Save("c:\Users\g010792832\Desktop\Animaz Glassdoor\assets\logo_trans_test.png", [System.Drawing.Imaging.ImageFormat]::Png)
$logoBmp.Dispose()
