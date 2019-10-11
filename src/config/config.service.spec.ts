import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: ConfigService,
        useValue: new ConfigService(),
      },
      ],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get CONTEXT_PATH value as tink', () => {
    expect(service.get('TINK_CONTEXT_PATH')).toBe('tink');
  });
});
