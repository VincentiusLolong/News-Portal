UAS Pemrosesan Data Tersebar

Ketua Kelompok :
1.	Vincentius Tri Nugroho Kuswiharto Lolong 	  (20170801214)
Anggota :
2.	Ari Rocadi 				          (20170801231)
3.	Abdul Rasyid Yuwana 			          (20170801215)
4.	Ekin Wijaya 				          (20170801144)

Bisa membuka atau running website menggunakan 2 cara :
A. dengan menggunakan Hosting
B. dengan melakukan running dapa codingan


A. dengan menggunakan Hosting
berikut Link Hostingnya : http://128.199.80.245:3000/  
dan link youtube dibawah ini merupakan Video tentang cara menjalankan Website pada link hosting diatas 
Link Youtube  : https://youtu.be/lerv74a9rgY


B. Dengan melakukan Running pada codingan
Di dalam File Zip Terdapat : 
1. File PDF Laporan SRS Yang bernama "UAS Pemrosesan Data Tersebar_Project Website Protal Berita"
2. Folde yang bernama "news" digunakan untuk menjalankan website

Cara menjalankan Website :
1. yang pertama adalah menginstall NodeJS di personal Computer dengan cara :
   a. Copy dan pastekan Link ini : https://nodejs.org/dist/v14.5.0/node-v14.5.0-x64.msi
   b. Setelah download Filenya yang berkisar 28 MB, lakukan penginstallan dengan tekan next, centang "i accept the terms" dan tekan "next" hingga masuk ke proses install dan done.

2. Extract File Zip "UAS Pemrosesan data tersebar Portal Berita", dan lakukan langkah - langkah berikut ini :
   a. Buka CMD
   b. ketik (cd..) dua kali hingga menjadi "C:" dan ketik :D atau :E untuk berpindah dari locl disk C ke Local disk sesuai keinginan
   c. cari file bernama News yang sudah diekstrak sebelumnya dan ketik : cd ..\News-Portal 
   d. setelah masuk maka ketik : npm install 
	untuk instalasi seluruh dependensi yang ada di package.json
   e. Setelah itu Install Nodemon dengan sintax : npm install -g nodemon 
   e. untuk starting server, gunakan syntax:   npm run server:start
   d. dan untuk starting client side, gunakan syntax:   npm start
   f. dan akaan muncul localhost:3000

3. setelah muncul localhost:3000, maka untuk tahap selanjutnya dapat dilihat di link youtube diatas sebelumnya, karena link youtube ini (https://youtu.be/lerv74a9rgY) menjelaskan fitur -fitur dan penggunaannya 
   catatan : localhost:3000/register untuk melakukan registrasi akun atuhor(pembuat berita)
             Loclahost:3000/account untuk masuk ke dalam 


