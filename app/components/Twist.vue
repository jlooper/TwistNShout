<template>
  <StackLayout>
    <Label class="action-bar" text="Twist and Shout"></Label>
    <ScrollView>
      <StackLayout class="card">
        <Label class="title" text="Shake it up, baby!" />
        <Label class="instructions" text="Shake your phone for a new lyric!" textWrap="true" />
        <StackLayout v-for="text in newLyric" :key="text">
          <Label class="lyric" textWrap="true" :text="text" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
import { mapActions, mapState } from "vuex";

import * as accelerometer from "nativescript-accelerometer";

export default {
  computed: {
    ...mapState(["newLyric"])
  },
  data() {
    return {
      selectedLyric: [],
      lyricObject: {},
      accelerometerListening: false,
      accelerometerValues: {
        x: null,
        y: null,
        z: null
      },
      lastUpdate: 0,
      timeDiff: 0,
      lastShake: 0
    };
  },
  methods: {
    ...mapActions(["getNewLyric"]),
    startAccelerometer: function() {
      if (accelerometer && this.accelerometerListening) {
        accelerometer.stopAccelerometerUpdates();
      }
      accelerometer.startAccelerometerUpdates(
        data => {
          this.accelerometerListening = true;
          this.accelerometerValues = data;
          if (data) {
            this.detectShake();
          }
        },
        {
          sensorDelay: "normal"
        }
      );
    },
    detectShake() {
      //a shake is when x goes from negative to positive
      var d = new Date();
      var n = d.getTime();
      var now = n;
      var lastX = 0;
      var lastY = 0;
      var lastZ = 0;
      var interval = 0;
      var lastUpdateLeft = 0;
      var lastUpdateRight = 0;
      if (this.accelerometerValues.x < -0.5) {
        lastUpdateLeft = now;
      } else if (this.accelerometerValues.x > 0.5) {
        lastUpdateRight = now;
      }
      var update = lastUpdateLeft - lastUpdateRight;

      if (update > 0) {
        this.getNewLyric();
      }
    }
  },
  created() {
    this.startAccelerometer();
    //toggle for testing
    //this.getNewLyric();
  }
};
</script>

<style scoped>
.instructions {
  font-weight: bold;
  margin: 10;
}
</style>
