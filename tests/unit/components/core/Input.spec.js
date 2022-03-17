import { mount } from '@vue/test-utils'
import Input from '@/components/core/Input.vue'

test('Input test render', () => {
  const wrapper = mount(Input, { 
    propsData: {
      name: "nametest",
      list: "listtest",
      title: "titletest",
      id: "idtest",
      type: "number",
      placeholder: "placeholdertest"
    }
   });

  expect(wrapper.html()).toContain("name=\"nametest\"");
  expect(wrapper.html()).toContain("list=\"listtest\"");
  expect(wrapper.html()).toContain("title=\"titletest\"");
  expect(wrapper.html()).toContain("id=\"idtest\"");
  expect(wrapper.html()).toContain("type=\"number\"");
  expect(wrapper.html()).toContain("placeholder=\"placeholdertest\"");
});