package com.intelligent.systems.aifred.services;

import com.intelligent.systems.aifred.HttpClient;
import com.intelligent.systems.aifred.RequestContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@Slf4j
public class VideoService {

  @Autowired
  private HttpClient httpClient;

  @Autowired
  private RequestContext requestContext;

  public Object uploadFile(MultipartFile file, String name, String description) {
    String url = "https://api.videoindexer.ai/trial/Accounts/f943b067-d120-4028-8f60-58ff6e6edc5b/Videos";
    String token = requestContext.getHeader("Authorization").orElseThrow(RuntimeException::new);
    LinkedMultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
    map.add("file", file.getResource());
    UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url)
        .queryParam("name", name)
        .queryParam("description", description)
        .queryParam("language", "es-ES")
        .queryParam("privacy", "Private")
        .queryParam("sendSuccessful", "true")
        .queryParam("indexingPreset", "Default")
        .queryParam("StreamingPreset", "Default")
        .queryParam("accessToken", token);


    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.MULTIPART_FORM_DATA);
    HttpEntity<LinkedMultiValueMap<String, Object>> httpEntity = new HttpEntity<>(map, headers);
    ResponseEntity<Object> objectResponseEntity = httpClient.doPost(builder.toUriString(), httpEntity, Object.class);

    return objectResponseEntity;
  }

  public String addParameterToUrl(String url, String name, String value) {
    return url + name + "=" + value + "&";
  }
}
