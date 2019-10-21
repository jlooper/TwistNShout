<template>
  <StackLayout>
    <Label class="action-bar" text="Twist and Shout"></Label>
    <ScrollView>
      <StackLayout class="card">
        <Label class="title" textWrap="true">Lyric of the Day</Label>
        <Image src="~/assets/color-submarine.jpg" />
        <StackLayout v-for="text in lyric" :key="text">
          <Label class="lyric" textWrap="true" :text="text" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["lyric"])
  },
  methods: {
    ...mapActions(["getLyric"])
  },
  created() {
    this.getLyric();
  }
};
</script>
