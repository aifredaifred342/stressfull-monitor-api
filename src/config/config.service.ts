import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly logger = new Logger(ConfigService.name);
  private readonly envConfig: { [key: string]: string };

  constructor() {
    try {
      const filePath = this.findFilePath();
      this.logger.log(`Load env: ${filePath}`);
      this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    } catch (exception) {
      this.logger.error(`Error with .env file: ${exception}`);
    }
  }

  private findFilePath() {
    if (process.env.CONFIG_PATH) {
      return process.env.CONFIG_PATH;
    }

    const environment = process.env.NODE_ENV || 'local';

    return `env/${environment}.env`;
  }

  get(key: string): string {
    return process.env[key] || this.envConfig[key];
  }

  getNumber(key: string): number {
    const value = this.get(key);
    return Number(value);
  }

  getBoolean(key: string): boolean {
    const value = this.get(key);
    return value === 'true';
  }
}
