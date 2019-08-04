<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="*,auto" columns="*">
      <!-- main components all on top of each other, since only 1 will be visible at any given time -->
      <component
        v-for="component in componentsArray"
        v-show="component === currentComponent"
        :key="component"
        :is="component"
        row="0"
        col="0"
      />
      <GridLayout class="bottom-bar" row="1" col="0" rows="*" columns="*,*,*,*">
        <!-- Bottom navigation -->
        <StackLayout row="0" col="0" :class="navigationButtonClasses('Landing')">
          <Image @tap="currentComponent = 'Landing'" src="~/assets/drum-kit.png" height="30" />
        </StackLayout>

        <StackLayout row="0" col="1" :class="navigationButtonClasses('Shout')">
          <Image @tap="currentComponent = 'Shout'" src="~/assets/sound-board.png" height="30" />
        </StackLayout>

        <StackLayout row="0" col="2" :class="navigationButtonClasses('Art')">
          <Image @tap="currentComponent = 'Art'" src="~/assets/fab-four.png" height="30" />
        </StackLayout>

        <StackLayout row="0" col="3" :class="navigationButtonClasses('Twist')">
          <Image @tap="currentComponent = 'Twist'" src="~/assets/submarine.png" height="30" />
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
import Landing from "../components/Landing";
import Twist from "../components/Twist";
import Art from "../components/Art";
import Shout from "../components/Shout";

export default {
  data() {
    return {
      currentComponent: "Landing",
      componentsArray: ["Landing", "Shout", "Art", "Twist"]
    };
  },
  computed: {
    navigationButtonClasses() {
      return component => ({
        "nav-btn": true,
        colored: component === this.currentComponent
      });
    }
  },

  components: {
    Landing,
    Shout,
    Art,
    Twist
  }
};
</script>

