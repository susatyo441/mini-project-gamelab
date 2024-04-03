# Produk API

## Mengambil Semua Produk

**GET /products**


**Deskripsi**
Mengambil semua produk yang tersedia.

**Response Sukses**
- Kode Status: 200 OK
- Isi Respon: Daftar produk yang berhasil diambil.

**Contoh Respon Sukses**
```json
[
    {
        "id": 1,
        "product_name": "Produk 1",
        "description": "Deskripsi produk 1",
        "price": 100000,
        "gambar": "path/ke/gambar1.jpg",
        "createdAt": "2024-04-01T12:00:00.000Z",
        "updatedAt": "2024-04-01T12:00:00.000Z"
    },
    {
        "id": 2,
        "product_name": "Produk 2",
        "description": "Deskripsi produk 2",
        "price": 150000,
        "gambar": "path/ke/gambar2.jpg",
        "createdAt": "2024-04-02T12:00:00.000Z",
        "updatedAt": "2024-04-02T12:00:00.000Z"
    }
]
```
## getById

**GET /products/:id**


**Deskripsi**
Mengambil semua produk sesuai id.

**Response Sukses**
- Kode Status: 200 OK
- Isi Respon: Daftar produk yang berhasil diambil.

**Contoh Respon Sukses**
```json
[
    {
        "id": 1,
        "product_name": "Produk 1",
        "description": "Deskripsi produk 1",
        "price": 100000,
        "gambar": "path/ke/gambar1.jpg",
        "createdAt": "2024-04-01T12:00:00.000Z",
        "updatedAt": "2024-04-01T12:00:00.000Z"
    }
]
```

**Contoh Respon Eror**
``` json
{
    "message": "No products found with the provided id"
}
```
Kode Status: 500 Internal Server Error
Isi Respon: Pesan error jika terjadi kesalahan pada server.

## getByName

**GET /products/search?name={nama_produk}**
contoh : GET /products/search?name=batik

**Deskripsi**
Mengambil produk berdasarkan nama yang mengandung karakter tertentu.

**Parameter Query**
name (string, wajib): Nama produk yang akan dicari.

**Response Sukses**
Kode Status: 200 OK
Isi Respon: Daftar produk yang berhasil ditemukan berdasarkan nama.

**Contoh Respon Sukses**
```json
[
    {
        "id": 1,
        "product_name": "Kaos Polo",
        "description": "Kaos Polo Berwarna Biru",
        "price": 120000,
        "gambar": "path/ke/gambar1.jpg",
        "createdAt": "2024-04-01T12:00:00.000Z",
        "updatedAt": "2024-04-01T12:00:00.000Z"
    },
    {
        "id": 2,
        "product_name": "Kemeja Batik",
        "description": "Kemeja Batik Motif Bunga",
        "price": 150000,
        "gambar": "path/ke/gambar2.jpg",
        "createdAt": "2024-04-02T12:00:00.000Z",
        "updatedAt": "2024-04-02T12:00:00.000Z"
    }
]
```
**Contoh Respon Eror**
``` json
{
    "message": "No products found with the provided name"
}
```
Kode Status: 500 Internal Server Error
Isi Respon: Pesan error jika terjadi kesalahan pada server.

## Update Row

**PUT /products/:id**

**Deskripsi**
Memperbarui produk yang sudah ada berdasarkan ID.

**Parameter params**
:id : ID produk yang akan diperbarui.

**Request Body**
product_name (opsional): Nama baru untuk produk.
description (opsional): Deskripsi baru untuk produk.
price (opsional): Harga baru untuk produk.
Isi Respon: Detail produk yang berhasil diperbarui.

**Response Sukses**
Kode Status: 200 OK
Isi Respon: Daftar produk yang berhasil ditemukan berdasarkan nama.

**Contoh Respon Sukses**
```json
{
    "status": "success",
    "message": "Product successfully updated",
    "data": {
        "id": 1,
        "product_name": "Produk 1 (Diperbarui)",
        "description": "Deskripsi produk 1 (Diperbarui)",
        "price": 150000,
        "gambar": "path/ke/gambar1.jpg",
        "createdAt": "2024-04-01T12:00:00.000Z",
        "updatedAt": "2024-04-03T12:00:00.000Z"
    }
}

```
**Contoh Respon Eror**
``` json
{
    "message": "No products found with the provided name"
}
```
Kode Status: 404 Not Found
Isi Respon: Jika produk dengan ID yang diberikan tidak ditemukan.

## Menghapus Produk Berdasarkan ID

**DELETE /products/:id**

**Deskripsi**
Menghapus produk yang sudah ada berdasarkan ID.

**Parameter params**
:id: ID produk yang akan dihapus.

**Response Sukses**
Kode Status: 200 OK
Isi Respon: Pesan sukses bahwa produk berhasil dihapus.

**Contoh Respon Sukses**
```json
{
    "status": "success",
    "message": "Product successfully deleted"
}


```
**Contoh Respon Eror**
``` json
{
    "message": "No products found with the provided name"
}
```
Kode Status: 404 Not Found
Isi Respon: Jika produk dengan ID yang diberikan tidak ditemukan.