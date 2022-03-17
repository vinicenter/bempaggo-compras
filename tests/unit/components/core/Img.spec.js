import { mount } from '@vue/test-utils'
import Img from '@/components/core/Img.vue'

test('Img render test', () => {
  var link = "https://google.com";

  const wrapper = mount(Img, { 
    propsData: {
      src: link
    }
   });

  expect(wrapper.html()).toContain("src=\"" + link + "\"");
  expect(wrapper.html()).toContain("<img");
})