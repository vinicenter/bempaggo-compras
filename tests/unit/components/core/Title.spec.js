import { mount } from '@vue/test-utils'
import Title from '@/components/core/Title.vue'

test('Title output <h1>test</h1>', () => {
  const content = 'test';
  const tagStart = '<h1>';
  const tagEnd = '</h1>';

  const wrapper = mount(Title, {
    propsData: {
      type: "h1"
    },
    slots: {
      default: content
    }
  });

  expect(wrapper.html()).toContain(content);
  expect(wrapper.html()).toContain(tagStart);
  expect(wrapper.html()).toContain(tagEnd);
});

test('Title output <h2>test</h2>', () => {
  const content = 'test';
  const tagStart = '<h2>';
  const tagEnd = '</h2>';

  const wrapper = mount(Title, {
    propsData: {
      type: "h2"
    },
    slots: {
      default: content
    }
  });

  expect(wrapper.html()).toContain(content);
  expect(wrapper.html()).toContain(tagStart);
  expect(wrapper.html()).toContain(tagEnd);
});

test('Title output <h3>test</h3>', () => {
  const content = 'test';
  const tagStart = '<h3>';
  const tagEnd = '</h3>';

  const wrapper = mount(Title, {
    propsData: {
      type: "h3"
    },
    slots: {
      default: content
    }
  });

  expect(wrapper.html()).toContain(content);
  expect(wrapper.html()).toContain(tagStart);
  expect(wrapper.html()).toContain(tagEnd);
});

test('Title output <h4>test</h4>', () => {
  const content = 'test';
  const tagStart = '<h4>';
  const tagEnd = '</h4>';

  const wrapper = mount(Title, {
    propsData: {
      type: "h4"
    },
    slots: {
      default: content
    }
  });

  expect(wrapper.html()).toContain(content);
  expect(wrapper.html()).toContain(tagStart);
  expect(wrapper.html()).toContain(tagEnd);
});

test('Title output <h5>test</h5>', () => {
  const content = 'test';
  const tagStart = '<h5>';
  const tagEnd = '</h5>';

  const wrapper = mount(Title, {
    propsData: {
      type: "h5"
    },
    slots: {
      default: content
    }
  });

  expect(wrapper.html()).toContain(content);
  expect(wrapper.html()).toContain(tagStart);
  expect(wrapper.html()).toContain(tagEnd);
});

test('Title output <h6>test</h6>', () => {
  const content = 'test';
  const tagStart = '<h6>';
  const tagEnd = '</h6>';

  const wrapper = mount(Title, {
    propsData: {
      type: "h6"
    },
    slots: {
      default: content
    }
  });

  expect(wrapper.html()).toContain(content);
  expect(wrapper.html()).toContain(tagStart);
  expect(wrapper.html()).toContain(tagEnd);
});