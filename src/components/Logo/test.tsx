import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = render(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('shoud render a white label by default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('shoud render a black label when color is passed', () => {
    render(<Logo color={'black'} />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('shoud render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('shoud render a bigger logo', () => {
    render(<Logo size={'large'} />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('shoud render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
