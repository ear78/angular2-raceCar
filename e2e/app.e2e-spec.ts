import { Angular2RaceCarPage } from './app.po';

describe('angular2-race-car App', () => {
  let page: Angular2RaceCarPage;

  beforeEach(() => {
    page = new Angular2RaceCarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
