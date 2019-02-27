import { shallowMount } from '@vue/test-utils';
import NoteList from '@/components/NoteList.vue';
import NoteListItem from '@/components/NoteListItem.vue';

describe('NoteList.vue', () => {
  it('renders text when initialized', () => {
    const wrapper = shallowMount(NoteList);

    expect(wrapper.exists()).toEqual(true);
  });

  it('renders default message if no notes were created', () => {
    const wrapper = shallowMount(NoteList);
    const paragraphWrapper = wrapper.find('p');

    expect(paragraphWrapper.text()).toEqual(`You haven't created any notes yet...`);
  });

  it('renders notes if there is data in localStorage', () => {
    localStorage.setItem('notes', JSON.stringify([
      {
        bgColor: '#FFFFFF',
        textColor: '#000000',
        text: 'Test',
      },
    ]));

    const wrapper = shallowMount(NoteList);

    expect(wrapper.findAll(NoteListItem).length).toEqual(1);

    localStorage.removeItem('notes');
  });

  it('add new note if click on "Add Note" button', () => {
    const wrapper = shallowMount(NoteList);

    wrapper.find('button').element.click();

    expect(wrapper.findAll(NoteListItem).length).toEqual(1);
  });
});
