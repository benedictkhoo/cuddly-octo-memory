import { shallowMount } from '@vue/test-utils';
import NoteListItem from '@/components/NoteListItem.vue';

describe('NoteListItem.vue', () => {
  it('renders text when initialized', () => {
    const wrapper = shallowMount(NoteListItem, {
      propsData: {
        data: {
          bgColor: '#FFFFFF',
          textColor: '#000000',
          text: 'Test',
        },
      },
    });
    const rootElement = wrapper.find('.note-list-item').element;
    const paragraphWrapper = wrapper.find('.note-list-item-label');

    expect(rootElement.style.backgroundColor).toEqual('rgb(255, 255, 255)');
    expect(rootElement.style.color).toEqual('rgb(0, 0, 0)');
    expect(paragraphWrapper.text()).toEqual('Test');
  });

  it('changes mode to edit if button is click in view mode', () => {
    const wrapper = shallowMount(NoteListItem, {
      propsData: {
        data: {
          bgColor: '#FFFFFF',
          textColor: '#000000',
          text: 'Test',
        },
      },
    });

    wrapper.find('.btn-icon').element.click();

    expect(wrapper.find('.material-icons').text()).toEqual('save');
  });

  it('changes mode to view if button is click in edit mode', () => {
    const wrapper = shallowMount(NoteListItem, {
      propsData: {
        data: {
          bgColor: '#FFFFFF',
          textColor: '#000000',
          text: 'Test',
        },
      },
    });

    wrapper.find('.btn-icon').element.click();
    expect(wrapper.find('.material-icons').text()).toEqual('save');

    wrapper.find('.btn-icon').element.click();
    expect(wrapper.find('.material-icons').text()).toEqual('edit');
  });
});
