import React from 'react'
import Home from '../../src/Home/Home'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<Home />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4')
    expect(welcome).to.exist()
    expect(welcome.text()).to.match(/Welcome!/)
  })

  it('Renders an awesome duck image', () => {
    const duck = _component.find('img')
    expect(duck).to.exist()
    expect(duck.attr('alt')).to.match(/This is a duck, because Redux!/)
  })
})
