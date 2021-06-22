<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row class="d-flex flex-column">
          <v-col class="mx-auto" cols="12" md="10">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col class="mx-auto" cols="12" md="10">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Passowrd"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col class="mx-auto" cols="12" md="10">
            <v-text-field
              v-model="telegramm"
              :rules="[rules.required]"
              name="input-10-1"
              label="Your telegramm"
              hint="Required"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-btn
              class="col-6 m-3"
              large
              elevation=""
              color=""
              @click="sendParams"
              >Send</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Registr',
  data: () => ({
    valid: false,
    show1: false,
    password: '',
    email: '',
    telegramm: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    sendParams() {
      console.log('send')
    }
  }
}
</script>

<style lang="scss" scoped></style>
