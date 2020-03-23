<template>
  <v-col col="12">
    <v-text-field
      label="Введите Сообщение "
      outlined  v-model="text" @keydown.enter="send"
    />
  </v-col>

</template>

<script>
    export default {
      name: "ChatForm",
      data: () => ({
        text: ''
      }),
      methods: {
        send () {
          this.$socket.emit('createMessage', {
            text: this.text,
            id: this.$store.state.user.id
          }, data => {
            if (typeof  data === 'string') {
              console.error(data)
            } else  {
              this.text = '';
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
