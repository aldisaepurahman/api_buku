<template lang="html">
  <div class="">
    <h1>Tambah Buku</h1>
      <form @submit.prevent="submitForm">
        <div class="">
          <label for="Judul">Judul Buku</label>
          <input type="text" v-model="buku.judul">
        </div>
        <div class="">
          <label for="Tahun">Rilis Tahun</label>
          <input type="number" v-model="buku.thn_rilis">
        </div>
        <div class="">
          <label for="Penerbit">Penerbit</label>
          <input type="text" v-model="buku.penerbit">
        </div>
        <div class="">
          <button type="submit" name="button">Tambah</button>
        </div>
      </form>
  </div>
</template>

<script>
import { api } from '@/helper/api'

export default {
  name: 'FormBuku',
  data () {
    return {
      buku: {
        id: null,
        judul: '',
        thn_rilis: '',
        penerbit: ''
      }
    }
  },
  mounted () {
    let id = this.$route.params.id

    if (id) {
      api.get('/buku/' + id).then(res => {
        this.buku = res.data.result
      })
    }
  },
  methods: {
    submitForm () {
      let data = this.buku
      let url = 'buku'

      if (this.buku.id) {
        url += '/' + this.buku.id
      }

      api.post(url, data).then(res => {
        if (res.data.status === 'success') {
          this.$router.push('/buku')
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
