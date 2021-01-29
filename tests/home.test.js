import { mount } from '@vue/test-utils'
import homePage from '@/components/home'

describe('Home page loaded', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(homePage)
    expect(wrapper.vm).toBeTruthy()
  })
})
