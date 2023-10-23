---
sidebar_position: 8
---

# Vulnerability Response

Fitur ini menampilkan target yang dipindai beserta informasi kerentanannya. Namun, pengguna hanya dapat melihat informasi *vulnerability response* jika menggunakan alat *VA Scanner* (*Website Scanner, API Scanner, Network Scanner*).
![Vulnerability Response Capture](/img/capture/vulnerability-response.png)

Keterangan:
- ***Vulnerability*** adalah jenis kerentanan target 
- ***Status*** adalah kondisi saat ini dari setiap kerentanan dapat berupa *Open* (belum diperbaiki), *Fixed* (telah diperbaiki), *Accepted* (diterima), *False Positive* (seharusnya diperbaiki), *Ignored* (ditolak)
- ***Severity*** adalah tingkat keparahan kerentanan target 
- ***Target*** adalah target yang akan dipindai dalam bentuk *domain* atau *IP* 
- ***Scan Date*** adalah waktu target dipindai 
- ***VA Scanner*** adalah alat *VA Scanner* yang dapat digunakan dalam bentuk *Website Scanner*, *Network Scanner* atau *API Scanner* 
- ***History*** berupa informasi detail mengenai setiap kerentanan

Untuk mengaktifkan tombol *Change Status* dan C*hange Severity*, pengguna dapat klik *checkbox vulnerability*.
![VR Capture](/img/capture/VR.png)

## Mengubah Status
Untuk mengubah status *vulnerability*, pengguna dapat mengikuti langkah-langkah berikut.
1. Klik salah satu *checkbox vulnerability* yang ingin diganti statusnya
2. Klik tombol *Change Status*, maka akan muncul pilihan status
   ![Change Status Capture](/img/capture/change-status.png)
3. Pilih salah satu status untuk *vulnerability* tersebut, maka akan tampil form untuk menambahkan alasan
   ![Reason Status Capture](/img/capture/reason-status.png)
4. Ketikkan alasan pada *textbox Reason*
5. Klik tombol *Change* untuk mengubah status dan klik *Cancel* jika ingin membatalkan
6. Status dari *vulnerability* tersebut telah berubah menjadi *Ignored* seperti berikut
   ![Severity Succesfully Capture](/img/capture/status-succesfully.png)
7. Pada halaman *detail scan*, status dari *vulnerability* juga akan berubah
   ![After Change Status Capture](/img/capture/Detail-Scan-After-ChangeStatus.png)

## Mengubah *Severity*
Untuk mengubah *severity vulnerability*, pengguna dapat mengikuti langkah-langkah berikut.
1. Klik salah satu *checkbox vulnerability* yang ingin diganti *severity*-nya
2. Klik tombol *Change Severity*, maka akan muncul pilihan *severity*
   ![Change Severity Capture](/img/capture/change-severity.png)
3. Pilih salah satu *severity* untuk *vulnerability* tersebut, maka akan tampil form untuk menambahkan alasan
   ![Reason Severity Capture](/img/capture/reason-severity.png)
4. Ketikkan alasan pada *textbox Reason*
5. Klik tombol *Change* untuk mengubah *severity* dan klik *Cancel* jika ingin membatalkan
6. *Severity* dari *vulnerability* tersebut telah berubah menjadi *Informational* seperti berikut
   ![Status Succesfully Capture](/img/capture/severity-succesfully.png)
7. Pada halaman *detail scan*, *severity* dari vulnerability juga akan berubah
   ![After Change Severity Capture](/img/capture/Detail-Scan-After-ChangeSeverity.png)

## Mengubah *View Setting*

Untuk mengubah *view setting*, pengguna dapat mengikuti langkah-langkah berikut.
1. Klik tombol *View Setting*, maka akan muncul pilihan *show*
   ![Change View Setting Capture](/img/capture/view-setting.png)
2. Klik *checkbox show* yang diinginkan

## Melihat *Detail Vulnerability*
Untuk melihat detail dari setiap *vulnerability*, pengguna dapat mengikuti langkah-langkah berikut.
1. Klik  tombol *Detail* pada salah satu *vulnerability* yang ingin dilihat
2. Maka akan muncul informasi mengenai *vulnerability history*  seperti berikut
   ![Vulnerability Details Capture](/img/capture/vulnerability-history.png)
