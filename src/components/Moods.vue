<template>
<div v-if="unposed">
  <b-container>
    <b-row>
      <b-col>
        <b-card
          title="Feeling meh?"
          img-src="../assets/bad.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-card-text>
            Bad days happen, maybe more often in a pandemic. Pose to cheer up.
            <b-list-group>
            <b-list-group-item>1. Spread your legs more than shoulder length apart.</b-list-group-item>
            <b-list-group-item>2. Look straight into the camera.</b-list-group-item>
            <b-list-group-item>3. Smile! </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Feeling ok?"
          img-src="../assets/okay.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-card-text>
            That's good! Pose to upgrade your mood.
            <b-list-group>
            <b-list-group-item>1. Put hands on your hips.</b-list-group-item>
            <b-list-group-item>2. Look straight into the camera.</b-list-group-item>
            <b-list-group-item>3. Smile! </b-list-group-item>
            </b-list-group>
          </b-card-text>
       </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Feeling good?"
          img-src="../assets/good.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-card-text>
            That's awesome! Pose to spread joy on campus.
            <b-list-group>
            <b-list-group-item>1. Put your hands above your head.</b-list-group-item>
            <b-list-group-item>2. Look straight into the camera.</b-list-group-item>
            <b-list-group-item>3. Smile! </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
  </div>
  <div v-else>
      <b>Thank you for posing!</b>
      <b>You can stop posing now.</b>
  </div>
</template>

<script>

export default {
  name: 'Moods',
  components: {
  },
  data() {
    return {
      unposed: !this.$store.state.pose, 
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
container {
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-self: flex-end;
}

b {
  font-size: large;
}
</style>
