Bisa membuka atau running website menggunakan 2 cara :
A. dengan melakukan running dapa codingan
B. dengan menggunakan Hosting



A. Dengan melakukan Running pada codingan
Cara menjalankan Website :
1. yang pertama adalah menginstall NodeJS di personal Computer dengan cara :
   a. Copy dan pastekan Link ini : https://nodejs.org/dist/v14.5.0/node-v14.5.0-x64.msi
   b. Setelah download Filenya yang berkisar 28 MB, lakukan penginstallan dengan tekan next, centang "i accept the terms" dan tekan "next" hingga masuk ke proses install dan done.

2. Extract File Zip, dan lakukan langkah - langkah berikut ini :
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
   catatan : localhost:3000/register   : untuk melakukan registrasi akun atuhor(pembuat berita)
             Loclahost:3000/account    : digunakan untuk login agar bisaa msuk ke portal author sebgai pembuat berita
	     Localhost:3000            : halaman utama 


B. dengan menggunakan Hosting
berikut Link Hostingnya : 
-.  http://128.199.80.245:3000/ 	  : halaman utama 
-.  http://128.199.80.245:3000//register  : digunakan untuk login agar bisaa msuk ke portal author sebgai pembuat berita
-.  http://128.199.80.245:3000//account   : untuk melakukan registrasi akun atuhor(pembuat berita)

