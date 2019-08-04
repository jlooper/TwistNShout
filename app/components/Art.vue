<template>
  <StackLayout>
    <Label class="action-bar" text="Twist and Shout"></Label>
    <ScrollView>
      <StackLayout class="card">
        <Label class="title" textWrap="true">Make Art Not War</Label>
        <Button text="Build Album" class="inner-card" @tap="createBW" />
        <StackLayout class="album">
          <Image src="~/assets/header.jpg" />
          <GridLayout columns="*,*" rows="*,*">
            <Image class="img" col="0" row="0" ref="img1" :src="image1" @tap="takeSelfie(1)" />
            <Image class="img" col="1" row="0" ref="img2" :src="image2" @tap="takeSelfie(2)" />
            <Image class="img" col="0" row="1" ref="img3" :src="image3" @tap="takeSelfie(3)" />
            <Image class="img" col="1" row="1" ref="img4" :src="image4" @tap="takeSelfie(4)" />
          </GridLayout>
          <Image src="~/assets/footer.png" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>
<script>
import { Image } from "tns-core-modules/ui/image";
import { ImageBlackAndWhite } from "nativescript-image-black-and-white";
import { takePicture, requestCameraPermissions } from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import { ImageSource } from "tns-core-modules/image-source";
import { File, knownFolders, path } from "tns-core-modules/file-system";

export default {
  data() {
    return {
      imageBW: ImageBlackAndWhite,
      selfie: "",
      image1: "~/assets/1.png",
      image2: "~/assets/2.png",
      image3: "~/assets/3.png",
      image4: "~/assets/4.png"
    };
  },
  methods: {
    createBW() {
      this.image1 = this.$refs.img1.nativeView;
      this.image2 = this.$refs.img2.nativeView;
      this.image3 = this.$refs.img3.nativeView;
      this.image4 = this.$refs.img4.nativeView;
      this.imageBW.blackAndWhite(this.image1);
      this.imageBW.blackAndWhite(this.image2);
      this.imageBW.blackAndWhite(this.image3);
      this.imageBW.blackAndWhite(this.image4);
    },
    async takeSelfie(img) {
      const imageAsset = await takePicture({
        width: 300,
        height: 200,
        keepAspectRatio: true,
        saveToGallery: false,
        cameraFacing: "front",
        allowsEditing: true
      });
      switch (img) {
        case 1:
          this.image1 = imageAsset;
          break;
        case 2:
          this.image2 = imageAsset;
          break;
        case 3:
          this.image3 = imageAsset;
          break;
        case 4:
          this.image4 = imageAsset;
          break;
      }
    }
  },
  created() {
    this.imageBW = new ImageBlackAndWhite();
  }
};
</script>
<style>
.album {
  background-color: red;
}
.img {
  margin: 3;
  border-radius: 4;
}
</style>