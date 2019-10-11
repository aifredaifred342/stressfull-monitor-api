package com.intelligent.systems.aifred.controllers;

import com.intelligent.systems.aifred.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/videos")
public class VideoController {

  @Autowired
  private VideoService videoService;

  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public Object uploadVideo(@RequestParam MultipartFile file, @RequestParam String name, @RequestParam String description) {
    return videoService.uploadFile(file, name, description);
  }
}
