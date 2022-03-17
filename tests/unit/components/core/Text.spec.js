import { mount } from '@vue/test-utils'
import Text from '@/components/core/Text.vue'

test('Text output <p>test</p>', () => {
  const content = 'test';

  const wrapper = mount(Text, {
    slots: {
      default: content
    }
  });

  expect(wrapper.html()).toContain(content);
  expect(wrapper.html()).toContain("<p>");
  expect(wrapper.html()).toContain("</p>");
});