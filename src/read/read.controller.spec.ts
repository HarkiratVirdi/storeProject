import { Test, TestingModule } from '@nestjs/testing';
import { ReadController } from './read.controller';
import { createMocks } from 'node-mocks-http';
import isUserLogged from '../middlewares/checkIfUserLogged';

describe('ReadController', () => {
  let controller: ReadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadController],
    }).compile();

    controller = module.get<ReadController>(ReadController);
  });


  it('Read Controller should be defined', () => {
    expect(controller).toBeDefined();
  })
});
