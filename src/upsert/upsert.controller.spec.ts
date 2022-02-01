import { Test, TestingModule } from '@nestjs/testing';
import { UpsertController } from './upsert.controller';


describe('UpsertController', () => {
  let controller: UpsertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpsertController],
    }).compile();

    controller = module.get<UpsertController>(UpsertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });



});
