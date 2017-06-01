import { TravelPlannerUIPage } from './app.po';

describe('travel-planner-ui App', () => {
  let page: TravelPlannerUIPage;

  beforeEach(() => {
    page = new TravelPlannerUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
