import { PaginateModule } from './paginate.module';

describe('PaginateModule', () => {
  let paginateModule: PaginateModule;

  beforeEach(() => {
    paginateModule = new PaginateModule();
  });

  it('should create an instance', () => {
    expect(paginateModule).toBeTruthy();
  });
});
