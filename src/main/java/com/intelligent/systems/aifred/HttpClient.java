package com.intelligent.systems.aifred;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class HttpClient {

  @Value("${video.api.url.base}")
  private String baseUrl;

  @Autowired
  private RestTemplate restTemplate;

  public <T> ResponseEntity<T> doPost(String url, HttpEntity httpEntity, Class<T> entityClass) {
    return restTemplate.exchange(baseUrl + url, HttpMethod.POST, httpEntity, entityClass);
  }
}
