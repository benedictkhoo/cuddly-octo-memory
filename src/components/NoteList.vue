<template>
  <div>
    <button class="btn" @click="addNote()">Add Note</button>

    <template v-if="notes.length > 0">
      <section class="note-list">
        <NoteListItem :data="note" v-for="(note, index) in notes" :key="index"/>
      </section>
    </template>
    <template v-else>
      <p>You haven't created any notes yet...</p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { NoteModel } from '@/models/NoteModel';
import NoteListItem from '@/components/NoteListItem.vue';

@Component({
  components: {
    NoteListItem,
  },
})
export default class NoteList extends Vue {
  private notes: NoteModel[] = [];

  public mounted(): void {
    const notes: NoteModel[] = JSON.parse(localStorage.getItem('notes') || '[]');

    if (notes) {
      this.notes = notes;
    }
  }

  public addNote(): void {
    this.notes.push({
      bgColor: '#FFFFFF',
      textColor: '#000000',
      text: 'Your new note',
    });
  }
}
</script>

<style scoped lang="stylus">
.note-list
  display flex
  align-items center
  justify-content flex-start
  flex-wrap wrap
  margin 5px 0 0 0
  padding 0 3em

  @media (max-width 599px)
    padding 0
    flex-direction column
    justify-content center
</style>
