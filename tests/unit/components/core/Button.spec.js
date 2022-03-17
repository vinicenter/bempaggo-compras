import { mount } from '@vue/test-utils'
import Button from '@/components/core/Button.vue'

test('Button test Router', () => {
  const wrapper = mount(Button, { 
    propsData: {
      style: "secondary",
      type: "router",
      href: "https://unittestsite.com",
      dataBsToggle: "dataBsToggletest",
      dataBsTarget: "dataBsTargettest",
      dataBsDismiss: "dataBsDismisstest"
    },
    slots: {
      default: "testingslot"
    }
   });

  expect(wrapper.html()).toContain("btn-secondary");
  expect(wrapper.html()).toContain("testingslot");
  expect(wrapper.html()).toContain("to=\"https://unittestsite.com\"");
  expect(wrapper.html()).toContain("data-bs-toggle=\"dataBsToggletest\"");
  expect(wrapper.html()).toContain("data-bs-target=\"dataBsTargettest\"");
  expect(wrapper.html()).toContain("data-bs-dismiss=\"dataBsDismisstest\"");
});

test('Button test Link', () => {
  const wrapper = mount(Button, { 
    propsData: {
      style: "secondary",
      type: "link",
      dataBsToggle: "dataBsToggletest",
      dataBsTarget: "dataBsTargettest",
      dataBsDismiss: "dataBsDismisstest"
    },
    slots: {
      default: "testingslot"
    }
   });

  expect(wrapper.html()).toContain("btn-secondary");
  expect(wrapper.html()).toContain("testingslot");
  expect(wrapper.html()).toContain("data-bs-toggle=\"dataBsToggletest\"");
  expect(wrapper.html()).toContain("data-bs-target=\"dataBsTargettest\"");
  expect(wrapper.html()).toContain("data-bs-dismiss=\"dataBsDismisstest\"");
});