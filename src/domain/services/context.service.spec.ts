import { Test } from '@nestjs/testing';
import { Provider } from '@nestjs/common';
import { ContextService } from './context.service';

describe('ContextService', () => {
  let service: ContextService;

  beforeEach(async () => {
    const providers: Provider[] = [
      ContextService,
    ];
    const module = await Test.createTestingModule({ providers }).compile();

    service = module.get<ContextService>(ContextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
