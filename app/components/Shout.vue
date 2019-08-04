<template>
  <StackLayout>
    <Label class="action-bar" text="Twist and Shout"></Label>
    <ScrollView>
      <StackLayout class="card">
        <Label class="title" textWrap="true">Sgt. Pepper's Soundboard</Label>
        <GridLayout rows="*,*,*" columns="*,*,*">
          <StackLayout row="0" col="0" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="drone" class="label" />
            <Switch @checkedChange="play1($event.value,'drone')" />
          </StackLayout>
          <StackLayout row="0" col="1" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="drum" class="label" />
            <Switch @checkedChange="play2($event.value,'drum')" />
          </StackLayout>
          <StackLayout row="0" col="2" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="vocal" class="label" />
            <Switch @checkedChange="play3($event.value,'vocal')" />
          </StackLayout>
          <!--row2-->
          <StackLayout row="1" col="0" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="laugh" class="label" />
            <Switch @checkedChange="play4($event.value,'high-laugh')" />
          </StackLayout>
          <StackLayout row="1" col="1" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="high" class="label" />
            <Switch @checkedChange="play5($event.value,'high')" />
          </StackLayout>
          <StackLayout row="1" col="2" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="vocal 2" class="label" />
            <Switch @checkedChange="play6($event.value,'vocal-2')" />
          </StackLayout>
          <!--row3-->
          <StackLayout row="2" col="0" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="high" class="label" />
            <Switch @checkedChange="play7($event.value,'backwards-high')" />
          </StackLayout>
          <StackLayout row="2" col="1" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="medium" class="label" />
            <Switch @checkedChange="play8($event.value,'backwards')" />
          </StackLayout>
          <StackLayout row="2" col="2" class="soundboard">
            <Image src="~/assets/record.png" />
            <Label text="low" class="label" />
            <Switch @checkedChange="play9($event.value,'backwards-low')" />
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>
<script>
const audio = require("nativescript-audio");
const p1 = new audio.TNSPlayer();
const p2 = new audio.TNSPlayer();
const p3 = new audio.TNSPlayer();

const p4 = new audio.TNSPlayer();
const p5 = new audio.TNSPlayer();
const p6 = new audio.TNSPlayer();

const p7 = new audio.TNSPlayer();
const p8 = new audio.TNSPlayer();
const p9 = new audio.TNSPlayer();

export default {
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    play1(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p1.pause();
      } else {
        p1.playFromFile(playerOptions);
      }
    },
    play2(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p2.pause();
      } else {
        p2.playFromFile(playerOptions);
      }
    },
    play3(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p3.pause();
      } else {
        p3.playFromFile(playerOptions);
      }
    },
    play4(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p4.pause();
      } else {
        p4.playFromFile(playerOptions);
      }
    },
    play5(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p5.pause();
      } else {
        p5.playFromFile(playerOptions);
      }
    },
    play6(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p6.pause();
      } else {
        p6.playFromFile(playerOptions);
      }
    },
    play7(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p7.pause();
      } else {
        p7.playFromFile(playerOptions);
      }
    },
    play8(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p8.pause();
      } else {
        p8.playFromFile(playerOptions);
      }
    },
    play9(value, tape) {
      const playerOptions = {
        audioFile: "~/assets/tapes/" + tape + ".mp3",
        loop: true
      };
      if (!value) {
        p9.pause();
      } else {
        p9.playFromFile(playerOptions);
      }
    }
  }
};
</script>
<style scoped>
.soundboard {
  border-radius: 5;
  margin: 10;
  padding: 10;
  background-color: #ff9914;
}
.label {
  font-family: Dosis, Dosis-Regular;
  font-weight: bold;
  margin: 10;
}
</style>