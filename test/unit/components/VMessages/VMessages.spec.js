import VMessages from '@/components/VMessages'
import { test } from '@/test'

test('VMessages.js', ({ mount }) => {
  it('should have a default array', () => {
    const wrapper = mount(VMessages)

    expect(Array.isArray(wrapper.vm.value)).toBe(true)
  })

  it('should show messages', () => {
    const wrapper = mount(VMessages, {
      propsData: {
        messages: ['foo', 'bar']
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ value: [] })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
