import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { VideoService } from '../../domain/services/video.service';

@Controller('video')
export class VideoController {

  constructor(
      private readonly videoService: VideoService,
  ) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public uploadVideo(@UploadedFile() file) {
    return this.videoService.uploadVideo(file);
  }
}
