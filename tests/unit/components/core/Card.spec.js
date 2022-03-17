import { mount } from '@vue/test-utils'
import Img from '@/components/core/Img.vue'

test('Card render test', () => {
  const wrapper = mount(Img, { 
    propsData: {
      imgUrl: "https://urlimgtest.com",
      imgAlt: "altimg",
      title: "titletest",
      description: "descriptiontest",
      maxDescription: "10"
    }
   });

  expect(wrapper.html()).toContain("https://urlimgtest.com");
  expect(wrapper.html()).toContain("altimg");
  expect(wrapper.html()).toContain("titletest");
  expect(wrapper.html()).toContain("descriptiontest");
})