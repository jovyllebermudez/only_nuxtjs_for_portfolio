import { mount } from '@vue/test-utils';
import ProjectCard from '@/components/ProjectCard.vue';

describe('ProjectCard', () => {
  test('renders the correct message', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        name: 'Nuxt.js',
      },
    });

    const message = wrapper.find('p').text();
    expect(message).toBe('Click "See All" Link!');
  });
});