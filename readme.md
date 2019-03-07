# CRUD Pada Database Buku Menggunakan Lumen Dan Axios Vue.Js

API Buku ini merupakan sebuah pengimplementasian CRUD pada API Lumen menggunakan Vue.Js. Dalam API ini, data yang bisa dimasukkan yaitu berupa judul buku, tahun diterbitkannya buku tersebut, serta penerbitnya. Bagaimana cara menggunakannya?

## 1. Instal Laravel-Cors Pada Lumen

Penginstalan ini bertujuan agar API Lumen yang digunakan dapat memanggil aplikasi yang memproses atau tampilan dari webnya (dalam hal ini, Vue.Js adalah yang paling bertanggung jawab). Cara instalasinya yaitu:

``` bash
composer require barryvdh/laravel-cors
```

## 2. Instal Vue.Js Pada Direktori Lumen

Vue.Js sendiri bisa disimpan dimana saja, mau itu diluar direktori Lumen atau tidak. Namun, agar mempermudah penggunaan, lebih disarankan didalam direktori Lumen saja. Vue.Js yang digunakan disini adalah versi webpack, namun sebenarnya Vue.Js yang biasa pun bisa menggunakannya. Cara instalasinya yaitu:

``` bash
npm install -g vue-cli
vue init webpack <nama_folder>
cd <nama_folder>
npm install
npm run dev
```

## 3. Instal Axios

Untuk dapat terkoneksi dengan Lumen, Vue.Js sangat memerlukan Axios yang dapat mengakses data menuju database. Cara instalasinya yaitu:

``` bash
npm install axios
```

## 4. Deklarasikan 2 Komponen Untuk Metode CRUD Pada Router Vue.Js

Router sendiri terdapat pada folder src pada direktori Vue.Js. Didalamnya ada file bernama index.js yang memproses kinerja dari Vue.Js itu sendiri. Langkah yang perlu dilakukan adalah membuat 2 File Components, dimana yang satu untuk menampilkan data, dan yang satu lagi untuk metode input data. Penggunaannya yaitu sebagai berikut:

``` bash
import <Components View Data> from '@/components/<Components View Data>'
import <Components Input Data> from '@/components/<Components Input Data>'
```

Lalu, tambahkan juga routes untuk melakukan metode CRUD.

``` bash
export default new Router({
  routes: [
    {
      path: '/buku',
      name: 'Buku',
      component: <Components View Data>
    },
    {
      path: '/buku/create',
      name: 'BukuCreate',
      component: <Components Input Data>
    },
    {
      path: '/buku/:id',
      name: 'BukuUbah',
      component: <Components Input Data>
    }
  ]
})
```

# Lumen PHP Framework

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://poser.pugx.org/laravel/lumen-framework/d/total.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/lumen-framework/v/stable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/lumen-framework/v/unstable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Official Documentation

Documentation for the framework can be found on the [Lumen website](https://lumen.laravel.com/docs).

## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
