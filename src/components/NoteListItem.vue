<template>
  <div class="note-list-item" :style="{ background: bgColor, color: textColor }">
    <div class="note-list-item-header">
      <button class="btn-icon" type="button" @click="toggleEdit">
        <i class="material-icons md-18" v-if="!edit">edit</i>
        <i class="material-icons md-18" v-else>save</i>
      </button>
    </div>

    <p class="note-list-item-label" v-if="!edit">{{ text }}</p>
    <template v-else>
      <input v-model="bgColor" type="color">
      <textarea class="note-list-item-editor" v-model="text" maxlength="100" rows="5"></textarea>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NoteModel } from '@/models/NoteModel';

@Component
export default class NoteListItem extends Vue {
  @Prop() private data!: NoteModel;
  private bgColor: string = '';
  private textColor: string = '';
  private text: string = '';
  private edit: boolean = false;

  public created(): void {
    if (this.data) {
      this.bgColor = this.data.bgColor;
      this.textColor = this.data.textColor;
      this.text = this.data.text;
    }
  }

  public toggleEdit(): void {
    this.edit = !this.edit;
  }

  @Watch('bgColor')
  private onBgColorChanged(val: string): void {
    this.textColor = this.determineTextColor(val);
  }

  // Based on https://stackoverflow.com/a/5624139
  private hexToRgb(hex: string): any {
    if (hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      if (result) {
        return {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        };
      }
    }

    return null;
  }

  // Based on https://stackoverflow.com/a/1855903
  private determineTextColor(bgColor: string): string {
    const {r, g, b} = this.hexToRgb(bgColor);
    const luminosity = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Darker background colors
    if (luminosity > 0.5) {
      return '#FFFFFF';
    }

    return '#000000';
  }
}
</script>

<style scoped lang="stylus">
.note-list-item
  display flex
  flex-direction column
  width 150px
  height 150px
  padding 5px
  box-shadow 2px 2px 1px 1px #92959B
  text-align initial
  margin 2px

  @media (max-width 599px)
    margin 2px 0
    width calc(100% - 20px)

  .note-list-item-header
    display flex
    flex-direction row-reverse

    .btn-icon
      color inherit

  .note-list-item-label
    display flex
    align-items center
    justify-content center

  .note-list-item-editor
    resize none
</style>
