<template>
  <q-dialog
    ref="dialog"
    v-model="open"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card>
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" @click="close">
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section v-if="messages">
        <div class="row justify-center q-pa-md">
          <div style="width: 100%; max-width: 600px" v-if="messages">
            <q-chat-message v-for="(message, index) in messages" :key="index"
              :name="message.type == 'sender' ? message.user_sender.name : message.user_receiver.name"
              :avatar="message.type == 'sender' ? message.user_sender.user_picture.picture.url : message.user_receiver.user_picture.picture.url"
              :text="[message.message]"
              :sent="message.type == 'sender' ? true : false"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-action class="absolute-bottom">
        <div class="q-pa-md">
          <q-input bottom-slots v-model="textSend" label="sent message ...." dense>
            <template v-slot:after>
              <q-btn round dense flat icon="send" v-on:click="sendMessage(textSend)"/>
            </template>
          </q-input>
        </div>
      </q-card-action>
    </q-card>
  </q-dialog>
</template>

<script>
import * as messageService from '../service/MessageService'
import moment from 'moment'

export default {
  name: 'MessageBoard',
  props: {
    openMessageBoard: {
      required: true,
      type: Boolean
    }
  },
  data () {
    return {
      moment: moment,
      dialog: false,
      maximizedToggle: true,
      open: this.openMessageBoard,
      messages: null,
      textSend: null
    }
  },
  watch: {
    openMessageBoard (newVal, oldVal) {
      this.open = newVal
    }
  },
  created () {
    this.loadMessages()
  },
  methods: {
    close (event) {
      this.$emit('childMessageBoard', false)
    },
    async loadMessages () {
      // id fixed because user id info just on register response
      try {
        const response = await messageService.getMessageService('83b2be57-0aa3-425d-80b8-08414a7e399f')
        this.messages = response.data.chat
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async sendMessage (message) {
      try {
        const response = await messageService.sendMessageService({
          'user_id': '83b2be57-0aa3-425d-80b8-08414a7e399f',
          'message': message
        })
        this.textSend = null
        this.loadMessages()
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
