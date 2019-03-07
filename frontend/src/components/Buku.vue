<template lang="html">
  <div class="">
    <h1>Data Buku</h1>
    <router-link to="/buku/create">Tambah Buku</router-link>
    <center>
    <table border="1">
      <tr>
        <th>No</th>
        <th>Judul Buku</th>
        <th>Rilis Tahun</th>
        <th>Penerbit</th>
        <th>Action</th>
      </tr>
      <tr v-for="(buku, i) in data_buku" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ buku.judul }}</td>
        <td>{{ buku.thn_rilis }}</td>
        <td>{{ buku.penerbit }}</td>
        <td>
          <router-link :to="'/buku/' + buku.id">Ubah</router-link>
          <button @click="deleteRow(buku.id)">Hapus</button>
        </td>
      </tr>
    </table>
  </center>
  </div>
</template>

<script>
import { api } from '@/helper/api'
export default {
  name: 'Buku',
  data () {
    return {
      data_buku: []
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    get () {
      api.get('buku').then(res => {
        if (res.data.status === 'success') {
          this.data_buku = res.data.result
        } else {
          console.log(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    deleteRow (id) {
      api.delete('buku/' + id).then(res => {
        if (res.data.status === 'success') {
          this.get()
        } else {
          console.log(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
