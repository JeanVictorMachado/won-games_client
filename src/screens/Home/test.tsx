import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGamesTitle: 'New Games',
  newGames: gamesMock,
  mostPopularGamesTitle: 'Popular Games',
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGamesTitle: 'Upcoming Games',
  upcomingGames: gamesMock,
  upcomingHighligth: highlightMock,
  freeGamesTitle: 'Free Games',
  freeGames: gamesMock,
  freeHighligth: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase" />
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider" />
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
