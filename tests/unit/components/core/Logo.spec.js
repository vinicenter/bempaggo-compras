import { mount } from '@vue/test-utils'
import Logo from '@/components/core/Logo.vue'

test('Logo output a image', () => {
  const wrapper = mount(Logo, { });

  expect(wrapper.html()).toContain("<img");
});