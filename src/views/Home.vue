<template>
  <div class="home">
    <NoteList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NoteList from '@/components/NoteList.vue';

@Component({
  components: {
    NoteList,
  },
})
export default class Home extends Vue {}
</script>
