import { TravelPlannerUiPage } from './app.po';

describe('travel-planner-ui App', () => {
  let page: TravelPlannerUiPage;

  beforeEach(() => {
    page = new TravelPlannerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
